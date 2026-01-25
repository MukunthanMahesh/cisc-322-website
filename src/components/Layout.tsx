export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="sticky top-0 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <ul className="flex gap-6">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#documentation">Documentation</a>
            </li>
            <li>
              <a href="#deliverables">Deliverables</a>
            </li>
          </ul>
        </div>
      </nav>
      
      <main>
        {children}
      </main>
    </div>
  );
}
