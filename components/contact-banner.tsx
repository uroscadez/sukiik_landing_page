import { Phone } from "lucide-react"

export function ContactBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Phone className="h-4 w-4" />
        <span className="text-sm font-medium">CALL/WHATSAPP +386 41 229017</span>
      </div>
    </div>
  )
}
