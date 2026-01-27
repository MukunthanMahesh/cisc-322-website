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
  return (
    <div 
      className="rounded-2xl flex flex-row h-64 overflow-hidden bg-linear-to-b from-[#070707] to-[#111C2A]"
      style={{
        border: '2px solid #68528D'
      }}
    >
      {/* PDF Preview */}
      <div className="w-1/2 bg-black/30 flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <p className="text-2xl font-bold">PDF</p>
          <p className="text-sm">Preview</p>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="w-1/2 p-4 flex flex-col justify-between">
        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs text-gray-400 mt-1">{date}</p>
          <p className="text-gray-300 mt-2 text-xs leading-relaxed">{description}</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-row gap-2">
          <a 
            href={pdfUrl || '#'} 
            className="flex-1 px-3 py-1.5 rounded text-xs flex items-center justify-center text-center text-white"
            style={{
              backgroundColor: '#68528D'
            }}
            onClick={(e) => !pdfUrl && e.preventDefault()}
          >
            Download PDF
          </a>
          <a 
            href={videoUrl || '#'} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-3 py-1.5 rounded text-xs flex items-center justify-center text-center"
            style={{
              border: '1px solid #68528D',
              color: '#68528D'
            }}
            onClick={(e) => !videoUrl && e.preventDefault()}
          >
            View Video
          </a>
        </div>
      </div>
    </div>
  );
}
