import React, { useState } from 'react';
import { ADS_DATA, AdItem } from '../data/adsData';
import { 
  ChevronLeft, ChevronRight, Copy, Check, Sparkles, Clock, Target, 
  Layers, MessageSquareText, ShieldAlert, FileText, ArrowRight
} from 'lucide-react';

export const AdPlayer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'structured' | 'continuous'>('structured');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const ad: AdItem = ADS_DATA[currentIndex];

  const handleNext = () => {
    if (currentIndex < ADS_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop around
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(ADS_DATA.length - 1); // loop around
    }
  };

  const copyToClipboard = (text: string, sectionKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionKey);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const copyFullAd = () => {
    const full = `[TÍTULO]: ${ad.title}\n[DURAÇÃO]: ${ad.duration} | [IDADE]: ${ad.targetAge}\n\n[HOOK]: ${ad.hook}\n\n[HISTÓRIA]: ${ad.history}\n\n[MECANISMO DO PROBLEMA]: ${ad.problem}\n\n[MECANISMO DA SOLUÇÃO]: ${ad.solution}\n\n[CTA]: ${ad.cta}`;
    copyToClipboard(full, 'full');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Top Controls: Pagination Bar & Quick Select */}
      <div className="apple-glass-card rounded-2xl p-4 border border-white/10 shadow-lg space-y-4">
        
        {/* Navigation Row */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-sm font-semibold text-white transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs">
              <span>Anúncio {currentIndex + 1} de {ADS_DATA.length}</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1 font-medium hidden sm:block truncate max-w-xs md:max-w-md">
              {ad.title}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-sm font-semibold text-white transition-all shadow-md shadow-blue-500/25"
          >
            <span className="hidden sm:inline">Próximo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / ADS_DATA.length) * 100}%` }}
          />
        </div>

        {/* Horizontal Quick Jump Carousel Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-1">
          {ADS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 flex items-center gap-1.5 ${
                currentIndex === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <span>#{idx + 1}</span>
              <span className="max-w-[120px] truncate">{item.title}</span>
            </button>
          ))}
        </div>

      </div>

      {/* Main Single Ad Presentation Card */}
      <div className="apple-glass rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Ad Header: Meta Info & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                Ad #{ad.id}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-neutral-300 text-xs font-medium border border-white/10 flex items-center gap-1">
                <Clock className="w-3 h-3 text-neutral-400" />
                {ad.duration}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/30 flex items-center gap-1">
                <Target className="w-3 h-3 text-purple-400" />
                {ad.targetAge}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {ad.title}
            </h2>
            <p className="text-xs text-neutral-400 font-mono">
              Arquivo: {ad.filename}
            </p>
          </div>

          {/* Toggle Structured vs Continuous & Copy Button */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="flex items-center p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('structured')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'structured' ? 'bg-blue-600 text-white shadow' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Blocos de Copy
              </button>
              <button
                onClick={() => setViewMode('continuous')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'continuous' ? 'bg-blue-600 text-white shadow' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Texto Corrido
              </button>
            </div>

            <button
              onClick={copyFullAd}
              title="Copiar transcrição completa"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-neutral-300 hover:text-white transition-all"
            >
              {copiedSection === 'full' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Key Strategy Insight Pill */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs md:text-sm text-neutral-200">
            <strong className="text-blue-300 font-semibold">Insight Estratégico: </strong>
            {ad.keyInsight}
          </div>
        </div>

        {/* Content View: Structured Blocks vs Continuous */}
        {viewMode === 'structured' ? (
          <div className="space-y-4">
            
            {/* 1. HOOK */}
            <div className="p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 hover:border-emerald-500/40 transition-all space-y-2 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Hook / Gancho de Atenção (0 - 5s)
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(ad.hook, 'hook')}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 text-xs flex items-center gap-1"
                >
                  {copiedSection === 'hook' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">Copiar</span>
                </button>
              </div>
              <p className="text-sm md:text-base text-neutral-100 font-medium leading-relaxed">
                "{ad.hook}"
              </p>
            </div>

            {/* 2. HISTÓRIA */}
            <div className="p-5 rounded-2xl bg-purple-500/[0.04] border border-purple-500/20 hover:border-purple-500/40 transition-all space-y-2 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    História / Vulnerabilidade Médica
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(ad.history, 'history')}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 text-xs flex items-center gap-1"
                >
                  {copiedSection === 'history' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">Copiar</span>
                </button>
              </div>
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
                {ad.history}
              </p>
            </div>

            {/* 3. MECANISMO DO PROBLEMA */}
            <div className="p-5 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20 hover:border-rose-500/40 transition-all space-y-2 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                    Mecanismo do Problema (O Vilão Oculto)
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(ad.problem, 'problem')}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 text-xs flex items-center gap-1"
                >
                  {copiedSection === 'problem' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">Copiar</span>
                </button>
              </div>
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
                {ad.problem}
              </p>
            </div>

            {/* 4. MECANISMO DA SOLUÇÃO */}
            <div className="p-5 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 hover:border-amber-500/40 transition-all space-y-2 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Mecanismo da Solução (O Detox da Tentante - 7 Dias)
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(ad.solution, 'solution')}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 text-xs flex items-center gap-1"
                >
                  {copiedSection === 'solution' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">Copiar</span>
                </button>
              </div>
              <p className="text-sm md:text-base text-neutral-200 leading-relaxed">
                {ad.solution}
              </p>
            </div>

            {/* 5. CTA */}
            <div className="p-5 rounded-2xl bg-blue-500/[0.06] border border-blue-500/30 hover:border-blue-500/50 transition-all space-y-2 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    CTA / Chamada para Ação (Oferta R$ 57)
                  </span>
                </div>
                <button
                  onClick={() => copyToClipboard(ad.cta, 'cta')}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 text-xs flex items-center gap-1"
                >
                  {copiedSection === 'cta' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">Copiar</span>
                </button>
              </div>
              <p className="text-sm md:text-base text-neutral-100 font-medium leading-relaxed">
                "{ad.cta}"
              </p>
            </div>

          </div>
        ) : (
          /* Continuous Text Mode */
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs text-neutral-400">
              <span>Transcrição Completa Contínua</span>
              <span className="font-mono">{ad.duration}</span>
            </div>
            <p className="text-sm md:text-base text-neutral-200 leading-relaxed whitespace-pre-line font-sans">
              {`${ad.hook} ${ad.history} ${ad.problem} ${ad.solution} ${ad.cta}`}
            </p>
          </div>
        )}

        {/* Bottom Pagination Switcher */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 text-xs md:text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anúncio Anterior</span>
          </button>
          
          <span className="text-xs text-neutral-500">
            {currentIndex + 1} de {ADS_DATA.length}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 text-xs md:text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            <span>Próximo Anúncio</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
