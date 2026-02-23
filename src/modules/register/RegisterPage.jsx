import { UserPlus, Sparkles, User, Mail, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center p-6 animate-in fade-in duration-700">
      {/* Registration Card */}
      <div className="glass-card w-full max-w-2xl p-12 flex flex-col items-center relative overflow-hidden">
        {/* Blue Glowing Icon Container */}
        <div className="w-20 h-20 rounded-3xl icon-container flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/10 relative">
          <Sparkles className="w-10 h-10 text-brand-blue glow-icon" />
        </div>

        {/* Header */}
        <h1 className="text-5xl font-black text-current mb-3 tracking-tight">Create Account</h1>
        <p className="opacity-40 italic text-sm mb-12 font-medium">Design by Architect • Logic by Teammate</p>

        {/* Registration Form */}
        <form className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
                  <User className="h-6 w-6" />
                </div>
                <input 
                  className="w-full bg-slate-50/50 dark:bg-white/5 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl py-6 pl-16 pr-6 text-sm tracking-widest font-bold text-current placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-brand-blue/50 focus:bg-white transition-all uppercase" 
                  placeholder="USERNAME: TEAMMATE" 
                  type="text"
                />
             </div>
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none opacity-40 group-focus-within:opacity-100 transition-opacity">
                  <Mail className="h-6 w-6" />
                </div>
                <input 
                  className="w-full bg-slate-50/50 dark:bg-white/5 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl py-6 pl-16 pr-6 text-sm tracking-widest font-bold text-current placeholder-slate-400 dark:placeholder-white/20 focus:outline-none focus:border-brand-blue/50 focus:bg-white transition-all uppercase" 
                  placeholder="EMAIL: TEAMMATE" 
                  type="email"
                />
             </div>
          </div>

          <button className="w-full btn-primary font-black py-5 rounded-2xl flex items-center justify-center space-x-3 transition-all transform active:scale-[0.98] tracking-widest text-lg cursor-pointer">
            <UserPlus className="h-6 w-6" />
            <span>INITIALIZE ACCOUNT</span>
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-12 text-sm opacity-60 font-medium">
          Already have an account? <NavLink to="/login" className="text-brand-blue hover:underline">Log In</NavLink>
        </div>

        {/* Version Identifier */}
        <div className="mt-6 text-[10px] font-bold opacity-20 tracking-[0.2em] uppercase">
          SYSTEM SKELETON V1.0 • ARCHITECT PHASE
        </div>
      </div>
    </div>
  )
}
