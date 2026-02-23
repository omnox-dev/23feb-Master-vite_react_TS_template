import { LayoutDashboard, Star, Activity, Mic, BookOpen, MessageSquare, Sparkles } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="glass-card p-8 flex flex-col items-center text-center group hover:scale-[1.02] transition-all">
    <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-2xl ${color}`}>
      <Icon className="w-8 h-8 glow-icon" />
    </div>
    <h3 className="text-sm font-bold opacity-40 uppercase tracking-[0.2em] mb-2">{label}</h3>
    <p className="text-4xl font-black text-current">{value}</p>
  </div>
);

const QuickAction = ({ icon: Icon, title, desc }) => (
  <button className="glass-card p-10 flex flex-col items-start text-left group hover:bg-white/5 transition-all text-current cursor-pointer">
    <Icon className="w-10 h-10 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
    <h3 className="text-2xl font-black mb-2 tracking-tight">{title}</h3>
    <p className="opacity-40 text-sm leading-relaxed">{desc}</p>
  </button>
);

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-6xl font-black text-current tracking-tighter flex items-center gap-4">
            Hello, User <Sparkles className="text-brand-blue w-12 h-12 glow-icon" />
          </h1>
          <p className="opacity-40 font-medium mt-2 italic">Design by Architect • Logic by Teammate</p>
        </div>
        <div className="px-8 py-4 glass-card flex items-center gap-4">
           <Activity className="text-brand-blue w-8 h-8" />
           <div>
              <p className="text-[10px] font-bold opacity-30 uppercase tracking-widest">Global Status</p>
              <p className="font-black text-current">SYSTEM ACTIVE</p>
           </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={Star} label="Star Points" value="1,240" color="text-yellow-400" />
        <StatCard icon={BookOpen} label="Stories" value="12" color="text-brand-blue" />
        <StatCard icon={MessageSquare} label="Talk Time" value="48m" color="text-emerald-400" />
        <StatCard icon={Activity} label="Confidence" value="84%" color="text-purple-400" />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <QuickAction 
          icon={Mic} 
          title="Voice Practice" 
          desc="Improve your verbal tone and modulation through AI-powered feedback loops." 
        />
        <QuickAction 
          icon={BookOpen} 
          title="Story Builder" 
          desc="Construct interactive scenarios using our liquid-glass story editor architecture." 
        />
      </div>

      {/* Footer Branding */}
      <div className="pt-12 flex justify-center">
         <div className="text-[10px] font-bold opacity-20 tracking-[0.5em] uppercase">
           Integrated Development Environment • V1.0 Stable
         </div>
      </div>
    </div>
  )
}
