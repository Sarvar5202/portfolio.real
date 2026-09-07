// src/components/common/CyberBackground.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CyberBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.018);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 48);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030712, 1);
    container.appendChild(renderer.domElement);

    // Master Group for Parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- Colors ---
    const COLOR_CYAN = 0x00f0ff;
    const COLOR_BLUE = 0x0077ff;
    const COLOR_DEEP_BLUE = 0x0033aa;
    const COLOR_WHITE_CYAN = 0xe0f7ff;

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0x001a33, 2.0);
    scene.add(ambientLight);

    const mouseLight = new THREE.PointLight(COLOR_CYAN, 3, 60);
    mouseLight.position.set(0, 0, 15);
    scene.add(mouseLight);

    const centerGlow = new THREE.PointLight(COLOR_BLUE, 2, 40);
    centerGlow.position.set(0, 0, 5);
    masterGroup.add(centerGlow);

    // ==========================================
    // 1. CENTRAL HUD RINGS & RETICLES (Z = 1 to 5)
    // ==========================================
    const hudGroup = new THREE.Group();
    masterGroup.add(hudGroup);

    // Helper to create circular line / arc
    const createArc = (
      radius: number,
      startAngle = 0,
      endAngle = Math.PI * 2,
      segments = 64,
      color = COLOR_CYAN,
      opacity = 0.6
    ) => {
      const points: THREE.Vector3[] = [];
      const step = (endAngle - startAngle) / segments;
      for (let i = 0; i <= segments; i++) {
        const theta = startAngle + i * step;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Line(geometry, material);
    };

    // Helper: Segmented Ring with gaps
    const createSegmentedRing = (
      radius: number,
      segmentCount: number,
      gapRatio = 0.25,
      color = COLOR_CYAN,
      opacity = 0.7
    ) => {
      const group = new THREE.Group();
      const anglePerSegment = (Math.PI * 2) / segmentCount;
      const arcAngle = anglePerSegment * (1 - gapRatio);

      for (let i = 0; i < segmentCount; i++) {
        const start = i * anglePerSegment;
        const line = createArc(radius, start, start + arcAngle, 24, color, opacity);
        group.add(line);
      }
      return group;
    };

    // Helper: Dotted / Tick Ring
    const createTickRing = (
      radius: number,
      tickCount: number,
      tickLength = 0.4,
      color = COLOR_CYAN,
      opacity = 0.5
    ) => {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i < tickCount; i++) {
        const theta = (i / tickCount) * Math.PI * 2;
        const cos = Math.cos(theta);
        const sin = Math.sin(theta);
        points.push(new THREE.Vector3(cos * radius, sin * radius, 0));
        points.push(new THREE.Vector3(cos * (radius + tickLength), sin * (radius + tickLength), 0));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.LineSegments(geometry, material);
    };

    // Central concentric circles
    hudGroup.add(createArc(1.8, 0, Math.PI * 2, 48, COLOR_WHITE_CYAN, 0.9));
    hudGroup.add(createArc(2.5, 0, Math.PI * 2, 64, COLOR_CYAN, 0.7));
    hudGroup.add(createArc(3.8, 0, Math.PI * 2, 64, COLOR_BLUE, 0.5));

    // Dynamic rotating ring layers
    const ringLayer1 = createSegmentedRing(6.0, 4, 0.25, COLOR_CYAN, 0.8);
    const ringLayer2 = createSegmentedRing(8.5, 3, 0.35, COLOR_WHITE_CYAN, 0.85);
    const ringLayer3 = createTickRing(10.5, 72, 0.5, COLOR_CYAN, 0.5);
    const ringLayer4 = createSegmentedRing(12.5, 6, 0.3, COLOR_BLUE, 0.6);
    const ringLayer5 = createTickRing(15.0, 96, 0.7, COLOR_WHITE_CYAN, 0.45);
    const ringLayer6 = createSegmentedRing(17.5, 4, 0.4, COLOR_CYAN, 0.4);

    hudGroup.add(ringLayer1);
    hudGroup.add(ringLayer2);
    hudGroup.add(ringLayer3);
    hudGroup.add(ringLayer4);
    hudGroup.add(ringLayer5);
    hudGroup.add(ringLayer6);

    // Crosshairs / Reticles (Targeting axes)
    const crosshairPoints: THREE.Vector3[] = [
      // Horizontal
      new THREE.Vector3(-24, 0, 0),
      new THREE.Vector3(-4.5, 0, 0),
      new THREE.Vector3(4.5, 0, 0),
      new THREE.Vector3(24, 0, 0),
      // Vertical
      new THREE.Vector3(0, -18, 0),
      new THREE.Vector3(0, -4.5, 0),
      new THREE.Vector3(0, 4.5, 0),
      new THREE.Vector3(0, 18, 0),
    ];
    const crosshairGeo = new THREE.BufferGeometry().setFromPoints(crosshairPoints);
    const crosshairMat = new THREE.LineBasicMaterial({
      color: COLOR_CYAN,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    hudGroup.add(new THREE.LineSegments(crosshairGeo, crosshairMat));

    // ==========================================
    // 2. PCB CIRCUIT BOARD TRACES & JUNCTIONS (Z = -2 to 0)
    // ==========================================
    const circuitGroup = new THREE.Group();
    masterGroup.add(circuitGroup);

    // Predefined circuit paths matching the reference aesthetic
    const circuitTracks: THREE.Vector3[][] = [];
    const nodePositions: THREE.Vector3[] = [];

    const addTrace = (coords: [number, number][]) => {
      const pts = coords.map(([x, y]) => new THREE.Vector3(x, y, -0.5));
      circuitTracks.push(pts);
      // add nodes at start and end
      nodePositions.push(pts[0], pts[pts.length - 1]);
    };

    // Left side circuit bus traces
    addTrace([[-38, 14], [-24, 14], [-20, 10], [-14, 10]]);
    addTrace([[-40, 10], [-26, 10], [-22, 6], [-13, 6]]);
    addTrace([[-36, 6], [-28, 6], [-24, 2], [-14, 2]]);
    addTrace([[-42, 0], [-28, 0], [-22, -6], [-13, -6]]);
    addTrace([[-38, -6], [-26, -6], [-20, -12], [-14, -12]]);
    addTrace([[-36, -12], [-24, -12], [-18, -16], [-10, -16]]);
    addTrace([[-32, 18], [-18, 18], [-12, 12]]);
    addTrace([[-30, -18], [-16, -18], [-10, -12]]);

    // Right side circuit bus traces
    addTrace([[38, 14], [24, 14], [20, 10], [14, 10]]);
    addTrace([[40, 10], [26, 10], [22, 6], [13, 6]]);
    addTrace([[36, 6], [28, 6], [24, 2], [14, 2]]);
    addTrace([[42, 0], [28, 0], [22, -6], [13, -6]]);
    addTrace([[38, -6], [26, -6], [20, -12], [14, -12]]);
    addTrace([[36, -12], [24, -12], [18, -16], [10, -16]]);
    addTrace([[32, 18], [18, 18], [12, 12]]);
    addTrace([[30, -18], [16, -18], [10, -12]]);

    // Vertical circuit bus branches
    addTrace([[-6, 22], [-6, 14], [-2, 10]]);
    addTrace([[6, 22], [6, 14], [2, 10]]);
    addTrace([[-6, -22], [-6, -14], [-2, -10]]);
    addTrace([[6, -22], [6, -14], [2, -10]]);

    // Peripheral IC chip pads and detail blocks
    addTrace([[-28, 16], [-28, 20], [-22, 20]]);
    addTrace([[28, 16], [28, 20], [22, 20]]);
    addTrace([[-28, -16], [-28, -20], [-22, -20]]);
    addTrace([[28, -16], [28, -20], [22, -20]]);

    // Build line segments for circuit traces
    const traceLinePoints: THREE.Vector3[] = [];
    circuitTracks.forEach((track) => {
      for (let i = 0; i < track.length - 1; i++) {
        traceLinePoints.push(track[i], track[i + 1]);
      }
    });

    const tracesGeo = new THREE.BufferGeometry().setFromPoints(traceLinePoints);
    const tracesMat = new THREE.LineBasicMaterial({
      color: COLOR_CYAN,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    circuitGroup.add(new THREE.LineSegments(tracesGeo, tracesMat));

    // Glow line layer (slightly thicker / dimmer for neon bloom feel)
    const tracesGlowMat = new THREE.LineBasicMaterial({
      color: COLOR_BLUE,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    circuitGroup.add(new THREE.LineSegments(tracesGeo, tracesGlowMat));

    // Circuit Junction Nodes (Circles/Dots at solder points)
    const nodeGeo = new THREE.BufferGeometry().setFromPoints(nodePositions);
    const nodeMat = new THREE.PointsMaterial({
      color: COLOR_WHITE_CYAN,
      size: 0.8,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    circuitGroup.add(new THREE.Points(nodeGeo, nodeMat));

    // Square IC Chip Clusters (Grid of micro-pads)
    const padPoints: THREE.Vector3[] = [];
    const createPadGrid = (startX: number, startY: number, rows: number, cols: number, spacing: number) => {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          padPoints.push(new THREE.Vector3(startX + c * spacing, startY + r * spacing, -0.6));
        }
      }
    };
    createPadGrid(-34, 4, 4, 6, 0.7);
    createPadGrid(30, 4, 4, 6, 0.7);
    createPadGrid(-34, -8, 4, 6, 0.7);
    createPadGrid(30, -8, 4, 6, 0.7);
    createPadGrid(-8, 16, 3, 5, 0.7);
    createPadGrid(5, 16, 3, 5, 0.7);
    createPadGrid(-8, -18, 3, 5, 0.7);
    createPadGrid(5, -18, 3, 5, 0.7);

    const padGeo = new THREE.BufferGeometry().setFromPoints(padPoints);
    const padMat = new THREE.PointsMaterial({
      color: COLOR_BLUE,
      size: 0.4,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    circuitGroup.add(new THREE.Points(padGeo, padMat));

    // ==========================================
    // 3. PULSING DATA PACKETS (Traveling on lines)
    // ==========================================
    interface Packet {
      trackIndex: number;
      segmentIndex: number;
      progress: number;
      speed: number;
      mesh: THREE.Mesh;
    }

    const packets: Packet[] = [];
    const packetGeo = new THREE.SphereGeometry(0.25, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({
      color: COLOR_WHITE_CYAN,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });

    // Select tracks for packets to travel on
    const activeTrackIndices = [0, 1, 2, 4, 6, 8, 9, 10, 12, 14, 16, 17, 18, 19];
    activeTrackIndices.forEach((idx) => {
      const track = circuitTracks[idx];
      if (!track || track.length < 2) return;

      const mesh = new THREE.Mesh(packetGeo, packetMat);
      mesh.position.copy(track[0]);
      circuitGroup.add(mesh);

      packets.push({
        trackIndex: idx,
        segmentIndex: 0,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
        mesh,
      });
    });

    // ==========================================
    // 4. FLOATING FOREGROUND SCI-FI PARTICLES
    // ==========================================
    const particleCount = 200;
    const particleCoords = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particleCoords[i] = (Math.random() - 0.5) * 80;
      particleCoords[i + 1] = (Math.random() - 0.5) * 50;
      particleCoords[i + 2] = (Math.random() - 0.5) * 30 + 5;
    }
    const fgParticlesGeo = new THREE.BufferGeometry();
    fgParticlesGeo.setAttribute('position', new THREE.BufferAttribute(particleCoords, 3));
    const fgParticlesMat = new THREE.PointsMaterial({
      color: COLOR_CYAN,
      size: 0.6,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const fgParticles = new THREE.Points(fgParticlesGeo, fgParticlesMat);
    masterGroup.add(fgParticles);

    // ==========================================
    // 5. MOUSE PARALLAX & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = nx * 0.25;
      targetY = ny * 0.2;

      // Move mouse spotlight
      mouseLight.position.x = nx * 25;
      mouseLight.position.y = ny * 18;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Rotate HUD rings at varying opposing speeds
      ringLayer1.rotation.z = elapsed * 0.25;
      ringLayer2.rotation.z = -elapsed * 0.18;
      ringLayer3.rotation.z = elapsed * 0.08;
      ringLayer4.rotation.z = -elapsed * 0.14;
      ringLayer5.rotation.z = elapsed * 0.05;
      ringLayer6.rotation.z = -elapsed * 0.09;

      // Pulse center light
      centerGlow.intensity = 2.0 + Math.sin(elapsed * 2.5) * 0.8;

      // Update traveling data packets
      packets.forEach((p) => {
        const track = circuitTracks[p.trackIndex];
        if (!track || track.length < 2) return;

        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.segmentIndex = (p.segmentIndex + 1) % (track.length - 1);
        }

        const p1 = track[p.segmentIndex];
        const p2 = track[p.segmentIndex + 1];
        if (p1 && p2) {
          p.mesh.position.lerpVectors(p1, p2, p.progress);
        }
      });

      // Drift subtle foreground particles
      fgParticles.rotation.y = elapsed * 0.015;
      fgParticles.rotation.x = elapsed * 0.008;

      // Smooth Parallax tilt
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      masterGroup.rotation.y = mouseX;
      masterGroup.rotation.x = -mouseY;

      renderer.render(scene, camera);
    };

    animate();

    // ==========================================
    // 6. COMPONENT CLEANUP ON UNMOUNT
    // ==========================================
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js resources
      renderer.dispose();
      scene.clear();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #050d1a 0%, #030712 70%, #010409 100%)',
      }}
    />
  );
}
