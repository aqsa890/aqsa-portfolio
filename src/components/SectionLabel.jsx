export default function SectionLabel({ number, title, className = '' }) {
  return (
    <div className={`flex items-center gap-4 mb-8 border-b border-[#e0dad2] pb-4 ${className}`}>
      <span className="font-sans text-sm font-medium text-[#8a8178]">
        {number}.
      </span>
      <div className="w-8 h-px bg-[#8a8178]" />
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#262220]">
        {title}
      </span>
    </div>
  )
}
