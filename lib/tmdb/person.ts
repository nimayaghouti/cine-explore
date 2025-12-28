import { tmdbFetch } from './client';

import type { Movie } from '@/types/movie';
import type { Person } from '@/types/person';

export async function getPersonDetails(id: number): Promise<Person> {
  return tmdbFetch<Person>(`/person/${id}`, {
    revalidate: 86400, // 24 hours
  });
}

export async function getPersonMovieCredits(id: number): Promise<{
  cast: Movie[];
  crew: Movie[];
}> {
  return tmdbFetch<{ cast: Movie[]; crew: Movie[] }>(
    `/person/${id}/movie_credits`,
    {
      revalidate: 86400,
    }
  );
}
