"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
}

interface ProductCarouselProps {
  products: Product[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function ProductCarousel({ products, autoPlay = false, autoPlayInterval = 4000 }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || products.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, products.length, currentIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (products.length === 0) {
    return <div className="text-center py-8">No products to display</div>
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Main product display */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 flex">
              {/* Product Image */}
              <div className="w-1/2 bg-gray-100">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{product.price}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors w-fit">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {products.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {products.length > 1 && (
        <div className="flex justify-center space-x-2 py-4 bg-gray-50">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                currentIndex === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400",
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
