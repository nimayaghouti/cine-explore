import { tmdbFetch } from './client';

import type { PaginatedResponse } from '@/types/api';
import type { Movie } from '@/types/movie';
import type { Person } from '@/types/person';

export async function searchMovies(
  query: string,
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>('/search/movie', {
    params: { query, page },
    revalidate: 3600, // 1 hour
  });
}

export async function searchPeople(
  query: string,
  page: number = 1
): Promise<PaginatedResponse<Person>> {
  return tmdbFetch<PaginatedResponse<Person>>('/search/person', {
    params: { query, page },
    revalidate: 3600,
  });
}

export async function multiSearch(
  query: string,
  page: number = 1
): Promise<PaginatedResponse<Movie | Person>> {
  return tmdbFetch<PaginatedResponse<Movie | Person>>('/search/multi', {
    params: { query, page },
    revalidate: 3600,
  });
}
