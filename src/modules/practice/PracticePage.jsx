import { Mic, Circle, Square, Play, RefreshCcw, Save, Sparkles, Volume2 } from 'lucide-react';

export default function PracticePage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-16 animate-in fade-in duration-700 text-center">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-7xl font-black text-current tracking-tighter flex items-center justify-center gap-6">
          Training Zone <Sparkles className="text-brand-blue w-14 h-14 glow-icon" />
        </h1>
        <p className="opacity-40 text-lg font-medium italic max-w-2xl mx-auto">
          Position your microphone. The system is ready to analyze your vocal dynamics and STAR structure.
        </p>
      </div>

      <div className="flex flex-col items-center gap-16">
        {/* Recording Visualizer Container */}
        <div className="relative group">
          {/* Animated Glow Rings */}
          <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-pulse opacity-20"></div>
          <div className="absolute inset-[-80px] border border-white/5 rounded-full animate-pulse opacity-10 delay-300"></div>
          
          <div className="glass-card w-80 h-80 flex flex-col items-center justify-center gap-8 relative z-10 hover:scale-[1.02] transition-transform shadow-2xl shadow-blue-500/10">
            <div className="w-24 h-24 rounded-3xl bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
              <Mic className="w-12 h-12 text-brand-blue glow-icon" />
            </div>
            <div className="space-y-1">
              <span className="text-4xl font-black tracking-widest text-current font-mono">00:00:00</span>
              <p className="text-[10px] font-black opacity-20 uppercase tracking-[0.4em]">STANDBY MODE</p>
            </div>
          </div>
        </div>

        {/* Control Console */}
        <div className="glass-card px-12 py-8 flex items-center gap-12 scale-110">
          <button className="flex flex-col items-center gap-3 group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500/20 transition-all shadow-lg shadow-red-500/5">
              <Circle className="w-8 h-8" fill="currentColor" />
            </div>
            <span className="text-[10px] font-black opacity-30 uppercase tracking-widest group-hover:opacity-100 transition-opacity">Record</span>
          </button>

          <button className="flex flex-col items-center gap-3 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-current flex items-center justify-center group-hover:scale-110 transition-all">
              <Square className="w-8 h-8" fill="currentColor" />
            </div>
            <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">Stop</span>
          </button>

          <div className="h-16 w-[2px] bg-white/5 mx-2 rounded-full"></div>

          <button className="flex flex-col items-center gap-3 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-current flex items-center justify-center group-hover:scale-110 transition-all">
              <RefreshCcw className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">Reset</span>
          </button>
        </div>

        {/* Dynamic Context Card */}
        <div className="w-full max-w-3xl glass-card p-12 relative group overflow-hidden">
           <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-brand-blue/30"></div>
              <div className="w-2 h-2 rounded-full bg-brand-blue/30"></div>
           </div>
           
           <div className="flex flex-col items-center justify-center space-y-4">
             <Volume2 className="text-brand-blue w-10 h-10 opacity-20 mb-2" />
             <h3 className="text-xl font-black text-current tracking-tight">Active Context: Customer Support Scenario</h3>
             <p className="opacity-40 text-sm max-w-lg leading-relaxed italic">
               Teammate Domain: Audio visualization engine and wave-rendering logic integration point.
             </p>
           </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="pt-12">
         <div className="text-[10px] font-bold opacity-10 tracking-[1em] uppercase">
           Integrated Voice Engine • V1.0 Architect Frame
         </div>
      </div>
    </div>
  )
}
