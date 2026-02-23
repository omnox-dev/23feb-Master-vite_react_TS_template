import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-3">
      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
        {theme === 'dark' ? 'Dark' : 'Light'}
      </span>
      <div 
        onClick={toggleTheme}
        className="w-[80px] h-[36px] bg-slate-200/50 dark:bg-white/10 rounded-full relative flex items-center px-1 cursor-pointer border border-slate-300/30 dark:border-white/10 transition-all"
      >
        <div className={`
          w-[28px] h-[28px] bg-white dark:bg-white/20 rounded-full flex items-center justify-center
          shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2),inset_0_0_5px_rgba(255,255,255,0.3)]
          backdrop-blur-[5px] transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1)
          ${theme === 'dark' ? 'translate-x-[44px]' : 'translate-x-0'}
        `}>
          {theme === 'dark' ? (
            <Moon size={14} className="text-white fill-white/20" />
          ) : (
            <Sun size={14} className="text-slate-800" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
