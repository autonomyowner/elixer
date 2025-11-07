import { notFound } from 'next/navigation'
import { getProductById } from '@/data/products'
import { ProductGallery } from '@/components/ProductGallery'
import { ProductDetails } from '@/components/ProductDetails'

type ProductPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps): Promise<JSX.Element> {
  const resolvedParams = await params
  const product = getProductById(resolvedParams.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Gallery */}
          <div>
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column - Product Details */}
          <div>
            <ProductDetails product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

