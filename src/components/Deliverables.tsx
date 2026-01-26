import DeliverableCard from './DeliverableCard';

const deliverables = [
  {
    title: "Assignment 1",
    date: "Date TBD",
    description: "Brief description of Assignment 1 goes here.",
    pdfUrl: undefined,
    videoUrl: undefined,
  },
  {
    title: "Assignment 2",
    date: "Date TBD",
    description: "Brief description of Assignment 2 goes here.",
    pdfUrl: undefined,
    videoUrl: undefined,
  },
  {
    title: "Assignment 3",
    date: "Date TBD",
    description: "Brief description of Assignment 3 goes here.",
    pdfUrl: undefined,
    videoUrl: undefined,
  },
];

export default function Deliverables() {
  return (
    <section id="deliverables" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Assignments
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className={index === deliverables.length - 1 && deliverables.length % 2 === 1 ? "md:col-span-2 md:flex md:justify-center" : ""}
            >
              <div className={index === deliverables.length - 1 && deliverables.length % 2 === 1 ? "md:w-1/2" : "w-full"}>
                <DeliverableCard
                  title={deliverable.title}
                  date={deliverable.date}
                  description={deliverable.description}
                  pdfUrl={deliverable.pdfUrl}
                  videoUrl={deliverable.videoUrl}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
