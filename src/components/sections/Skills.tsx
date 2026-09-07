// src/components/sections/Skills.tsx
import {useTranslations} from 'next-intl';

export default function Skills() {
  const t = useTranslations('Skills');

  const aiSkills = [
    {
      name: "ChatGPT (OpenAI)",
      level: 98,
      desc: "GPT-4o, O1, Advanced Canvas",
      glowColor: "rgba(16, 185, 129, 0.25)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M22.2819 9.8211C22.2819 8.32837 21.6033 6.94229 20.4851 6.01255C20.6554 4.50284 20.0617 3.01889 18.919 2.01529C17.7762 1.01168 16.2081 0.603704 14.7171 0.923055C13.8052 0.134015 12.6074 -0.198305 11.4116 0.0827299C10.2158 0.363765 9.15541 1.22687 8.52086 2.43324C7.07064 2.1158 5.56837 2.50293 4.49842 3.47214C3.42847 4.44135 2.90947 5.88294 3.10852 7.33235C1.88414 8.20459 1.13968 9.58913 1.125 11.0772C1.125 12.57 1.80356 13.956 2.9218 14.8858C2.75147 16.3955 3.34516 17.8795 4.48788 18.8831C5.6306 19.8867 7.19875 20.2947 8.68972 19.9753C9.60166 20.7644 10.7995 21.0967 11.9953 20.8157C13.1911 20.5346 14.2515 19.6715 14.886 18.4652C16.3362 18.7826 17.8385 18.3955 18.9085 17.4263C19.9784 16.457 20.4974 15.0155 20.2984 13.566C21.5228 12.6938 22.2672 11.3093 22.2819 9.8211Z" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="rgba(16,185,129,0.15)"/>
          <path d="M12 6.5V17.5M6.5 12H17.5" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "Claude (Anthropic)",
      level: 96,
      desc: "Claude 3.5 Sonnet, Artifacts",
      glowColor: "rgba(245, 158, 11, 0.25)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.8 8.2L20 7L15.2 11.5L19 16.5L13 14.2L12 21L11 14.2L5 16.5L8.8 11.5L4 7L10.2 8.2L12 2Z" fill="#F59E0B" stroke="#FBBF24" strokeWidth="1.2"/>
          <circle cx="12" cy="11.5" r="2.5" fill="#050816"/>
        </svg>
      )
    },
    {
      name: "Google Gemini",
      level: 95,
      desc: "Gemini 1.5 Pro, 2M Context",
      glowColor: "rgba(56, 189, 248, 0.25)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C12 7.52285 16.4771 12 22 12C16.4771 12 12 16.4771 12 22C12 16.4771 7.52285 12 2 12C7.52285 12 12 7.52285 12 2Z" fill="url(#geminiGrad)"/>
          <defs>
            <linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22">
              <stop offset="0%" stopColor="#38BDF8"/>
              <stop offset="50%" stopColor="#8B5CF6"/>
              <stop offset="100%" stopColor="#EC4899"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "xAI Grok",
      level: 92,
      desc: "Grok 2, Realtime Search",
      glowColor: "rgba(255, 255, 255, 0.2)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#E2E8F0" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
          <path d="M7 17L17 7M7 7L17 17" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="3" fill="#38BDF8"/>
        </svg>
      )
    },
    {
      name: "Cursor AI & Copilot",
      level: 97,
      desc: "AI Codebase Indexing",
      glowColor: "rgba(168, 85, 247, 0.25)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M4 4L11 20L14 13L21 10L4 4Z" fill="#A855F7" stroke="#C084FC" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M14 13L19 18" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "v0 & Lovable",
      level: 94,
      desc: "Generative UI Engineering",
      glowColor: "rgba(6, 182, 212, 0.25)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="4" stroke="#06B6D4" strokeWidth="1.8" fill="rgba(6,182,212,0.1)"/>
          <path d="M7 10L10 13L7 16" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="16" x2="17" y2="16" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: "DeepSeek AI",
      level: 93,
      desc: "DeepSeek-V3 & R1 Logic",
      glowColor: "rgba(14, 165, 233, 0.25)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#0EA5E9" strokeWidth="1.8" fill="rgba(14,165,233,0.1)"/>
          <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="2" r="2" fill="#38BDF8"/>
        </svg>
      )
    },
    {
      name: "Prompt Engineering",
      level: 96,
      desc: "System Prompts, Few-Shot, CoT",
      glowColor: "rgba(245, 158, 11, 0.2)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="url(#promptGrad)" fillOpacity="0.2" stroke="#F59E0B" strokeWidth="1.5"/>
          <path d="M12 15L18 20L12 25" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="20" y1="25" x2="28" y2="25" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M26 12L27.5 15.5L31 17L27.5 18.5L26 22L24.5 18.5L21 17L24.5 15.5L26 12Z" fill="#FDE047"/>
          <defs><linearGradient id="promptGrad" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#F59E0B"/><stop offset="1" stopColor="#D97706"/></linearGradient></defs>
        </svg>
      )
    },
    {
      name: "LangChain & Agents",
      level: 90,
      desc: "Agentic Tooling & Chains",
      glowColor: "rgba(6, 182, 212, 0.2)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="url(#langGrad)" fillOpacity="0.2" stroke="#06B6D4" strokeWidth="1.5"/>
          <path d="M20 10L27 14V22L20 26L13 22V14L20 10Z" stroke="#22D3EE" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="20" cy="18" r="3" fill="#38BDF8"/>
          <path d="M20 21V29M13 18H7M27 18H33" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="7" cy="18" r="2" fill="#22D3EE"/>
          <circle cx="33" cy="18" r="2" fill="#22D3EE"/>
          <circle cx="20" cy="29" r="2" fill="#22D3EE"/>
          <defs><linearGradient id="langGrad" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#06B6D4"/><stop offset="1" stopColor="#0891B2"/></linearGradient></defs>
        </svg>
      )
    },
    {
      name: "RAG & Vector Search",
      level: 89,
      desc: "Pinecone, Chroma, Embeddings",
      glowColor: "rgba(16, 185, 129, 0.2)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="url(#ragGrad)" fillOpacity="0.2" stroke="#10B981" strokeWidth="1.5"/>
          <ellipse cx="20" cy="13" rx="10" ry="4" fill="#059669" stroke="#34D399" strokeWidth="1.5"/>
          <ellipse cx="20" cy="20" rx="10" ry="4" fill="#047857" stroke="#34D399" strokeWidth="1.5"/>
          <ellipse cx="20" cy="27" rx="10" ry="4" fill="#065F46" stroke="#34D399" strokeWidth="1.5"/>
          <path d="M20 9V27M14 13L26 27M26 13L14 27" stroke="#6EE7B7" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="2 2"/>
          <defs><linearGradient id="ragGrad" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#10B981"/><stop offset="1" stopColor="#047857"/></linearGradient></defs>
        </svg>
      )
    },
    {
      name: "Midjourney & Flux",
      level: 91,
      desc: "AI Graphics & Mockups",
      glowColor: "rgba(236, 72, 153, 0.2)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L14.5 8.5L20 11L14.5 13.5L12 19L9.5 13.5L4 11L9.5 8.5L12 3Z" fill="#EC4899" stroke="#F472B6" strokeWidth="1"/>
          <path d="M18 16L19.2 18.8L22 20L19.2 21.2L18 24L16.8 21.2L14 20L16.8 18.8L18 16Z" fill="#F472B6"/>
        </svg>
      )
    },
    {
      name: "Function Calling",
      level: 92,
      desc: "API Tools & Structured JSON",
      glowColor: "rgba(234, 179, 8, 0.2)",
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" fill="url(#fnGrad)" fillOpacity="0.2" stroke="#EAB308" strokeWidth="1.5"/>
          <path d="M20 12C15.58 12 12 15.58 12 20C12 24.42 15.58 28 20 28C24.42 28 28 24.42 28 20" stroke="#FACC15" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 17L11 20L15 23" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25 17L29 20L25 23" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="3" fill="#EAB308"/>
          <defs><linearGradient id="fnGrad" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#EAB308"/><stop offset="1" stopColor="#CA8A04"/></linearGradient></defs>
        </svg>
      )
    }
  ];

  const frontendSkills = [
    { name: "HTML5", iconClass: "devicon-html5-plain colored", level: 95 },
    { name: "CSS3", iconClass: "devicon-css3-plain colored", level: 92 },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored", level: 95 },
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored", level: 90 },
    { name: "React", iconClass: "devicon-react-original colored", level: 94 },
    { name: "Next.js", iconClass: "devicon-nextjs-original text-white", level: 90 },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain colored", level: 96 },
    { name: "Redux Toolkit", iconClass: "devicon-redux-original colored", level: 88 },
    {
      name: "Zustand",
      level: 90,
      svg: (
        <svg className="w-10 h-10 text-amber-400" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="10" width="28" height="20" rx="6" fill="#D97706" fillOpacity="0.3" stroke="#F59E0B" strokeWidth="2"/>
          <path d="M14 16H26L14 24H26" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "React Query",
      level: 88,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="16" fill="#FF4154" fillOpacity="0.2" stroke="#FF4154" strokeWidth="1.5"/>
          <path d="M12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20C28 24.42 24.42 28 20 28" stroke="#FF4154" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="20" cy="20" r="4" fill="#FF4154"/>
        </svg>
      )
    },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored", level: 85 },
    { name: "Express.js", iconClass: "devicon-express-original text-white", level: 84 },
    {
      name: "REST API",
      level: 92,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="12" width="28" height="16" rx="4" fill="#0284C7" fillOpacity="0.2" stroke="#38BDF8" strokeWidth="1.5"/>
          <path d="M12 20H18M22 20H28M20 16V24" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored", level: 82 },
    { name: "Supabase", iconClass: "devicon-supabase-plain colored", level: 86 },
    { name: "Firebase", iconClass: "devicon-firebase-plain colored", level: 85 },
    { name: "Git", iconClass: "devicon-git-plain colored", level: 92 },
    { name: "GitHub", iconClass: "devicon-github-original text-white", level: 94 },
    { name: "Three.js", iconClass: "devicon-threejs-original text-white", level: 85 },
    {
      name: "GSAP",
      level: 88,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="10" width="28" height="20" rx="5" fill="#88CE02" fillOpacity="0.2" stroke="#88CE02" strokeWidth="1.5"/>
          <path d="M14 25L20 13L26 25M16 21H24" stroke="#88CE02" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Framer Motion",
      level: 85,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <path d="M12 10H28V18H20L12 10Z" fill="#A855F7"/>
          <path d="M12 18H28L20 26H12V18Z" fill="#C084FC"/>
          <path d="M12 26L20 34V26H12Z" fill="#E9D5FF"/>
        </svg>
      )
    },
    {
      name: "Responsive UI",
      level: 98,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="10" width="20" height="14" rx="2" stroke="#38BDF8" strokeWidth="2"/>
          <rect x="22" y="18" width="12" height="14" rx="2" fill="#050816" stroke="#38BDF8" strokeWidth="2"/>
          <circle cx="28" cy="29" r="1" fill="#38BDF8"/>
        </svg>
      )
    },
    {
      name: "SEO Engine",
      level: 90,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <circle cx="18" cy="18" r="10" stroke="#10B981" strokeWidth="2"/>
          <path d="M25 25L33 33" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M13 18L16 21L23 14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: "Performance",
      level: 94,
      svg: (
        <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
          <path d="M8 26C8 19.37 13.37 14 20 14C26.63 14 32 19.37 32 26" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M20 26L26 18" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="20" cy="26" r="3" fill="#F59E0B"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">01. {t('sectionTitle')}</h2>
        <h3 className="text-3xl md:text-5xl font-space font-bold text-white">{t('title')}</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Category 1: Prompt Engineering & AI */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-6 border-b border-amber-500/30 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 via-purple-500/20 to-cyan-500/20 text-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-500/40 p-2.5">
            <svg className="w-full h-full text-amber-400 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="rgba(245,158,11,0.2)"/>
              <circle cx="12" cy="12" r="3" fill="#F59E0B"/>
            </svg>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-space font-bold text-white flex items-center gap-2">
              {t('aiHeading')}
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">{t('certified')}</span>
            </h4>
            <p className="text-xs font-mono text-gray-400">{t('aiDesc')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" id="ai-skills-container">
          {aiSkills.map((skill, idx) => (
            <div key={idx} className="glass-card glass-card-hover ai-card-glow rounded-2xl p-5 flex flex-col items-center text-center group border-amber-500/20 hover:border-amber-400/50 transition-all">
              <div className="icon-badge mb-3" style={{filter: `drop-shadow(0 0 12px ${skill.glowColor})`}}>
                {skill.svg}
              </div>
              <h4 className="text-xs sm:text-sm font-space font-semibold text-white mb-1 group-hover:text-amber-300 transition-colors">{skill.name}</h4>
              <span className="text-[10px] font-mono text-amber-300/80 mb-3">{skill.desc}</span>
              <div className="w-full bg-gray-800/80 h-1.5 rounded-full overflow-hidden mt-auto border border-white/5">
                <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 h-full rounded-full" style={{width: `${skill.level}%`}}></div>
              </div>
              <span className="text-[10px] font-mono text-gray-400 mt-2">{skill.level}% {t('proficiency')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category 2: Frontend & Web Development */}
      <div>
        <div className="flex items-center gap-3 mb-6 border-b border-primary/30 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex items-center justify-center shadow-lg shadow-primary/20 border border-primary/30 p-2.5">
            <svg className="w-full h-full text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-space font-bold text-white">{t('feHeading')}</h4>
            <p className="text-xs font-mono text-gray-400">{t('feDesc')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" id="frontend-skills-container">
          {frontendSkills.map((skill, idx) => (
            <div key={idx} className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col items-center text-center group transition-all">
              <div className="icon-badge mb-3 text-3xl sm:text-4xl text-gray-200 group-hover:scale-110 transition-transform">
                {skill.svg ? skill.svg : <i className={skill.iconClass}></i>}
              </div>
              <h4 className="text-xs sm:text-sm font-space font-semibold text-white mb-2 group-hover:text-primary transition-colors">{skill.name}</h4>
              <div className="w-full bg-gray-800/80 h-1.5 rounded-full overflow-hidden mt-auto border border-white/5">
                <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" style={{width: `${skill.level}%`}}></div>
              </div>
              <span className="text-[10px] font-mono text-gray-400 mt-2">{skill.level}% {t('proficiency')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
