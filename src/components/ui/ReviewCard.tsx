import type { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      className={`w-4 h-4 ${i < review.rating ? 'text-gold fill-gold' : 'text-gold/30'}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 15L3.82 19.02L5.97 12.52L0 8.49L7.19 8.02L10 1L12.81 8.02L20 8.49L14.03 12.52L16.18 19.02L10 15Z" />
    </svg>
  ))

  const formattedDate = new Date(review.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-w-[320px] snap-center bg-charcoal border-l-4 border-gold p-6 flex flex-col gap-4 rounded-sm">
      {/* Header with avatar and rating */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
            <span className="text-charcoal font-display font-semibold text-sm">
              {review.avatarInitials}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-sans font-semibold text-ivory text-sm">
              {review.author}
            </p>
            <p className="text-ivory/60 text-xs">{formattedDate}</p>
          </div>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1">{stars}</div>

      {/* Review text */}
      <p className="font-sans text-ivory/90 leading-relaxed italic text-sm">
        "{review.text}"
      </p>
    </div>
  )
}
