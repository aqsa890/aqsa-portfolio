import React, { useState, useEffect, useRef } from 'react';

// DevOps & DevSecOps tools requested by user with authentic SVG icons
const DEVOPS_TOOLS = [
  {
    name: 'Docker',
    color: '#0db7ed',
    bg: '#061a29',
    desc: 'Containers & Multi-Stage',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.714h2.118a.186.186 0 00.186-.185V6.289a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.888c0 .102.082.185.185.185m-2.954 0h2.119a.186.186 0 00.185-.185V6.289a.186.186 0 00-.185-.186h-2.119a.186.186 0 00-.185.186v1.888c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 00.186-.185V6.289a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185m5.91 2.716h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185m-2.955 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.119a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186H5.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M23.95 12.3c-.328-.535-.916-.867-1.572-.888-.13-.004-.26.007-.389.034-.515-1.07-1.488-1.554-2.597-1.32-.424.089-.817.294-1.144.595-.144-.08-.3-.146-.464-.196-.454-.14-1.018-.112-1.464.088-.06-.02-.12-.04-.183-.054-.378-.088-.853-.05-1.229.112v-1.95a.48.48 0 00-.479-.479h-2.534a.48.48 0 00-.479.479v1.942a4.42 4.42 0 00-.853-.083h-3.414c-.035 0-.07.004-.105.007V7.632a.48.48 0 00-.479-.479H5.6a.48.48 0 00-.479.479v2.946c-.036.003-.07.007-.105.012H2.482a.48.48 0 00-.479.479v1.943c-.452.193-.974.568-1.22 1.077-.283.585-.295 1.258-.032 1.848.742 1.666 2.378 2.766 4.195 2.808 3.526.082 7.054.043 10.58.006 1.838-.019 3.633-.564 5.088-1.625 1.543-1.125 2.456-2.88 2.486-4.79.006-.412-.083-.824-.26-1.185" />
      </svg>
    ),
  },
  {
    name: 'Kubernetes',
    color: '#326ce5',
    bg: '#0a1733',
    desc: 'Cluster Orchestration',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: 'Terraform',
    color: '#844fba',
    bg: '#1c0f2d',
    desc: 'Declarative IaC',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.44 0v7.575l6.561 3.79V3.787zm7.534 4.35v7.575l6.562 3.788V8.138zm7.536 0v7.575l6.05-3.493V.858zm-7.536 8.704v7.572l6.562 3.791V16.84z" />
      </svg>
    ),
  },
  {
    name: 'Ansible',
    color: '#ee0000',
    bg: '#2d0606',
    desc: 'Config Automation',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.27 18.064l-2.074-5.114-3.13 4.095-.783-.6 3.65-4.773L12 7.025l-4.717 11.04H5.435L11.39 4.394h1.22l4.82 11.285 2.15-5.266h1.776l-3.086 7.651z" />
      </svg>
    ),
  },
  {
    name: 'GitHub Actions',
    color: '#2088ff',
    bg: '#081a30',
    desc: 'CI/CD Multi-Job Pipelines',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    color: '#f4f4f4',
    bg: '#181818',
    desc: 'Branch Protection & PRs',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Linux',
    color: '#fcc624',
    bg: '#292004',
    desc: 'LVM, SSH & SysAdmin',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.002 0C8.428 0 7.42 3.018 7.42 6.643c0 1.298.24 2.656.638 3.864C6.26 11.455 5.2 13.34 5.2 15.658c0 1.92.748 3.518 1.94 4.398-.103.548-.168 1.13-.168 1.734 0 1.22.42 2.21 1.25 2.21.65 0 1.12-.61 1.68-.61.64 0 .97.61 1.74.61 1.15 0 1.9-.99 2.45-2.01.55 1.02 1.3 2.01 2.45 2.01.77 0 1.1-.61 1.74-.61.56 0 1.03.61 1.68.61.83 0 1.25-.99 1.25-2.21 0-.604-.065-1.186-.168-1.734 1.192-.88 1.94-2.478 1.94-4.398 0-2.318-1.06-4.203-2.858-5.151.398-1.208.638-2.566.638-3.864C16.584 3.018 15.576 0 12.002 0z" />
      </svg>
    ),
  },
  {
    name: 'Networking',
    color: '#00e5ff',
    bg: '#04222a',
    desc: 'VPC, ALB, Subnets, DNS',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="9" y="16" width="6" height="6" rx="1" />
        <path d="M5 8v3a1 1 0 001 1h12a1 1 0 001-1V8M12 12v4" />
      </svg>
    ),
  },
  {
    name: 'Jenkins',
    color: '#d24939',
    bg: '#2b0b07',
    desc: 'Self-Hosted Pipeline Automation',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    name: 'AWS Cloud',
    color: '#ff9900',
    bg: '#2b1902',
    desc: 'VPC, EC2, IAM, S3, ALB',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.75 14.25c-.27 0-.52-.08-.73-.24l-3.2-2.4a1.25 1.25 0 011.5-2l3.2 2.4c.58.44.42 1.34-.23 1.58-.17.04-.36.06-.54.06zM5.25 14.25c-.18 0-.37-.02-.54-.06-.65-.24-.81-1.14-.23-1.58l3.2-2.4a1.25 1.25 0 011.5 2l-3.2 2.4c-.21.16-.46.24-.73.24zm6.75-2.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zm0-6.75a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM2.25 19.5h19.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25H2.25C1.56 17 1 17.56 1 18.25s.56 1.25 1.25 1.25z" />
      </svg>
    ),
  },
  {
    name: 'Trivy',
    color: '#13b5ea',
    bg: '#051f2b',
    desc: 'Shift-Left Vulnerability Scanner',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Prometheus',
    color: '#e6522c',
    bg: '#2b0f07',
    desc: 'Metrics Telemetry & Alerting',
    svg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#ffbc2b',
    bg: '#241b05',
    desc: 'Automation & Scripting',
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.753h5.808v.825H3.88S0 5.79 0 11.94c0 6.14 3.393 5.92 3.393 5.92h2.025v-2.836s-.11-3.385 3.33-3.385h5.736s3.22.054 3.22-3.137V3.137S18.242 0 11.914 0zm-1.68 1.834a1.01 1.01 0 110 2.02 1.01 1.01 0 010-2.02z" />
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.753H11.986v-.825h8.134s3.88.444 3.88-5.706c0-6.14-3.393-5.92-3.393-5.92h-2.025v2.836s.11 3.385-3.33 3.385H9.516s-3.22-.054-3.22 3.137v5.327S5.758 24 12.086 24zm1.68-1.834a1.01 1.01 0 110-2.02 1.01 1.01 0 010 2.02z" />
      </svg>
    ),
  },
  {
    name: 'Nginx',
    color: '#009639',
    bg: '#04240f',
    desc: 'Reverse Proxy & Gateway',
    svg: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm-1.077 15.654h-1.87L5.59 9.878v5.776H3.846V8.346h1.868l3.465 5.776V8.346h1.744v7.308zm9.231-1.285l-1.378.796-3.83-6.634v6.634h-1.744V8.346h1.744l3.83 6.634V8.346h1.378v6.023z" />
      </svg>
    ),
  },
];

export { DEVOPS_TOOLS };

export default function CursorImageTrail({ containerRef }) {
  const [trail, setTrail] = useState([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const toolIdxRef = useRef(0);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    let idCounter = 0;

    const triggerBadge = (x, y) => {
      const dist = Math.hypot(x - lastPosRef.current.x, y - lastPosRef.current.y);
      if (dist > 45) {
        lastPosRef.current = { x, y };

        const currentTool = DEVOPS_TOOLS[toolIdxRef.current % DEVOPS_TOOLS.length];
        toolIdxRef.current += 1;
        const newId = ++idCounter;
        const rotation = (Math.random() - 0.5) * 20;

        setTrail((prev) => [
          ...prev.slice(-6), // keep up to 7 active floating icons
          {
            id: newId,
            x,
            y,
            tool: currentTool,
            rotation,
          },
        ]);

        // Auto remove after 900ms
        setTimeout(() => {
          setTrail((prev) => prev.filter((item) => item.id !== newId));
        }, 900);
      }
    };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      triggerBadge(x, y);
    };

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      triggerBadge(x, y);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {trail.map((item) => (
        <div
          key={item.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-out animate-in fade-in zoom-in-75"
          style={{
            left: item.x,
            top: item.y,
            transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
          }}
        >
          {/* ONLY show tools icons in attractive colorful form */}
          <div
            className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center p-3 shadow-2xl border-2 backdrop-blur-xl"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${item.tool.bg}fa 0%, #0a0a0a 100%)`,
              borderColor: item.tool.color,
              boxShadow: `0 14px 35px rgba(0,0,0,0.7), 0 0 25px ${item.tool.color}99, inset 0 0 15px ${item.tool.color}50`,
              color: item.tool.color,
            }}
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center filter drop-shadow">
              {item.tool.svg}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
