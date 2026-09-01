import React from 'react';
import { DOSSIER_DATA } from '../data/dossierData';
import { Cpu, FlaskConical, GitBranch, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const MechanismsSection: React.FC = () => {
  const { mechanisms } = DOSSIER_DATA;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Fisiologia & Ângulos de Persuasão</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Mecanismos Ocultos & Ângulos Criativos
        </h2>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Como a Dra. Talita traduz problemas médicos complexos em metáforas táteis e soluções práticas de 7 dias.
        </p>
      </div>

      {/* Lab Comparison Visualizer Card */}
      <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              O Caso do Hipotireoidismo Subclínico (TSH)
            </h3>
            <p className="text-xs text-neutral-400">O mecanismo mais poderoso usado no criativo Ad #10</p>
          </div>
        </div>

        {/* Visual Lab Comparison Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Lab Standard (False Security) */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-neutral-400 uppercase">Referência de Laboratório Comum</span>
              <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono">0.5 a 5.0 mUI/L</span>
            </div>
            <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden">
              <div className="bg-neutral-500 h-full w-[80%]" />
            </div>
            <p className="text-xs text-neutral-400">
              O médico do convênio lê o laudo de 3.8 e diz: <em>"Seus exames estão perfeitos, relaxa que você engravida."</em>
            </p>
          </div>

          {/* Functional Fertility Range */}
          <div className="p-5 rounded-2xl bg-blue-500/[0.04] border border-blue-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400 uppercase">Referência para Fertilidade Real</span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono font-bold">&lt; 2.5 mUI/L</span>
            </div>
            <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[35%]" />
            </div>
            <p className="text-xs text-neutral-300">
              Para fixar o embrião e evitar aborto espontâneo, o TSH <strong>precisa estar abaixo de 2.5</strong>. A revelação disso cria o efeito "A-ha!".
            </p>
          </div>

        </div>

        <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-neutral-300 leading-relaxed">
          {mechanisms.labComparison.explanation}
        </div>
      </div>

      {/* The 4 Phases of Fertility */}
      <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
        <div className="flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg md:text-xl font-bold text-white">
            O Modelo Autoral das 4 Fases da Gravidez
          </h3>
        </div>
        <p className="text-xs text-neutral-400">
          A Dra. Talita argumenta que toda tentante com exames "normais" está travada em uma dessas 4 etapas:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mechanisms.fourPhases.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 relative">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs">
                {idx + 1}
              </div>
              <h4 className="text-sm font-bold text-white">{item.phase}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{item.focus}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Creative Copy Angles Catalog */}
      <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engenharia de Criativos</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Catálogo dos 5 Ângulos Criativos de Anúncio
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mechanisms.creativeAngles.map((angle) => (
            <div key={angle.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-400">Ângulo #{angle.id}</span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-semibold">
                  {angle.tag}
                </span>
              </div>
              <h4 className="text-base font-bold text-white">{angle.title}</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">{angle.description}</p>
              <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                <p><strong className="text-purple-400">Exemplos nos Ads:</strong> <span className="text-neutral-400">{angle.exampleAd}</span></p>
                <p><strong className="text-emerald-400">Impacto no Tráfego:</strong> <span className="text-neutral-400">{angle.conversionImpact}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
