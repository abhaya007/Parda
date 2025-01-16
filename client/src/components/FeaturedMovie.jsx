import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

export default function FeaturedMovie({
  movie
}) {
  return (
    (<div className="relative h-[70vh] rounded-xl overflow-hidden">
      {/* <Image
        src={movie.posterUrl}
        alt={movie.title}
        fill
        className="object-cover"
        priority /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
        <p className="text-xl mb-4 max-w-2xl">{movie.description}</p>
        <div className="flex items-center space-x-4 mb-6">
          <Badge variant="secondary">{movie.ageRestriction}</Badge>
          <span>{movie.duration} min</span>
          <span>{movie.genre.join(', ')}</span>
        </div>
        <Button size="lg" className="bg-red-600 hover:bg-red-700">
          Book Now
        </Button>
      </div>
    </div>)
  );
}

