import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className="relative min-h-screen text-current font-sans selection:bg-brand-blue/30 selection:text-white">
      {/* 
          Background is handled by body (index.css) 
          using Sophisticated Radial Gradients 
      */}
      
      <Navbar />
      
      <main className="relative z-10 pt-40 pb-32 px-6 max-w-[1400px] mx-auto transition-all duration-700">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)]">
          <Outlet />
        </div>
      </main>
      
      {/* Floating Version Label */}
      <div className="fixed bottom-8 left-12 p-1 z-50 transform rotate-[-90deg] origin-left opacity-10 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] whitespace-nowrap">
          SYSTEM SKELETON V2.0 • ARCHITECT CORE
        </span>
      </div>

      {/* Social / Credits Corner */}
      <div className="fixed bottom-8 right-12 z-50 opacity-10 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
          BY ARCHITECT & TEAMMATE
        </span>
      </div>
    </div>
  );
}
