export function NetworkCanvas() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 bg-[#07090E] overflow-hidden" 
      aria-hidden="true"
    >
      {/* Subtle architectural ambient glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-500/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600/[0.025] rounded-full blur-[160px] pointer-events-none" />
      
      {/* Fine grid pattern */}
      <div className="absolute inset-0 grid-bg-pattern pointer-events-none" />
    </div>
  );
}

export default NetworkCanvas;
