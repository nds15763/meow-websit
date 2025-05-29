export default function Home() {
  return (
    <div className="w-full h-full">
      {/* Canva iframe that fills the entire screen */}
      <iframe 
        loading="lazy" 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          top: 0, 
          left: 0, 
          border: 'none', 
          padding: 0, 
          margin: 0 
        }}
        src="https://www.canva.com/design/DAGkbDi7E-I/0Rx-etCMBetDHA-hGCGOMA/view?embed" 
        allowFullScreen={true} 
        allow="fullscreen"
      />
      <a 
        href="https://www.canva.com/design/DAGkbDi7E-I/0Rx-etCMBetDHA-hGCGOMA/view?utm_content=DAGkbDi7E-I&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
        target="_blank" 
        rel="noopener"
        className="sr-only"
      >
        Orange Yellow Playful Illustration Group Project Presentation
      </a>
    </div>
  );
}
