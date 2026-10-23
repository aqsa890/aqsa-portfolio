import React from 'react';

/**
 * Montreal signature pill button with double-text slide up animation on hover
 */
export default function PillButton({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'light', // 'light' | 'dark' | 'yellow' | 'transparent'
  icon = null,
  className = '',
  bracket = true,
  download = false,
}) {
  const getVariantClass = () => {
    switch (variant) {
      case 'dark':
        return 'bg-transparent text-[#f4f4f4] border-white/20 hover:bg-[#f4f4f4] hover:text-[#0a0a0a] hover:border-[#f4f4f4]';
      case 'yellow':
        return 'bg-[#efe41f] text-[#0a0a0a] border-[#efe41f] hover:bg-[#f8f142]';
      case 'transparent':
        return 'bg-transparent text-current border-current/25 hover:border-current hover:bg-current/10';
      case 'light':
      default:
        return 'bg-[#f4f4f4] text-[#0a0a0a] border-black/10 hover:bg-white hover:border-black/25 shadow-sm';
    }
  };

  const content = (
    <div className="flex items-center gap-2">
      {bracket && <span className="opacity-60 text-xs font-mono font-normal">(</span>}
      <div className="text-slide-container font-heading text-xs font-bold tracking-wider uppercase">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </div>
      {bracket && <span className="opacity-60 text-xs font-mono font-normal">)</span>}
      {icon && <span className="ml-0.5 inline-flex items-center justify-center">{icon}</span>}
    </div>
  );

  const baseClasses = `btn-pill group transition-all duration-300 ${getVariantClass()} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
