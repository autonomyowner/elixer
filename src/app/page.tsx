import { HeroSection } from '@/components/HeroSection'
import { QualityCommitment } from '@/components/QualityCommitment'
import { ProductFocus } from '@/components/ProductFocus'
import { ServicesPreview } from '@/components/ServicesPreview'
import { TestimonialsSection } from '@/components/TestimonialsSection'

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100">
      <HeroSection />
      <QualityCommitment />
      <ProductFocus />
      <ServicesPreview />
      <TestimonialsSection />
    </div>
  )
} 