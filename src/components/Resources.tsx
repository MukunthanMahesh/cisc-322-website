export default function Resources() {
  return (
    <section
      id="resources"
      className="py-20 flex flex-col items-center"
    >
      <div className="text-center max-w-4xl w-full mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Resources
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Project Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Resource 1
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Resource 2
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Resource 3
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              References
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Reference 1
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Reference 2
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Reference 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
