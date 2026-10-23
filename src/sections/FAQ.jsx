import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    id: 1,
    q: 'What are your core engineering focus areas?',
    a: 'Hands-on expertise architecting automated CI/CD pipelines with GitHub Actions, containerizing microservices with Docker and Kubernetes, and hardening cloud infrastructure to achieve 0 Critical/High vulnerabilities using Trivy and Docker Scout.',
  },
  {
    id: 2,
    q: 'What is your approach to DevSecOps & Shift-Left Security?',
    a: 'Security must be integrated from the very first commit. I incorporate automated vulnerability scanning (Trivy), secret detection (Gitleaks), linting (Actionlint), and non-root execution policies (USER 10001) into multi-job CI pipelines.',
  },
  {
    id: 3,
    q: 'Which cloud provider and IaC tools do you specialize in?',
    a: 'AWS is my primary cloud provider (VPC, EC2, IAM, S3, ALB, Auto Scaling Groups, NAT Gateways). For infrastructure automation, I write declarative Terraform and Ansible configuration management playbooks.',
  },
  {
    id: 4,
    q: 'Are you available for remote engineering roles and global collaboration?',
    a: 'Yes! Based in Peshawar, Pakistan, I work asynchronously and synchronously with teams globally across North America, Europe, and Asia.',
  },
  {
    id: 5,
    q: 'How do you approach observability and system reliability?',
    a: 'I configure Prometheus for metric scraping, Grafana for real-time visual monitoring dashboards, container health checks, and automated alerting thresholds to maintain 99.99% system availability.',
  },
  {
    id: 6,
    q: 'How can engineering teams or recruiters get in touch with you?',
    a: 'You can reach out directly via aksawadood@gmail.com, connect through LinkedIn (linkedin.com/in/aqsa-~-3149782a2), or inspect my open-source code repositories on GitHub (github.com/aqsa890).',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-16 sm:py-28 px-3.5 sm:px-10 overflow-hidden">
      {/* 5-Column Grid Lines */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#efe41f]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#efe41f]">
              Got Questions?
            </span>
          </div>
          <h2 className="display-s text-[#f4f4f4] font-extrabold uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* 2x3 Grid of FAQ Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                onClick={() => toggle(faq.id)}
                className={`rounded-xl sm:rounded-2xl p-4 sm:p-8 cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isOpen
                    ? 'bg-[#181818] border-[#efe41f]/60 shadow-lg'
                    : 'bg-[#121212] border-white/10 hover:border-white/25 hover:bg-[#151515]'
                }`}
              >
                <div>
                  {/* Badge Row */}
                  <div className="flex justify-between items-center mb-3 sm:mb-4 text-xs font-mono">
                    <span className="text-[#efe41f] font-bold text-sm">
                      {isOpen ? '[A]' : '[Q]'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#c7c7c7] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#efe41f]' : ''
                      }`}
                    />
                  </div>

                  {/* Question */}
                  <h3 className="font-heading text-base sm:text-xl font-bold text-white mb-2 leading-snug">
                    {faq.q}
                  </h3>
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-xs sm:text-sm text-[#c7c7c7] pt-3 border-t border-white/10 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
