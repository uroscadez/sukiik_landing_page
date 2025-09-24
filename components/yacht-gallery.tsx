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
            <div className="bg-gray-200 relative group">
              <img
                src="/gallery-1.jpg"
                alt="Aerial view of luxury sailing yacht"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          </Card>

          {/* Side images */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="bg-gray-200 relative group">
                <img
                  src="/gallery-2.jpg"
                  alt="Luxury yacht interior cabin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-gray-200 relative group">
                <img
                  src="/gallery-3.jpg"
                  alt="Sailing yacht with crew on deck"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
            </Card>
          </div>

          {/* Bottom row */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-200 relative group cursor-pointer">
              <img
                src="/yacht-gallery-2.jpg"
                alt="Luxury yacht anchored in turquoise waters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-200 relative group cursor-pointer">
              <img
                src="/yacht-gallery-3.jpg"
                alt="SUSI sailing yacht under sail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-gray-200 relative group cursor-pointer">
              <img
                src="/yacht-gallery-7.jpg"
                alt="Large sailing yacht with crew"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
