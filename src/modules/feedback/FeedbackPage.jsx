import { Share2, Download, TrendingUp, Info, Star, Sparkles, MessageSquare, Award } from 'lucide-react';

const FeedbackMetric = ({ label, score, color }) => (
  <div className="glass-card p-6 space-y-4 hover:scale-[1.02] transition-all cursor-pointer group">
    <div className="flex justify-between items-center">
      <span className="text-sm font-black opacity-30 uppercase tracking-[0.2em] group-hover:opacity-100 transition-opacity">{label}</span>
      <span className="text-2xl font-black text-current">{score}%</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
      <div 
        className={`h-full rounded-full transition-all duration-1000 ${color} shadow-[0_0_15px_rgba(79,172,254,0.4)]`} 
        style={{ width: `${score}%` }}
      ></div>
    </div>
  </div>
);

export default function FeedbackPage() {
  const metrics = [
    { label: 'Clarity', score: 88, color: 'bg-brand-blue' },
    { label: 'Confidence', score: 74, color: 'bg-purple-500' },
    { label: 'STAR Logic', score: 92, color: 'bg-emerald-500' },
    { label: 'Pacing', score: 65, color: 'bg-yellow-500' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-black text-current tracking-tighter flex items-center gap-4">
            Analysis <Award className="text-brand-blue w-12 h-12 glow-icon" />
          </h1>
          <p className="opacity-40 font-medium italic">Architect Insights • Teammate AI Engine</p>
        </div>
        <div className="flex gap-4">
          <button className="p-4 glass-card bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 transition-all active:scale-95 cursor-pointer">
            <Share2 className="w-6 h-6 opacity-40 text-current" />
          </button>
          <button className="px-8 py-4 glass-card bg-brand-blue/20 hover:bg-brand-blue/30 border-brand-blue/30 flex items-center gap-3 font-black transition-all active:scale-95 cursor-pointer">
            <Download className="w-5 h-5 text-brand-blue" />
            <span className="tracking-widest text-xs uppercase text-current">Export PDF</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Insights Card */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-card p-12 relative overflow-hidden min-h-[500px] flex flex-col">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <TrendingUp size={300} className="text-brand-blue" />
            </div>
            
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center">
                <Sparkles className="text-brand-blue w-8 h-8 glow-icon" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tight text-current">AI Executive Summary</h3>
                <p className="opacity-40 text-sm font-bold uppercase tracking-widest">Session ID: #ARCH-9921</p>
              </div>
            </div>

            <div className="flex-1 w-full bg-white/5 border-2 border-dashed border-white/10 rounded-[3rem] p-16 flex flex-col items-center justify-center text-center space-y-4">
               <MessageSquare className="w-12 h-12 opacity-10" />
               <p className="text-lg font-medium opacity-40 italic max-w-md">
                 Teammate Domain: Large Language Model processing output and sentiment analysis visualization logic.
               </p>
            </div>
          </div>
        </div>

        {/* Sidebar Metrics */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-8 bg-brand-blue/5 border-brand-blue/10">
             <h4 className="text-[10px] font-black opacity-30 uppercase tracking-[0.3em] mb-6">Real-time Performance</h4>
             <div className="space-y-6">
               {metrics.map((m, i) => (
                 <FeedbackMetric key={i} {...m} />
               ))}
             </div>
          </div>

          <button className="w-full glass-card p-8 flex items-center justify-between group hover:bg-white/5 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <Info className="text-brand-blue w-6 h-6" />
              <span className="text-xs font-black uppercase tracking-widest opacity-60">Improvement Plan</span>
            </div>
            <Sparkles className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity text-brand-blue" />
          </button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="pt-12 flex justify-center">
         <div className="text-[10px] font-bold opacity-10 tracking-[0.5em] uppercase text-center">
           Neural Feedback Architecture • Iteration 2 Global Design
         </div>
      </div>
    </div>
  )
}
