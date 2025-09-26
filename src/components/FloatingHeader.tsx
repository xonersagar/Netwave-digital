import { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Server, Users, ShoppingCart, FileText } from 'lucide-react';
import netwaveLogo from '@/assets/netwave-logo.png';

const FloatingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'IT Services', icon: Code, id: 'services' },
    { name: 'Mobile', icon: Smartphone, id: 'mobile' },
    { name: 'Server Side', icon: Server, id: 'server' },
    { name: 'Hiring', icon: Users, id: 'hiring' },
    { name: 'E-Commerce', icon: ShoppingCart, id: 'ecommerce' },
    { name: 'CMS', icon: FileText, id: 'cms' },
    { name: 'About', icon: Users, id: 'about' },
    { name: 'Contact', icon: Users, id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`floating-header ${scrolled ? 'header-gradient-scrolled' : 'header-gradient'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="logo-container">
              <img 
                src={netwaveLogo} 
                alt="NetWave Digital Logo" 
                className="h-16 w-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-primary/10 text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 glass-card">
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default FloatingHeader;