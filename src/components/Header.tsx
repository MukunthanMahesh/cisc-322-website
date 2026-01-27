import { IoHome } from 'react-icons/io5';

export default function Header() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-xl rounded-[50px] shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/15 px-10 py-[18px]">
        <ul className="flex gap-0 items-center uppercase">
          <li>
            <a
              href="#hero"
              className="text-[#e0e0e0] px-8 py-3 text-base font-normal tracking-wide hover:text-white transition-all duration-300 relative inline-block after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-[60%]"
            >
              <IoHome size={20} />
            </a>
          </li>
          <li>
            <a
              href="#deliverables"
              className="text-[#e0e0e0] px-8 py-3 text-base font-normal tracking-wide hover:text-white transition-all duration-300 relative inline-block after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-[60%]"
            >
              Assignments
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className="text-[#e0e0e0] px-8 py-3 text-base font-normal tracking-wide hover:text-white transition-all duration-300 relative inline-block after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-[60%]"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="text-[#e0e0e0] px-8 py-3 text-base font-normal tracking-wide hover:text-white transition-all duration-300 relative inline-block after:content-[''] after:absolute after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-[60%]"
            >
              Team
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
