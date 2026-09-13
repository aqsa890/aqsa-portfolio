import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
  {
    role: "ORIC Research & Project Intern",
    company: "Office of Research, Innovation & Commercialization (ORIC) — CUSIT",
    date: "Nov 2025 – Jan 2026",
    location: "Peshawar, Pakistan",
    bullets: [
      "Assisted in administering university cloud research and innovation initiatives under faculty supervision, preparing technical documentation and milestone deliverables.",
      "Coordinated university-industry commercialization efforts, technology transfer documentation, and academic event governance."
    ]
  },
  {
    role: "Mobile Application Developer Intern",
    company: "Developers Hub Corporation",
    date: "Jun 2025 – Jul 2025",
    location: "Peshawar, Pakistan",
    bullets: [
      "Engineered cross-platform mobile interfaces connected to cloud backends, handling real-time data streaming and offline persistence.",
      "Collaborated in Agile development cycles, debugging runtime client bottlenecks and optimizing UI rendering performance."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "Codveda Technologies",
    date: "May 2025 – Jun 2025",
    location: "Peshawar, Pakistan",
    bullets: [
      "Constructed dynamic user interfaces and backend REST API microservices with role-based access control (RBAC).",
      "Participated in continuous integration pipelines, database migration scripts, and code review standards."
    ]
  },
  {
    role: "Web Developer Intern",
    company: "DevSpire Solutions",
    date: "Feb 2025 – May 2025",
    location: "Peshawar, Pakistan",
    bullets: [
      "Developed server-rendered dynamic web features connected to structured relational databases.",
      "Maintained version control discipline through Git branch protection, pull requests, and automated linting."
    ]
  }
];

const honorsData = [
  {
    title: "Pakistan Youth Leadership Initiative (PYLI 2025)",
    issuer: "British Council, WaterAid & IDEA Pakistan",
    detail: "Selected for intensive 4-day leadership and national social impact program",
    year: "2025"
  },
  {
    title: "6th International Conference on Emerging Trends (CUSIT)",
    issuer: "Conference Presentation & Organizing Committee",
    detail: "Presented cloud & telemetry platform innovation to academic and industry panel",
    year: "2025"
  },
  {
    title: "6th Student Talent Expo Peshawar",
    issuer: "Platform Innovation & Societal Impact Award",
    detail: "Showcased smart transportation platform and cloud architecture to jury",
    year: "2025"
  },
  {
    title: "Skillathon Competition (CUSIT 2024)",
    issuer: "Network Engineering & Topology Simulation",
    detail: "Demonstrated network architecture, subnetting, and Cisco Packet Tracer routing",
    year: "2024"
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState('internships');
  const [expandedRole, setExpandedRole] = useState(null);

  const toggleRole = (idx) => {
    setExpandedRole(prev => (prev === idx ? null : idx));
  };

  return (
    <section 
      id="experience" 
      className="panel relative flex flex-col justify-between w-full md:w-[130vw] lg:w-[115vw] shrink-0 min-h-screen md:h-screen bg-[#faf9f6] text-[#262220] px-5 py-8 md:pl-28 md:pr-16 md:py-12 overflow-y-auto md:overflow-hidden select-none"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#262220]/10 pb-3 mb-4 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="font-serif text-base md:text-xl font-normal uppercase leading-none tracking-tight text-[#262220]">
            Chapter IV
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#8a8178] font-mono">
            — Journey & Track Record
          </span>
        </div>
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#8a8178]">
          04. Experience
        </span>
      </div>

      {/* ─── MOBILE VIEW: Editorial Tabs (Internships vs Academics & Honors) ─── */}
      <div className="block lg:hidden mb-4">
        {/* Tab Switcher */}
        <div className="flex border border-[#262220]/15 rounded-sm p-1 bg-[#edeae6]/60 mb-4">
          <button
            onClick={() => setActiveTab('internships')}
            className={`flex-1 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'internships'
                ? 'bg-[#262220] text-[#f3eee8] font-semibold shadow-sm'
                : 'text-[#5a524d] hover:text-[#262220]'
            }`}
          >
            <Briefcase size={13} />
            <span>Internships (4)</span>
          </button>
          <button
            onClick={() => setActiveTab('academics')}
            className={`flex-1 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'academics'
                ? 'bg-[#262220] text-[#f3eee8] font-semibold shadow-sm'
                : 'text-[#5a524d] hover:text-[#262220]'
            }`}
          >
            <GraduationCap size={13} />
            <span>Education & Honors</span>
          </button>
        </div>

        {/* Tab 1: Internships on Mobile */}
        {activeTab === 'internships' && (
          <div className="space-y-3">
            {experienceData.map((exp, index) => {
              const isExpanded = expandedRole === index;
              return (
                <div 
                  key={index}
                  className="border border-[#262220]/15 rounded-sm p-3.5 bg-white shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-serif text-sm font-medium text-[#262220] leading-snug">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-[10px] text-[#8a8178] bg-[#edeae6] px-1.5 py-0.5 rounded shrink-0">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-[11px] font-mono text-[#5a524d] mb-2">
                    {exp.company}
                  </p>

                  {/* Primary highlight */}
                  <p className="text-xs text-[#3a3532] leading-relaxed">
                    {exp.bullets[0]}
                  </p>

                  {/* Expandable secondary bullets */}
                  {isExpanded && exp.bullets.length > 1 && (
                    <div className="mt-2 pt-2 border-t border-[#262220]/10 text-xs text-[#5a524d] space-y-1">
                      {exp.bullets.slice(1).map((b, i) => (
                        <p key={i}>• {b}</p>
                      ))}
                    </div>
                  )}

                  {exp.bullets.length > 1 && (
                    <button
                      onClick={() => toggleRole(index)}
                      className="mt-2 text-[10px] font-mono uppercase text-[#8a8178] hover:text-[#262220] underline cursor-pointer"
                    >
                      {isExpanded ? 'Less Details' : '+ More Contributions'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Education & Honors on Mobile */}
        {activeTab === 'academics' && (
          <div className="space-y-4">
            {/* Education Box */}
            <div className="border border-[#262220]/15 p-4 bg-white rounded-sm shadow-sm">
              <div className="flex items-center justify-between mb-2 border-b border-[#262220]/10 pb-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#8a8178]" />
                  <span className="font-serif text-xs font-normal uppercase text-[#262220]">Education</span>
                </div>
                <span className="font-mono text-[10px] font-bold bg-[#262220] text-[#faf9f6] px-2 py-0.5 rounded-full">
                  3.86 / 4.00 CGPA
                </span>
              </div>
              <h4 className="font-serif text-base font-normal text-[#262220]">
                BS in Software Engineering (BSSE)
              </h4>
              <p className="text-[11px] text-[#5a524d] font-mono mt-0.5 mb-2">
                CUSIT, Peshawar · 2022 – 2026
              </p>
              <div className="flex flex-wrap gap-1">
                {['Cloud Computing', 'Software Architecture', 'Networks', 'Operating Systems'].map((c) => (
                  <span key={c} className="text-[9px] font-mono uppercase bg-[#faf9f6] border border-[#d4cfc8] text-[#3a3532] px-1.5 py-0.5 rounded">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Honors Box */}
            <div className="border border-[#262220]/15 p-4 bg-white rounded-sm shadow-sm">
              <div className="flex items-center gap-2 mb-3 border-b border-[#262220]/10 pb-2">
                <Award className="w-4 h-4 text-[#8a8178]" />
                <span className="font-serif text-xs font-normal uppercase text-[#262220]">Recognitions & Awards</span>
              </div>
              <div className="space-y-2.5">
                {honorsData.map((h, i) => (
                  <div key={i} className="text-xs border-b border-[#262220]/5 pb-2 last:border-b-0">
                    <div className="flex items-baseline justify-between gap-1">
                      <span className="font-serif text-xs font-medium text-[#262220]">{h.title}</span>
                      <span className="font-mono text-[9px] text-[#8a8178]">{h.year}</span>
                    </div>
                    <p className="text-[10px] text-[#5a524d] font-mono">{h.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── DESKTOP VIEW: Classic 2-Column Split (Timeline Left, Academics Right) ─── */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch flex-1 min-h-0 my-auto">
        
        {/* Left: Professional Internships Timeline */}
        <div className="col-span-7 flex flex-col justify-between overflow-y-auto pr-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-[#8a8178]" />
              <h3 className="font-serif text-xl font-normal uppercase text-[#262220]">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-4 border-l border-[#262220]/15 pl-4 ml-2">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Dot on line */}
                  <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#262220] border-2 border-[#faf9f6] group-hover:scale-125 transition-transform" />
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-base font-medium text-[#262220]">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-[11px] text-[#8a8178] bg-[#edeae6] px-2 py-0.5 rounded">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#5a524d] mb-1.5">
                    {exp.company} · {exp.location}
                  </p>

                  <ul className="list-disc pl-4 space-y-1 text-xs text-[#3a3532] leading-relaxed">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Education & Honors */}
        <div className="col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Education Box */}
          <div className="border border-[#262220]/15 p-5 bg-white rounded-sm shadow-sm">
            <div className="flex items-center justify-between mb-3 border-b border-[#262220]/10 pb-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#8a8178]" />
                <h3 className="font-serif text-base font-normal uppercase text-[#262220]">
                  Education & Degree
                </h3>
              </div>
              <span className="font-mono text-xs font-bold bg-[#262220] text-[#faf9f6] px-2.5 py-0.5 rounded-full">
                3.86 / 4.00 CGPA
              </span>
            </div>

            <h4 className="font-serif text-lg font-normal text-[#262220] mb-1">
              Bachelor of Science in Software Engineering (BSSE)
            </h4>
            <p className="text-xs text-[#5a524d] font-mono mb-3">
              City University of Science and Information Technology (CUSIT), Peshawar · 2022 – 2026
            </p>

            <div className="flex flex-wrap gap-1.5">
              {['Software Architecture', 'Cloud Computing', 'Operating Systems', 'Database Design', 'Computer Networks'].map((course) => (
                <span key={course} className="text-[10px] font-mono uppercase bg-[#faf9f6] border border-[#d4cfc8] text-[#3a3532] px-2 py-0.5 rounded">
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Honors & Leadership */}
          <div className="border border-[#262220]/15 p-5 bg-white rounded-sm shadow-sm flex-1">
            <div className="flex items-center gap-2 mb-3 border-b border-[#262220]/10 pb-2">
              <Award className="w-4 h-4 text-[#8a8178]" />
              <h3 className="font-serif text-base font-normal uppercase text-[#262220]">
                Honors & Leadership
              </h3>
            </div>

            <div className="space-y-3">
              {honorsData.map((honor, idx) => (
                <div key={idx} className="flex items-start justify-between gap-3 text-xs border-b border-[#262220]/5 pb-2 last:border-b-0">
                  <div>
                    <h5 className="font-serif text-sm text-[#262220] font-medium">
                      {honor.title}
                    </h5>
                    <p className="text-[11px] text-[#5a524d] font-mono">
                      {honor.issuer}
                    </p>
                    <p className="text-[10px] text-[#8a8178]">
                      {honor.detail}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-[#8a8178] shrink-0 bg-[#edeae6] px-1.5 py-0.5 rounded">
                    {honor.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Section Bottom Footer */}
      <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-[#262220]/10 text-[10px] md:text-xs font-mono text-[#8a8178] mt-2 md:mt-4">
        <span>Academic Rigor · Leadership · Continuous Growth</span>
        <span>Scroll Next for Contact (05) →</span>
      </div>
    </section>
  );
}
