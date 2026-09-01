import React from 'react';
import { DOSSIER_DATA } from '../data/dossierData';
import { ShieldAlert, CheckCircle2, AlertTriangle, Zap, Target, ArrowRight } from 'lucide-react';

export const AuditSection: React.FC = () => {
  const { audit } = DOSSIER_DATA;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-400">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Auditoria Crítica & Oportunidades</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Pontos Fortes, Fracos & Oportunidade de Mercado
        </h2>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Análise minuciosa de compliance, riscos da narrativa e o plano de ação para posicionar o seu novo produto (R$ 49,90) à frente da concorrência.
        </p>
      </div>

      {/* Strengths & Weaknesses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Strengths */}
        <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="text-lg font-bold text-white">Pontos Fortes da Narrativa</h3>
          </div>

          <div className="space-y-4">
            {audit.strengths.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/20 space-y-1.5">
                <h4 className="text-sm font-bold text-emerald-300">{item.title}</h4>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses & Compliance */}
        <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="text-lg font-bold text-white">Pontos Fracos & Riscos de Compliance</h3>
          </div>

          <div className="space-y-4">
            {audit.weaknesses.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-rose-500/[0.03] border border-rose-500/20 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-rose-300">{item.title}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold whitespace-nowrap">
                    {item.riskLevel}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* The Competitive Attack Blueprint Card */}
      <div className="apple-glass rounded-3xl p-6 md:p-8 border border-blue-500/30 shadow-2xl relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-lg">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Matriz de Diferenciação</span>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {audit.competitiveAttackBlueprint.headline}
            </h3>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-200 font-semibold">
          🎯 {audit.competitiveAttackBlueprint.coreAngle}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {audit.competitiveAttackBlueprint.advantages.map((adv, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
              <span className="text-xs font-bold text-blue-400">Vantagem #{idx + 1}</span>
              <h4 className="text-sm font-bold text-white">{adv.point}</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">{adv.explanation}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
