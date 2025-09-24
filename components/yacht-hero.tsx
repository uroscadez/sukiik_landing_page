export function YachtHero() {
  const whatsappNumber = "38641229017" // Remove + and spaces for WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <section className="relative h-screen bg-slate-900 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url('/y8-hero-2.jpg')`,
        }}
      />

      <div className="relative z-10 text-center text-white mt-[35%]">
        <h1 className="text-6xl md:text-8xl font-light tracking-widest mb-8">SUUK IIK II</h1>
        <div className="text-sm tracking-wider opacity-80">AVAILABLE FOR CHARTER</div>
        <div className="text-xl flex justify-evenly opacity-80">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-white/10 transition-colors duration-200 py-1 px-2 rounded"
          >
            <span className="text-xl font-medium">CALL / WHATSAPP +386 41 229017</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
        <div className="text-xs tracking-wider mb-2">SCROLL TO EXPLORE</div>
        <div className="w-px h-12 bg-white mx-auto opacity-40"></div>
      </div>
    </section>
  )
}
