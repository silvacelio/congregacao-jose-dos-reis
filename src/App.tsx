import React, { useState } from 'react';
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Compass,
  Menu,
  X,
} from 'lucide-react';
import { RiverBackground } from './components/RiverBackground';
import { SystemCard } from './components/SystemCard';
import { WelcomeModal } from './components/WelcomeModal';

const WORKBOOK_SYSTEM_URL =
  'https://apostila-vida-e-ministerio.vercel.app/';
const REPORT_SYSTEM_URL = 'https://relatorio-congregacao-5mld.vercel.app/';

const AVAILABLE_RESOURCES = [
  'Apostila Vida e Ministério',
  'Relatório Congregação',
  'Escalas',
  'Designações',
  'Indicadores',
  'Organização Congregacional',
];

export default function App() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-[#0b2540] selection:bg-[#0e6ba8]/15 selection:text-[#0b4f8a]">
      <RiverBackground />

      {/* Popup inicial central */}
      <WelcomeModal
        isOpen={showWelcomePopup}
        onEnter={() => setShowWelcomePopup(false)}
      />

      {/* Menu superior */}
      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#inicio"
            onClick={handleCloseMobileMenu}
            className="font-display text-base sm:text-lg font-bold tracking-tight text-[#0b4f8a] whitespace-nowrap shrink-0 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9932c] rounded-lg"
          >
            <span aria-hidden="true">📖</span>
            <span>Portal José dos Reis</span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700"
          >
            <a
              href="#inicio"
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#0b4f8a] border-b-2 border-transparent hover:border-[#c9932c] transition-colors inline-flex items-center gap-1.5"
            >
              <span aria-hidden="true">🏠</span>
              <span>Início</span>
            </a>
            <a
              href={WORKBOOK_SYSTEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#0b4f8a] border-b-2 border-transparent hover:border-[#c9932c] transition-colors inline-flex items-center gap-1.5"
            >
              <span aria-hidden="true">📚</span>
              <span>Apostila</span>
            </a>
            <a
              href={REPORT_SYSTEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#0b4f8a] border-b-2 border-transparent hover:border-[#c9932c] transition-colors inline-flex items-center gap-1.5"
            >
              <span aria-hidden="true">📊</span>
              <span>Relatório</span>
            </a>
            <a
              href="#sobre"
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#0b4f8a] border-b-2 border-transparent hover:border-[#c9932c] transition-colors inline-flex items-center gap-1.5"
            >
              <span aria-hidden="true">ℹ️</span>
              <span>Sobre</span>
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#sistemas"
              className="hidden md:inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-xl bg-[#0b4f8a] hover:bg-[#094173] text-white text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9932c]"
            >
              Acessar Sistemas
            </a>

            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden min-h-[44px] min-w-[44px] rounded-xl bg-white/80 border border-[#0b4f8a]/15 text-[#0b4f8a] flex items-center justify-center cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile expansível */}
        {mobileMenuOpen && (
          <nav
            aria-label="Menu móvel"
            className="md:hidden border-t border-[#0b4f8a]/10 bg-white/95 backdrop-blur-xl px-4 py-3 space-y-1.5"
          >
            <a
              href="#inicio"
              onClick={handleCloseMobileMenu}
              className="min-h-[44px] px-3 rounded-xl flex items-center gap-2.5 text-sm font-medium text-slate-800 hover:bg-[#0b4f8a]/5"
            >
              <span aria-hidden="true">🏠</span>
              <span>Início</span>
            </a>
            <a
              href={WORKBOOK_SYSTEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseMobileMenu}
              className="min-h-[44px] px-3 rounded-xl flex items-center gap-2.5 text-sm font-medium text-slate-800 hover:bg-[#0b4f8a]/5"
            >
              <span aria-hidden="true">📚</span>
              <span>Apostila</span>
            </a>
            <a
              href={REPORT_SYSTEM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseMobileMenu}
              className="min-h-[44px] px-3 rounded-xl flex items-center gap-2.5 text-sm font-medium text-slate-800 hover:bg-[#0b4f8a]/5"
            >
              <span aria-hidden="true">📊</span>
              <span>Relatório</span>
            </a>
            <a
              href="#sobre"
              onClick={handleCloseMobileMenu}
              className="min-h-[44px] px-3 rounded-xl flex items-center gap-2.5 text-sm font-medium text-slate-800 hover:bg-[#0b4f8a]/5"
            >
              <span aria-hidden="true">ℹ️</span>
              <span>Sobre</span>
            </a>
          </nav>
        )}
      </header>

      {/* Conteúdo principal */}
      <main className="relative z-10 flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16 space-y-12 sm:space-y-16">
          {/* Cabeçalho Hero */}
          <section
            id="inicio"
            className="animate-portal-in text-center max-w-3xl mx-auto space-y-4 scroll-mt-24"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#9c6f19]">
              Portal Congregacional Oficial · Acesso Centralizado
            </p>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b2540] [text-wrap:balance] leading-[1.12]">
              <span aria-hidden="true">📖 </span>
              Congregação José dos Reis
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Organização, designações, escalas e acompanhamento ministerial.
            </p>
          </section>

          {/* Dois cartões principais dos sistemas */}
          <section
            id="sistemas"
            aria-label="Sistemas da Congregação"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch scroll-mt-24"
          >
            <SystemCard
              title="📚 Apostila Vida e Ministério"
              description="Gerencie escalas, designações, reuniões de meio de semana e reuniões de fim de semana."
              href={WORKBOOK_SYSTEM_URL}
              accent="blue"
              icon={BookOpen}
              animationClass="animate-portal-in-delay-1"
            />

            <SystemCard
              title="📊 Relatório Congregação"
              description="Acompanhe relatórios mensais, indicadores e monitoramento ministerial."
              href={REPORT_SYSTEM_URL}
              accent="gold"
              icon={BarChart3}
              animationClass="animate-portal-in-delay-2"
            />
          </section>

          {/* Recursos Disponíveis */}
          <section
            id="recursos"
            aria-labelledby="recursos-title"
            className="animate-portal-in-delay-3 rounded-3xl bg-white/72 backdrop-blur-xl border border-white/85 shadow-[0_18px_45px_-18px_rgba(11,79,138,0.15)] p-6 sm:p-9 scroll-mt-24"
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 pb-5 border-b border-[#0b4f8a]/10">
              <div>
                <h2
                  id="recursos-title"
                  className="font-display text-xl sm:text-2xl font-bold text-[#0b2540]"
                >
                  Recursos Disponíveis
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Ferramentas integradas pela central de acesso para toda a rotina congregacional.
                </p>
              </div>
              <span className="text-xs font-medium text-[#9c6f19]">
                2 sistemas conectados · Acesso rápido
              </span>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AVAILABLE_RESOURCES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/75 border border-[#0b4f8a]/10 px-4 py-3.5 text-sm sm:text-base font-medium text-[#0b2540]"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#0e6ba8] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Sobre o Portal */}
          <section
            id="sobre"
            aria-labelledby="sobre-title"
            className="rounded-3xl bg-white/65 backdrop-blur-xl border border-white/80 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 scroll-mt-24"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0b4f8a]/12 to-[#c9932c]/20 border border-[#c9932c]/30 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6 text-[#0b4f8a]" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <h2
                id="sobre-title"
                className="font-display text-lg sm:text-xl font-bold text-[#0b2540]"
              >
                Sobre o Portal Congregacional
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Esta página centraliza os links oficiais da Congregação José dos Reis para
                facilitar o acesso diário pelo celular ou computador aos sistemas de{' '}
                <strong className="font-semibold text-[#0b4f8a]">
                  Apostila Vida e Ministério
                </strong>{' '}
                e{' '}
                <strong className="font-semibold text-[#0b4f8a]">
                  Relatório Congregação
                </strong>
                .
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="relative z-10 border-t border-white/70 bg-white/65 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-600">
          <p className="font-medium text-[#0b2540]">
            Congregação José dos Reis © 2026
          </p>
          <p className="text-xs text-slate-500">
            Portal Oficial · Acesso Unificado
          </p>
        </div>
      </footer>
    </div>
  );
}
