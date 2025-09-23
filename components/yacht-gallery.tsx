import { Card } from "@/components/ui/card"

export function YachtGallery() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 tracking-wider mb-2">SUUK IIK II</div>
          <h2 className="text-3xl font-light tracking-wider text-gray-900">IMAGE GALLERY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main large image */}
          <Card className="md:col-span-2 overflow-hidden">
            <div className="aspect-video bg-gray-200 relative group cursor-pointer">
              <img src="/luxury-yacht-exterior-deck-view.jpg" alt="Yacht exterior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>

          {/* Side images */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative group cursor-pointer">
                <img src="/luxury-yacht-interior-salon.jpg" alt="Yacht interior" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-200 relative group cursor-pointer">
                <img src="/luxury-yacht-dining-area.jpg" alt="Yacht dining" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom row */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-200 relative group cursor-pointer">
              <img src="/luxury-yacht-master-bedroom.jpg" alt="Master bedroom" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-200 relative group cursor-pointer">
              <img src="/luxury-yacht-sun-deck.jpg" alt="Sun deck" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-200 relative group cursor-pointer">
              <img src="/luxury-yacht-water-toys.jpg" alt="Water toys" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
