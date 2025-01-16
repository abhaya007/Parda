'use client';
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MovieCard({
  movie
}) {
  return (
    (<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden bg-gray-800 text-white">
        <div className="relative h-[400px]">
          {/* <Image src={movie.posterUrl} alt={movie.title} fill className="object-cover" /> */}
          {movie.isPremium && (
            <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">
              Premium
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="outline">{movie.ageRestriction}</Badge>
            <span>{movie.duration} min</span>
          </div>
          <p className="text-sm text-gray-300 mb-2">{movie.genre.join(', ')}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{movie.rating.toFixed(1)}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-red-600 hover:bg-red-700">Book Now</Button>
        </CardFooter>
      </Card>
    </motion.div>)
  );
}

