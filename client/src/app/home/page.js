
import MovieList from '@/components/MovieList'
import { Suspense } from 'react'
import MovieListSkeleton from '@/components/MovieListSkeleton'

export default function Home() {
  return (
    (<main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Suspense fallback={<MovieListSkeleton />}>
        <MovieList />
      </Suspense>
    </main>)
  );
}

