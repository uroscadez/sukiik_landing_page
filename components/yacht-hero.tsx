export function YachtHero() {
  return (
    <section className="relative h-screen bg-slate-900 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('/yacht-hero-bg.jpg')`,
        }}
      />

      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-light tracking-widest mb-8">SUUK IIK II</h1>
        <div className="text-sm tracking-wider opacity-80">AVAILABLE FOR CHARTER</div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
        <div className="text-xs tracking-wider mb-2">SCROLL TO EXPLORE</div>
        <div className="w-px h-12 bg-white mx-auto opacity-40"></div>
      </div>
    </section>
  )
}
