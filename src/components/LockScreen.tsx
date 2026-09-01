import React, { useState } from 'react';
import { Lock, KeyRound, Sparkles, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

export const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPwd = password.trim().toLowerCase();
    
    // Accepts 'Fran' or 'Felipe'
    if (cleanPwd === 'fran' || cleanPwd === 'felipe') {
      localStorage.setItem('dossie_auth_token', 'unlocked_' + cleanPwd);
      onUnlock();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#05070B] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[340px] md:h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Glass Card */}
      <div className={`w-full max-w-md apple-glass-card rounded-[32px] p-8 md:p-10 shadow-2xl relative z-10 border border-white/10 transition-transform ${isShaking ? 'animate-bounce' : ''}`}>
        
        {/* Apple-style Top Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-blue-500/20 to-blue-600/5 border border-blue-500/30 flex items-center justify-center shadow-inner relative">
            <Lock className="w-8 h-8 text-blue-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full ring-4 ring-[#0F1420]" />
          </div>
        </div>

        {/* Title and Badge */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-300">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Acesso Confidencial</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Dossiê Estratégico
          </h1>
          <p className="text-sm text-neutral-400">
            Análise Completa de Copy & Criativos — Dra. Talita Melo
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-medium text-neutral-300 ml-1">
              Senha de Acesso
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Digite sua senha..."
                autoFocus
                className={`w-full px-4 py-3.5 rounded-2xl bg-white/[0.05] border ${
                  error ? 'border-rose-500/80 ring-2 ring-rose-500/20' : 'border-white/10 focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/20'
                } text-white placeholder-neutral-500 text-sm outline-none transition-all duration-200 pl-11`}
              />
              <KeyRound className="w-5 h-5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
            {error && (
              <div className="flex items-center gap-1.5 text-xs text-rose-400 ml-1 animate-fade-in">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Senha incorreta. Verifique e tente novamente.</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-2xl bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
          >
            <span>Desbloquear Apresentação</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        {/* Footer Note */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-neutral-500 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400/80" />
            <span>Otimizado para iPhone e dispositivos móveis</span>
          </p>
        </div>

      </div>
    </div>
  );
};
