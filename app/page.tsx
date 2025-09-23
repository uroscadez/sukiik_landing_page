import { YachtHero } from "@/components/yacht-hero"
import { YachtSpecs } from "@/components/yacht-specs"
import { YachtGallery } from "@/components/yacht-gallery"
import { YachtDescription } from "@/components/yacht-description"
import { YachtHeader } from "@/components/yacht-header"

export default function YachtCharterPage() {
  return (
    <div className="min-h-screen bg-background">
      <YachtHeader />
      <YachtHero />
      <YachtSpecs />
      <YachtGallery />
      <YachtDescription />
    </div>
  )
}
