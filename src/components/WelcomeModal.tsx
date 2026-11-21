import React, { useEffect } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onEnter: () => void;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onEnter }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onEnter]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071f36]/45 backdrop-blur-md"
    >
      <div className="animate-modal-in relative w-full max-w-md rounded-3xl bg-white/88 backdrop-blur-2xl border border-white shadow-[0_28px_70px_-18px_rgba(11,79,138,0.38)] p-7 sm:p-8 text-center">
        <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0b4f8a] to-[#1673b8] flex items-center justify-center shadow-lg shadow-[#0b4f8a]/25 ring-4 ring-[#d4a24c]/25">
          <BookOpen className="w-7 h-7 text-white" aria-hidden="true" />
        </div>

        <h2
          id="welcome-popup-title"
          className="font-display text-2xl font-bold tracking-tight text-[#0b2540]"
        >
          Congregação José dos Reis
        </h2>

        <p className="mt-3 text-base text-slate-600 leading-relaxed">
          Bem-vindo ao Portal Congregacional.
          <br />
          Selecione abaixo o sistema desejado.
        </p>

        <div className="mt-7">
          <button
            type="button"
            autoFocus
            onClick={onEnter}
            className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-gradient-to-r from-[#0b4f8a] via-[#0e6ba8] to-[#0b4f8a] text-white font-semibold text-base shadow-md shadow-[#0b4f8a]/25 hover:brightness-110 active:scale-[0.99] transition-[transform,filter] duration-150 inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9932c] focus-visible:ring-offset-2"
          >
            <span>Entrar</span>
            <ArrowRight className="w-4 h-4 text-[#f5d58c]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
