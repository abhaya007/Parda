import { Skeleton } from '@/components/ui/skeleton'

export default function MovieListSkeleton() {
  return (
    (<div className="container mx-auto px-4 py-8">
      <Skeleton className="w-full h-[70vh] rounded-xl mb-12" />
      <Skeleton className="w-48 h-8 mb-6" />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="w-full h-[400px] rounded-xl" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-2/3 h-4" />
          </div>
        ))}
      </div>
    </div>)
  );
}

