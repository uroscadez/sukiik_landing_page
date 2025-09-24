import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function YachtSpecs() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 tracking-wider mb-2">AVAILABLE FOR CHARTER</div>
          <h2 className="text-4xl font-light tracking-wider text-gray-900">SUUK IIK II</h2>
          <div className="text-gray-600 mt-2">MONACO</div>
        </div>

        <Card className="p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
            <div>
              <div className="text-sm text-gray-500 mb-1">DESCRIPTION</div>
              <div className="font-medium">Sailing Yacht</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">BUILT/REFIT</div>
              <div className="font-medium">2024/2024</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">LOCATION & AVAILABILITY</div>
              <div className="font-medium">Mediterranean</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">PRICE FROM</div>
              <div className="font-medium">€50,000</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">LENGTH</div>
              <div className="font-medium">22m</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">GUESTS</div>
              <div className="font-medium">6</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mt-8 pt-8 border-t">
            <div>
              <div className="text-sm text-gray-500 mb-1">LOA (M/FT)</div>
              <div className="font-medium">22m</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">BEAM (M/FT)</div>
              <div className="font-medium">6.6m</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">CABINS</div>
              <div className="font-medium">3</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">CREW</div>
              <div className="font-medium">3</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">FROM € PER WEEK</div>
              <div className="font-medium">€50,000 EUR</div>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3">GET IN TOUCH</Button>
        </div>
      </div>
    </section>
  )
}
