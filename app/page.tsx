import ProductCarousel from "@/components/product-carousel"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299.99",
      image: "https://pimwp.s3-accelerate.amazonaws.com/2025/02/jjBsZCZm-Untitled-design-18.png",
      description:
        "Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort design.",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$199.99",
      image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/1740027167EDGizQNCSq73IF4nQG95UMwUzQ.webp",
      description:
        "Track your fitness goals with our advanced smartwatch. Monitor heart rate, sleep patterns, and stay connected with smart notifications.",
    },
    {
      id: 3,
      name: "Professional Camera Lens",
      price: "$599.99",
      image: "https://www.vedam.org/_next/image?url=%2Fimg%2Fhear_from_founder_thumbnail.jpeg&w=3840&q=75",
      description:
        "Capture stunning photos with our professional-grade camera lens. Perfect for portraits, landscapes, and professional photography.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Products</h1>

        <ProductCarousel products={products} autoPlay={true} autoPlayInterval={5000} />

        <div className="text-center mt-8">
          <p className="text-gray-600">carousel testing</p>
        </div>
      </div>
    </main>
  )
}
