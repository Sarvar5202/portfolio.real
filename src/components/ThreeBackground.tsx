// src/components/ThreeBackground.tsx
'use client';

import {useEffect, useRef} from 'react';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let cleanupFunc: (() => void) | undefined;

    const loadScript = () => {
      if ((window as any).THREE) {
        initThree();
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        script.onload = () => initThree();
        document.body.appendChild(script);
      }
    };

    const initThree = () => {
      const container = containerRef.current;
      const THREE = (window as any).THREE;
      if (!container || !THREE) return;

      container.innerHTML = '';

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 40;

      const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true, powerPreference: 'high-performance'});
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      scene.add(ambientLight);

      const lightCyan = new THREE.PointLight(0x38bdf8, 5, 150);
      lightCyan.position.set(30, 30, 30);
      scene.add(lightCyan);

      const lightPurple = new THREE.PointLight(0x8b5cf6, 5, 150);
      lightPurple.position.set(-30, -20, -20);
      scene.add(lightPurple);

      const group = new THREE.Group();
      scene.add(group);

      // Code / Data Nodes Mesh
      const torusGeo = new THREE.TorusKnotGeometry(9, 2.2, 100, 16);
      const torusMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const torusMesh = new THREE.Mesh(torusGeo, torusMat);
      torusMesh.position.set(12, 4, -10);
      group.add(torusMesh);

      const icoGeo = new THREE.IcosahedronGeometry(7, 1);
      const icoMat = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const icoMesh = new THREE.Mesh(icoGeo, icoMat);
      icoMesh.position.set(-18, -6, -15);
      group.add(icoMesh);

      // Cyber Grid Floor
      const gridHelper = new THREE.GridHelper(150, 40, 0x38bdf8, 0x8b5cf6);
      gridHelper.position.y = -22;
      (gridHelper.material as any).transparent = true;
      (gridHelper.material as any).opacity = 0.25;
      scene.add(gridHelper);

      // Particles System
      const particleCount = 1200;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color1 = new THREE.Color(0x38bdf8);
      const color2 = new THREE.Color(0x8b5cf6);
      const color3 = new THREE.Color(0x06b6d4);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 140;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;

        const rand = Math.random();
        const mixColor = rand < 0.5 ? color1.clone().lerp(color2, rand * 2) : color2.clone().lerp(color3, (rand - 0.5) * 2);
        colors[i] = mixColor.r;
        colors[i + 1] = mixColor.g;
        colors[i + 2] = mixColor.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 1.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const particleSystem = new THREE.Points(particleGeo, particleMat);
      scene.add(particleSystem);

      let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX - window.innerWidth / 2) * 0.005;
        mouseY = (e.clientY - window.innerHeight / 2) * 0.005;
      };
      window.addEventListener('mousemove', handleMouseMove);

      let scrollY = 0;
      const handleScroll = () => {
        scrollY = window.scrollY * 0.01;
      };
      window.addEventListener('scroll', handleScroll);

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        torusMesh.rotation.x = elapsedTime * 0.2;
        torusMesh.rotation.y = elapsedTime * 0.3;

        icoMesh.rotation.x = elapsedTime * 0.25;
        icoMesh.rotation.z = elapsedTime * 0.15;

        particleSystem.rotation.y = elapsedTime * 0.03;
        gridHelper.position.z = (elapsedTime * 2) % 4;

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        camera.position.x = targetX * 12;
        camera.position.y = -targetY * 12 - (scrollY * 0.15);
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };
      animate();

      cleanupFunc = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    loadScript();

    return () => {
      if (cleanupFunc) cleanupFunc();
    };
  }, []);

  return <div id="webgl-bg" ref={containerRef} />;
}
