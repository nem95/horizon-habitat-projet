'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageSlideshowProps {
  images: Array<{
    src: string
    alt: string
  }>
  interval?: number // milliseconds between slides
  autoPlay?: boolean
  className?: string
}

export function ImageSlideshow({
  images,
  interval = 5000,
  autoPlay = true,
  className = '',
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const timer = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, images.length, interval])

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  if (images.length === 0) {
    return (
      <div className={`bg-surface flex items-center justify-center ${className}`}>
        <p className="text-ivory/60">Aucune image disponible</p>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-charcoal ${className}`}>
      {/* Slides */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-charcoal/60 hover:bg-charcoal/80 text-ivory transition-colors"
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-charcoal/60 hover:bg-charcoal/80 text-ivory transition-colors"
            aria-label="Image suivante"
          >
            ›
          </button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-6 bg-gold'
                  : 'w-2 bg-gold/40 hover:bg-gold/60'
              }`}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
