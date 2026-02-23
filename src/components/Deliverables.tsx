import DeliverableCard from './DeliverableCard';

const deliverables = [
  {
    title: "Conceptual Architecture",
    date: "Feb 13th, 2026",
    description: "This report provides a comprehensive conceptual analysis of the Gemini CLI architecture, its governing principles, and its limitations.",
    pdfUrl: 'https://drive.google.com/file/d/1gSQ6-N5vKafOrgNkJkiPaywX6lhfUb2P/view?usp=sharing',
    videoUrl: 'https://docs.google.com/presentation/d/16MTtuJeCMigRYuNfKdU3ckEUvY3ZyHMH/edit?usp=sharing&ouid=107779766958181252248&rtpof=true&sd=true',
    pdfPreviewImage: '/images/thumbnails/conceptual_architecture_thumbnail.jpg',
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
    <section id="deliverables" className="py-10">
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
                pdfPreviewImage={deliverable.pdfPreviewImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
