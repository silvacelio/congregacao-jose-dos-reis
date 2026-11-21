import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    let friendly = error.message || 'Ocorreu um erro inesperado.';
    try {
      const parsed = JSON.parse(error.message);
      if (parsed && parsed.error) {
        friendly = `Erro de permissão ou dados (${parsed.operationType || 'operação'}): ${parsed.error}`;
      }
    } catch {
      // Not JSON, keep message
    }
    return { hasError: true, message: friendly };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#f3f7f8] dark:bg-[#071318] text-slate-900 dark:text-slate-100">
          <div className="max-w-md w-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <h2 className="text-xl font-bold font-display">Algo precisou de atenção</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {this.state.message}
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="w-full min-h-[48px] rounded-xl bg-[#0e6ba8] text-white font-medium text-sm hover:bg-[#0c5a8f] transition-colors cursor-pointer"
            >
              Recarregar Aplicativo
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
