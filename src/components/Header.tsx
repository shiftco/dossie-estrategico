import React from 'react';
import { Sparkles, Video, UserCheck, Cpu, GitMerge, ShieldAlert, LogOut } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLock: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onLock }) => {
  const navTabs = [
    { id: 'ads', label: 'Transcrições dos Ads', icon: Video, count: '20' },
    { id: 'avatar', label: 'Avatar & Dores', icon: UserCheck },
    { id: 'mechanisms', label: 'Mecanismos & Ângulos', icon: Cpu },
    { id: 'funnel', label: 'Estrutura Invisível', icon: GitMerge },
    { id: 'audit', label: 'Auditoria Crítica', icon: ShieldAlert },
  ];

  return (
    <header className="sticky top-0 z-40 w-full apple-glass border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-3">
          
          {/* Brand / Title */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 shrink-0">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-sm md:text-base font-bold text-white tracking-tight truncate">
                  Dossiê Estratégico
                </h1>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-semibold text-blue-400">
                  Dra. Talita Melo
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 truncate">
                Raio-X de Copy & Engenharia de Anúncios
              </p>
            </div>
          </div>

          {/* Quick Logout Button */}
          <button
            onClick={onLock}
            title="Bloquear sessão"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-400 hover:text-white transition-all shrink-0"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bloquear</span>
          </button>
        </div>

        {/* Apple Style Scrollable Segmented Navigation Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                <span>{tab.label}</span>
                {tab.count && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-neutral-300'
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
