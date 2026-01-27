import { useEffect, useState } from 'react';
import { IoHome, IoMenu, IoClose } from 'react-icons/io5';

const navItems = [
  { href: '#hero', label: 'Home', isHome: true },
  { href: '#deliverables', label: 'Assignments' },
  { href: '#resources', label: 'Resources' },
  { href: '#team', label: 'Team' },
];

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (!hero) {
        setVisible(true);
        return;
      }

      const rect = hero.getBoundingClientRect();
      setVisible(rect.bottom <= 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseLinkClasses =
    'text-[#e0e0e0] px-6 py-2 text-sm font-normal tracking-wide transition-colors duration-300 inline-flex items-center justify-center';

  const underlineClasses =
    "relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-[60%] hover:text-white";

  return (
    <>
      {/* Desktop navbar — centered, appears after scrolling past hero */}
      <nav
        className={`hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-[50px] shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/15 px-6 py-2">
          <ul className="flex gap-1 items-center uppercase">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isHome ? (
                  <a
                    href={item.href}
                    className={`${baseLinkClasses} group`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 group-hover:bg-[#A5B4FC]/30">
                      <IoHome size={18} className="text-[#e0e0e0]" />
                    </span>
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className={`${baseLinkClasses} ${underlineClasses}`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile navbar — top-right, always visible */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/15 text-[#e0e0e0] transition-colors duration-200 hover:bg-white/20"
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
        </button>

        <div
          className={`absolute top-14 right-0 min-w-[180px] bg-white/10 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/15 overflow-hidden transition-all duration-300 origin-top-right ${
            menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col py-2 uppercase">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-5 py-3 text-sm font-normal tracking-wide text-[#e0e0e0] transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  {item.isHome && <IoHome size={16} />}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
