import React, { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, Eye, EyeOff, Lock } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onEnter: () => void;
}

const ACCESS_CODE = 'PortalJDR26';
const PORTAL_UNLOCK_KEY = 'portal_jdr_unlocked_v1';

function isAlreadyUnlocked(): boolean {
  try {
    return (
      localStorage.getItem(PORTAL_UNLOCK_KEY) === '1' ||
      sessionStorage.getItem(PORTAL_UNLOCK_KEY) === '1'
    );
  } catch {
    return false;
  }
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onEnter }) => {
  const [unlocked] = useState<boolean>(isAlreadyUnlocked);
  const [codeInput, setCodeInput] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && unlocked) {
      onEnter();
    }
  }, [isOpen, unlocked, onEnter]);

  if (!isOpen || unlocked) return null;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (codeInput.trim() === ACCESS_CODE) {
      try {
        localStorage.setItem(PORTAL_UNLOCK_KEY, '1');
        sessionStorage.setItem(PORTAL_UNLOCK_KEY, '1');
      } catch {
        // Ignora erro de armazenamento do navegador
      }
      setErrorMsg(null);
      onEnter();
      return;
    }
    setErrorMsg('Código de acesso incorreto. Tente novamente.');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071f36]/80 backdrop-blur-xl"
    >
      <div className="animate-modal-in relative w-full max-w-md rounded-3xl bg-white/95 backdrop-blur-2xl border border-white shadow-[0_28px_70px_-18px_rgba(11,79,138,0.45)] p-7 sm:p-8 text-center">
        <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0b4f8a] to-[#1673b8] flex items-center justify-center shadow-lg shadow-[#0b4f8a]/25 ring-4 ring-[#d4a24c]/25">
          <Lock className="w-7 h-7 text-white" aria-hidden="true" />
        </div>

        <h2
          id="welcome-popup-title"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0b2540]"
        >
          🔒 Portal Congregacional José dos Reis
        </h2>

        <p className="mt-2 text-sm sm:text-base text-slate-600">
          Acesso restrito à congregação
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
          <div>
            <label
              htmlFor="portal-access-code"
              className="block text-sm font-semibold text-[#0b2540] mb-1.5"
            >
              Código de Acesso
            </label>
            <div className="relative">
              <input
                id="portal-access-code"
                type={showCode ? 'text' : 'password'}
                value={codeInput}
                onChange={(e) => {
                  setCodeInput(e.target.value);
                  if (errorMsg) setErrorMsg(null);
                }}
                placeholder="Digite o código de acesso"
                autoFocus
                required
                className="w-full min-h-[48px] pl-4 pr-12 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4f8a]"
              />
              <button
                type="button"
                onClick={() => setShowCode((prev) => !prev)}
                aria-label={showCode ? 'Ocultar código' : 'Mostrar código'}
                className="absolute right-2 top-1/2 -translate-y-1/2 min-h-[40px] min-w-[40px] flex items-center justify-center text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                {showCode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {errorMsg && (
            <div
              role="alert"
              className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium"
            >
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-gradient-to-r from-[#0b4f8a] via-[#0e6ba8] to-[#0b4f8a] text-white font-semibold text-base shadow-md shadow-[#0b4f8a]/25 hover:brightness-110 active:scale-[0.99] transition-[transform,filter] duration-150 inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9932c] focus-visible:ring-offset-2"
          >
            <span>Entrar</span>
            <ArrowRight className="w-4 h-4 text-[#f5d58c]" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
};
