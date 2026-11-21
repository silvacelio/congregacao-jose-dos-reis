import React from 'react';
import { ExternalLink, LucideIcon } from 'lucide-react';

interface SystemCardProps {
  title: string;
  description: string;
  href: string;
  accent: 'blue' | 'gold';
  icon: LucideIcon;
  animationClass?: string;
}

export const SystemCard: React.FC<SystemCardProps> = ({
  title,
  description,
  href,
  accent,
  icon: Icon,
  animationClass = '',
}) => {
  const iconBoxClasses =
    accent === 'gold'
      ? 'bg-gradient-to-br from-[#c9932c] to-[#e0b256] text-white shadow-[#c9932c]/25'
      : 'bg-gradient-to-br from-[#0b4f8a] to-[#0e6ba8] text-white shadow-[#0b4f8a]/25';

  const buttonClasses =
    accent === 'gold'
      ? 'bg-gradient-to-r from-[#0b4f8a] to-[#0e6ba8] hover:from-[#094375] hover:to-[#0b5a8e] text-white shadow-[#0b4f8a]/20'
      : 'bg-gradient-to-r from-[#0b4f8a] to-[#0e6ba8] hover:from-[#094375] hover:to-[#0b5a8e] text-white shadow-[#0b4f8a]/20';

  return (
    <article
      className={`group flex flex-col justify-between rounded-3xl bg-white/75 backdrop-blur-xl border border-white/85 shadow-[0_20px_50px_-18px_rgba(11,79,138,0.18)] p-6 sm:p-8 transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_-16px_rgba(11,79,138,0.26)] ${animationClass}`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div
            className={`w-13 h-13 rounded-2xl flex items-center justify-center shadow-lg shrink-0 ${iconBoxClasses}`}
          >
            <Icon className="w-6 h-6" aria-hidden="true" />
          </div>
          <span
            aria-hidden="true"
            className="h-1.5 w-12 rounded-full bg-gradient-to-r from-[#d4a24c]/70 to-[#0e6ba8]/40 mt-2"
          />
        </div>

        <h2 className="mt-5 font-display text-xl sm:text-2xl font-bold text-[#0b2540] tracking-tight">
          {title}
        </h2>

        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-7 pt-5 border-t border-[#0b4f8a]/10">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full min-h-[48px] px-5 py-3 rounded-xl font-semibold text-sm sm:text-base shadow-md inline-flex items-center justify-center gap-2 transition-[transform,filter,background-color] duration-150 active:scale-[0.99] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9932c] focus-visible:ring-offset-2 ${buttonClasses}`}
        >
          <span>Abrir Sistema</span>
          <ExternalLink className="w-4 h-4 text-[#f5d58c]" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};
