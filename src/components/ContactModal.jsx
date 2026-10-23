import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import PillButton from './PillButton';

const FOCUS_DOMAINS = [
  'CI/CD & GitHub Actions',
  'DevSecOps & Shift-Left Security',
  'AWS Cloud Architecture',
  'Docker & Kubernetes (K8s)',
  'Terraform & Ansible IaC',
  'Observability & SRE',
];

const COLLABORATION_MODELS = [
  'Full-Time DevOps / Cloud Role',
  'Contract Engineering Project',
  'Infrastructure Security Audit',
  'Open-Source Collaboration',
];

export default function ContactModal({ isOpen, onClose }) {
  const [selectedDomain, setSelectedDomain] = useState(FOCUS_DOMAINS[0]);
  const [selectedModel, setSelectedModel] = useState(COLLABORATION_MODELS[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-[#141414] text-[#f4f4f4] border border-white/10 shadow-2xl p-4 sm:p-10 max-h-[92vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-start pb-4 sm:pb-6 border-b border-white/10 mb-4 sm:mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#efe41f]"></span>
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#efe41f]">
                    Contact AQSA • aksawadood@gmail.com
                  </span>
                </div>
                <h3 className="font-heading text-xl sm:text-3xl font-extrabold uppercase text-white leading-snug">
                  Let’s Build Something Resilient
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 sm:py-12 flex flex-col items-center text-center">
                <CheckCircle2 className="w-14 h-14 sm:w-16 sm:h-16 text-[#efe41f] mb-3 animate-bounce" />
                <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase mb-2">
                  Message Sent!
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#c7c7c7] max-w-md">
                  Thank you, {name || 'there'}! I will review your requirements and reply directly to {email || 'your email'} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Domain Focus */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase text-[#c7c7c7] mb-2">
                    Engineering Focus Area
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {FOCUS_DOMAINS.map((domain) => (
                      <button
                        type="button"
                        key={domain}
                        onClick={() => setSelectedDomain(domain)}
                        className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all ${
                          selectedDomain === domain
                            ? 'bg-[#efe41f] text-[#0a0a0a] font-bold shadow-sm'
                            : 'bg-white/5 text-[#c7c7c7] hover:bg-white/10 border border-white/5'
                        }`}
                      >
                        {domain}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Collaboration Model */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase text-[#c7c7c7] mb-2">
                    Opportunity / Collaboration Type
                  </label>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {COLLABORATION_MODELS.map((model) => (
                      <button
                        type="button"
                        key={model}
                        onClick={() => setSelectedModel(model)}
                        className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all ${
                          selectedModel === model
                            ? 'bg-[#efe41f] text-[#0a0a0a] font-bold shadow-sm'
                            : 'bg-white/5 text-[#c7c7c7] hover:bg-white/10 border border-white/5'
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Input Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono uppercase text-[#c7c7c7] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#efe41f] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono uppercase text-[#c7c7c7] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#efe41f] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase text-[#c7c7c7] mb-1.5">
                    Project Overview & Timeline
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your tech stack, cloud infrastructure goals, and current bottlenecks..."
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#efe41f] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex justify-end">
                  <PillButton
                    type="submit"
                    variant="yellow"
                    icon={<Send className="w-4 h-4" />}
                    className="py-2.5 sm:py-3 px-6 sm:px-8 text-xs sm:text-sm w-full sm:w-auto justify-center"
                  >
                    SEND INQUIRY
                  </PillButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
