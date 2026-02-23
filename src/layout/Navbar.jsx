import { NavLink } from 'react-router-dom';
import { Home, UserPlus, LogIn, BookOpen, Mic, MessageSquare } from 'lucide-react';
import ThemeToggle from '../components/common/ThemeToggle';

export default function Navbar() {
  const navItems = [
    { path: '/login', label: 'Login', icon: <LogIn size={18} /> },
    { path: '/register', label: 'Join', icon: <UserPlus size={18} /> },
    { path: '/dashboard', label: 'Dashboard', icon: <Home size={18} /> },
    { path: '/story-builder', label: 'Build', icon: <BookOpen size={18} /> },
    { path: '/practice', label: 'Practice', icon: <Mic size={18} /> },
    { path: '/feedback', label: 'Feedback', icon: <MessageSquare size={18} /> },
  ];

  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between sticky top-0 z-50 nav-glass mx-auto max-w-[95%] mt-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full icon-container shadow-sm flex items-center justify-center font-bold text-sm text-current">
          ST
        </div>
        <span className="text-xl font-bold tracking-tight text-current">STARTTalking</span>
      </div>
      
      <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center space-x-2 px-5 py-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'btn-primary shadow-lg' 
                  : 'hover:text-current opacity-60 hover:opacity-100'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <ThemeToggle />
    </nav>
  );
}
