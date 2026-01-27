import DeliverableCard from './DeliverableCard';

const deliverables = [
  {
    title: "Conceptual Architecture",
    date: "Feb 13th, 2026",
    description: "Details will be available on February 13th, 2026.",
    pdfUrl: undefined,
    videoUrl: undefined,
  },
  {
    title: "Concrete Architecture",
    date: "Mar 13, 2026",
    description: "Details will be available on March 13th, 2026.",
    pdfUrl: undefined,
    videoUrl: undefined,
  },
  {
    title: "Enhancement Report",
    date: "Apr 6, 2026",
    description: "Details will be available on April 6th, 2026.",
    pdfUrl: undefined,
    videoUrl: undefined,
  },
];


export default function Deliverables() {
  return (
    <section id="deliverables" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center font-editorial uppercase">
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
