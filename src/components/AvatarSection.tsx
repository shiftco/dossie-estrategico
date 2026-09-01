import React, { useState } from 'react';
import { DOSSIER_DATA } from '../data/dossierData';
import { 
  UserCheck, Activity, Heart, Users, ShieldAlert, Sparkles, 
  Quote, AlertCircle, XCircle, ArrowRight, BookOpen
} from 'lucide-react';

export const AvatarSection: React.FC = () => {
  const { persona } = DOSSIER_DATA;
  const [activePainTab, setActivePainTab] = useState('physical');

  const painIcons: Record<string, any> = {
    physical: Activity,
    emotional: Heart,
    relationship: Users,
    social: ShieldAlert
  };

  const currentPain = persona.pains.find(p => p.id === activePainTab) || persona.pains[0];

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Section Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Psicografia & Comportamento</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Raio-X da Persona: A Tentante Consciente
        </h2>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Mapeamento profundo do perfil demográfico, monólogo interno, as 4 dimensões de dor e o histórico de tentativas que falharam.
        </p>
      </div>

      {/* Bento Grid Row 1: Profile & Internal Monologue */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Demographics Card */}
        <div className="apple-glass rounded-3xl p-6 border border-white/10 space-y-4 md:col-span-1">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{persona.name}</h3>
            <p className="text-xs text-neutral-400">Perfil Arquetípico da Compradora</p>
          </div>

          <div className="space-y-3 pt-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Faixa Etária:</span>
              <span className="font-semibold text-neutral-200 text-right">{persona.demographics.age}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Tempo Tentando:</span>
              <span className="font-semibold text-neutral-200 text-right">{persona.demographics.timeTrying}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Estado Civil:</span>
              <span className="font-semibold text-neutral-200 text-right">{persona.demographics.status}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-neutral-400">Nível Social:</span>
              <span className="font-semibold text-neutral-200 text-right">{persona.demographics.class}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-neutral-400">Nível de Fadiga:</span>
              <span className="font-semibold text-rose-400 text-right">{persona.demographics.frustrationLevel}</span>
            </div>
          </div>
        </div>

        {/* Monologue Card */}
        <div className="apple-glass rounded-3xl p-6 border border-white/10 space-y-4 md:col-span-2 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Quote className="w-5 h-5 text-blue-400" />
              <h3 className="text-base font-bold text-white">O Monólogo Interno da Tentante</h3>
            </div>
            <p className="text-xs text-neutral-400">
              O que ela pensa sozinha no banho, no espelho e antes de dormir quando ninguém está olhando.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 pt-2">
            {persona.internalMonologue.map((quote, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-200 italic flex items-start gap-2.5">
                <span className="text-blue-400 font-bold not-italic">"</span>
                <p className="flex-1">{quote}</p>
                <span className="text-blue-400 font-bold not-italic">"</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bento Grid Row 2: 4 Dimensions of Pain (Interactive Tabs) */}
      <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">As 4 Dimensões da Dor</h3>
            <p className="text-xs text-neutral-400">Explore as camadas de sofrimento exploradas nas copys dos anúncios.</p>
          </div>

          {/* Pain Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar bg-white/5 p-1 rounded-2xl border border-white/10">
            {persona.pains.map((p) => {
              const Icon = painIcons[p.id] || Activity;
              const isSelected = activePainTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePainTab(p.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#0071E3] text-white shadow-md'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{p.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pain Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
          {currentPain.items.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <span className="w-2 h-2 rounded-full bg-rose-500" />
              </div>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
              <div className="p-2.5 rounded-xl bg-rose-500/[0.06] border border-rose-500/20 text-xs text-rose-300 italic">
                "{item.quote}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid Row 3: Failed Attempts (O Ponto Cego) */}
      <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold">
            <XCircle className="w-3.5 h-3.5" />
            <span>O Histórico de Fracasso Anterior</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Por que as tentativas anteriores falharam?
          </h3>
          <p className="text-xs text-neutral-400">
            A narrativa da sua copy precisa desconstruir cada uma dessas soluções passadas para apresentar a nova solução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {persona.failedAttempts.map((attempt, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-bold text-white">{attempt.whatSheDid}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 whitespace-nowrap">
                  {attempt.investment}
                </span>
              </div>
              <div className="text-xs text-neutral-300 space-y-1">
                <p><strong className="text-rose-400">Por que falhou:</strong> {attempt.whyItFailed}</p>
                <p><strong className="text-blue-400">Mecanismo Oculto:</strong> {attempt.hiddenMechanism}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dictionary Chips */}
      <div className="apple-glass rounded-3xl p-6 border border-white/10 space-y-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-400" />
          <h3 className="text-base font-bold text-white">Dicionário & Vocabulário Interno da Tentante</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {persona.dictionary.map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
              <span className="font-bold text-blue-400">{item.term}: </span>
              <span className="text-neutral-300">{item.meaning}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
