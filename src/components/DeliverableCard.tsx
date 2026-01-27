interface DeliverableCardProps {
  title: string;
  date: string;
  description: string;
  pdfUrl?: string;
  videoUrl?: string;
}

export default function DeliverableCard({ 
  title, 
  date,
  description,
  pdfUrl,
  videoUrl 
}: DeliverableCardProps) {
  const hasPdf = Boolean(pdfUrl);
  const hasVideo = Boolean(videoUrl);

  return (
    <div 
      className="rounded-2xl flex flex-col md:flex-row h-auto md:h-64 overflow-hidden bg-linear-to-b from-[#070707] to-[#111C2A]"
      style={{
        border: '2px solid #68528D'
      }}
    >
      {/* PDF Preview */}
      <div className="hidden md:flex md:w-1/3 bg-black/30 items-center justify-center">
        <div className="text-gray-400 text-center">
          <p className="text-xl font-bold">PDF</p>
          <p className="text-xs">Preview</p>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="w-full md:w-2/3 p-4 sm:p-5 flex flex-col justify-between">
        {/* Description */}
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{date}</p>
          <p className="text-gray-300 mt-2 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <a 
            href={pdfUrl || '#'} 
            className={
              'flex-1 px-3 py-3 sm:py-4 rounded text-sm sm:text-base flex items-center justify-center text-center text-white transition-colors duration-150 bg-[#68528D]' +
              (hasPdf ? ' hover:bg-[#7b64a3]' : '')
            }
            style={{
              cursor: hasPdf ? 'pointer' : 'not-allowed',
              opacity: hasPdf ? 1 : 0.5,
            }}
            onClick={(e) => !hasPdf && e.preventDefault()}
          >
            View Report
          </a>
          <a 
            href={videoUrl || '#'} 
            target="_blank"
            rel="noopener noreferrer"
            className={
              'flex-1 px-3 py-3 sm:py-4 rounded text-sm sm:text-base flex items-center justify-center text-center text-[#68528D] border border-[#68528D] transition-colors duration-150' +
              (hasVideo ? ' hover:bg-[#68528D] hover:text-white' : '')
            }
            style={{
              cursor: hasVideo ? 'pointer' : 'not-allowed',
              opacity: hasVideo ? 1 : 0.5,
            }}
            onClick={(e) => !hasVideo && e.preventDefault()}
          >
            View Presentation
          </a>
        </div>
      </div>
    </div>
  );
}
