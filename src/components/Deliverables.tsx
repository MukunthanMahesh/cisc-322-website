export default function Deliverables() {
  return (
    <section id="deliverables" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Assignments
        </h2>
        
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Reports
            </h3>
            <ul className="space-y-3">
              <li className="flex items-baseline gap-3">
                <span className="text-gray-500 text-sm">Date TBD</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Report 1
                </a>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-gray-500 text-sm">Date TBD</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Report 2
                </a>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-gray-500 text-sm">Date TBD</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Report 3
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              Presentations
            </h3>
            <ul className="space-y-3">
              <li className="flex items-baseline gap-3">
                <span className="text-gray-500 text-sm">Date TBD</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Presentation 1 
                </a>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-gray-500 text-sm">Date TBD</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Presentation 2 
                </a>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-gray-500 text-sm">Date TBD</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Presentation 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
