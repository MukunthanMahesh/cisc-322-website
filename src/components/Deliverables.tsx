import DeliverableCard from "./DeliverableCard";

const deliverables = [
  {
    title: "Conceptual Architecture",
    date: "Feb 13th, 2026",
    description:
      "This report provides a comprehensive conceptual analysis of the Gemini CLI architecture, its governing principles, and its limitations.",
    pdfUrl:
      "https://drive.google.com/file/d/1gSQ6-N5vKafOrgNkJkiPaywX6lhfUb2P/view?usp=sharing",
    videoUrl:
      "https://docs.google.com/presentation/d/16MTtuJeCMigRYuNfKdU3ckEUvY3ZyHMH/edit?usp=sharing&ouid=107779766958181252248&rtpof=true&sd=true",
    pdfPreviewImage: "/images/thumbnails/conceptual_architecture_thumbnail.jpg",
  },
  {
    title: "Concrete Architecture",
    date: "Mar 13, 2026",
    description:
      "This report provides a detailed concrete analysis of the Gemini CLI architecture, examining its actual implementation, component interactions, and structural design.",
    pdfUrl:
      "https://docs.google.com/document/d/18Qn3rJbqhalOI45SQL4SLfOnnvAx4A3flZFksmh50V4/edit?usp=sharing",
    videoUrl:
      "https://docs.google.com/presentation/d/1Pccl4wBs2LuQXyXDPJfyMGAm0pQHXhgz/edit?usp=sharing&ouid=106255804162809543719&rtpof=true&sd=true",
    pdfPreviewImage: "/images/thumbnails/concrete_architecture_thumbnail.png",
  },
  {
    title: "Enhancement Report",
    date: "Apr 6, 2026",
    description:
      "This report provides an enhancement proposal for the Gemini CLI architecture. In particular, we want to add support for user-defined output schemas, similar to Claude Code and OpenAI Codex, to enable predictable structured outputs for multi-agent workflows",
    pdfUrl:
      "https://drive.google.com/file/d/1TZ11rPhH4oh4stIGFS9bmqDid4FYdu4Y/view?usp=sharing",
    videoUrl: undefined,
    pdfPreviewImage: "/images/thumbnails/architectural_enhancement_report.png",
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
            <div key={index} className="">
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
