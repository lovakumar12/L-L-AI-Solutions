import { Brain } from 'lucide-react';

interface LogoProps {
  isScrolled?: boolean;
  isFooter?: boolean;
}

const Logo = ({ isScrolled = false, isFooter = false }: LogoProps) => {
  const textColorClass = isFooter 
    ? 'text-white' 
    : isScrolled 
      ? 'text-gray-900' 
      : 'text-white';

  return (
    <div className="flex items-center space-x-2">
      <div className={`p-1.5 rounded-lg ${isFooter ? 'bg-white/20' : 'gradient-primary'}`}>
        <Brain className="h-6 w-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className={`font-bold text-xl leading-none ${textColorClass}`}>L&L</span>
        <span className={`text-xs font-medium ${textColorClass} opacity-90`}>AI Solutions</span>
      </div>
    </div>
  );
};

export default Logo;