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
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Assignments
        </h2>
        
        <div className="flex flex-col gap-6">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className=""
            >
              <DeliverableCard
                title={deliverable.title}
                date={deliverable.date}
                description={deliverable.description}
                pdfUrl={deliverable.pdfUrl}
                videoUrl={deliverable.videoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
