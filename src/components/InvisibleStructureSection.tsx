import React from 'react';
import { DOSSIER_DATA } from '../data/dossierData';
import { GitMerge, Sparkles, ArrowDown, ShieldCheck, Zap } from 'lucide-react';

export const InvisibleStructureSection: React.FC = () => {
  const { invisibleStructure } = DOSSIER_DATA;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400">
          <GitMerge className="w-3.5 h-3.5" />
          <span>Arquitetura de Persuasão Oculta</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          A Estrutura Invisível dos Anúncios
        </h2>
        <p className="text-sm text-neutral-400 max-w-2xl">
          A esteira psicológica de 6 passos que conduz a tentante do primeiro impacto visual à compra do Tripwire de R$ 57 e posterior retenção no Back-End.
        </p>
      </div>

      {/* 6-Step Visual Funnel Flow */}
      <div className="space-y-4">
        {invisibleStructure.map((item, idx) => (
          <div key={item.step} className="relative">
            
            <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 hover:border-blue-500/30 transition-all space-y-4">
              
              {/* Step Badge & Name */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white">
                    {item.name}
                  </h3>
                </div>
                <span className="text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-300 font-semibold self-start sm:self-auto">
                  {item.psychologicalTrigger}
                </span>
              </div>

              {/* Function & Example */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Função na Copy
                  </span>
                  <p className="text-xs md:text-sm text-neutral-200 leading-relaxed">
                    {item.copyFunction}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-500/[0.04] border border-blue-500/20 space-y-1.5">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    Exemplo nos Criativos
                  </span>
                  <p className="text-xs md:text-sm text-neutral-200 italic leading-relaxed">
                    "{item.executionExample}"
                  </p>
                </div>
              </div>

            </div>

            {/* Connecting Arrow */}
            {idx < invisibleStructure.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
                  <ArrowDown className="w-4 h-4" />
                </div>
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  );
};
