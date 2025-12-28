import { tmdbFetch } from './client';

import type { PaginatedResponse } from '@/types/api';
import type { GenreResponse } from '@/types/genre';
import type { Movie } from '@/types/movie';

export async function getMovieGenres(): Promise<GenreResponse> {
  return tmdbFetch<GenreResponse>('/genre/movie/list', {
    revalidate: 604800, // 7 days (genres rarely change)
  });
}

export async function getMoviesByGenre(
  genreId: number,
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>('/discover/movie', {
    params: {
      with_genres: genreId,
      page,
    },
    revalidate: 43200, // 12 hours
  });
}
