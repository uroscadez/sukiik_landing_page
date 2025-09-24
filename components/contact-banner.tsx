import { Phone } from "lucide-react"

export function ContactBanner() {
  const whatsappNumber = "38641229017" // Remove + and spaces for WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Phone className="h-4 w-4" />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-white/10 transition-colors duration-200 py-1 px-2 rounded"
        >
          <span className="text-sm font-medium">CALL/WHATSAPP +386 41 229017</span>
        </a>
      </div>
    </div>
  )
}
