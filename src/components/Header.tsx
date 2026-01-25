export default function Header() {
  return (
    <nav className="sticky top-0 bg-white border-b shadow-sm z-10">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#deliverables" className="text-gray-700 hover:text-blue-600 transition-colors">
              Assignments
            </a>
          </li>
          <li>
            <a href="#documentation" className="text-gray-700 hover:text-blue-600 transition-colors">
              Documentation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
