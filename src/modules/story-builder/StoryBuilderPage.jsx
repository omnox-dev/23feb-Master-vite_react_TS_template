import { Edit3, Info, Save, Plus, Sparkles, BookOpen, Send } from 'lucide-react';

const StarSection = ({ letter, title, description }) => (
  <div className="glass-card p-10 relative overflow-hidden group hover:bg-white/5 transition-all">
    <div className="absolute top-[-20px] right-[-10px] text-9xl font-black opacity-[0.03] select-none group-hover:opacity-[0.07] transition-opacity">
      {letter}
    </div>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-black text-xl shadow-lg shadow-brand-blue/5">
        {letter}
      </div>
      <h3 className="text-2xl font-black tracking-tight text-current">{title}</h3>
    </div>
    <p className="opacity-40 text-sm mb-8 leading-relaxed italic">{description}</p>
    
    <div className="w-full bg-white/5 border-2 border-dashed border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center text-center space-y-3">
       <Edit3 className="w-8 h-8 opacity-10" />
       <p className="text-[10px] font-bold opacity-20 uppercase tracking-[0.2em]">Teammate Domain: Text Editor</p>
    </div>
  </div>
);

export default function StoryBuilderPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <h1 className="text-6xl font-black text-current tracking-tighter flex items-center gap-4">
            Story Builder <BookOpen className="text-brand-blue w-12 h-12 glow-icon" />
          </h1>
          <p className="opacity-40 font-medium italic">Architect Visuals • Teammate Data Strategy</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 glass-card bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 flex items-center gap-3 font-bold transition-all active:scale-95 cursor-pointer">
            <Save className="w-5 h-5 opacity-40" />
            <span className="tracking-widest text-xs uppercase text-current">Save Draft</span>
          </button>
          <button className="px-8 py-4 glass-card bg-brand-blue/20 hover:bg-brand-blue/30 border-brand-blue/30 flex items-center gap-3 font-bold transition-all active:scale-95 cursor-pointer">
            <Send className="w-5 h-5 text-brand-blue" />
            <span className="tracking-widest text-xs uppercase text-current">Analyze Story</span>
          </button>
        </div>
      </div>

      {/* STAR Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <StarSection 
          letter="S" 
          title="Situation" 
          description="Describe the setting: When, where, and why was this moment critical?" 
        />
        <StarSection 
          letter="T" 
          title="Task" 
          description="What was the specific challenge? What were you responsible for?" 
        />
        <StarSection 
          letter="A" 
          title="Action" 
          description="The most important part: What did YOU specifically do?" 
        />
        <StarSection 
          letter="R" 
          title="Result" 
          description="The outcome: What changed? Use metrics or specific feedback." 
        />
      </div>

      {/* Footer Branding */}
      <div className="pt-12 flex justify-center">
         <div className="text-[10px] font-bold opacity-20 tracking-[0.5em] uppercase">
           Structured Storytelling Methodology • STAR Framework
         </div>
      </div>
    </div>
  )
}
