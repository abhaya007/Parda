import MovieCard from './MovieCard';
import FeaturedMovie from './FeaturedMovie';

async function getMovies() {
  const res = await fetch('http://localhost:9000/movies', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }
  return res.json();
}

export default async function MovieList() {
  const movies = await getMovies();

  // Group movies by status
  const groupedMovies = movies.reduce((acc, movie) => {
    acc[movie.status] = acc[movie.status] || [];
    acc[movie.status].push(movie);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8">
      <FeaturedMovie movie={movies[0]} />

      {Object.entries(groupedMovies).map(([status, movies]) => (
        <div key={status} className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 capitalize">
            {status.replace('_', ' ')}
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
