import { tmdbFetch } from './client';

import type { PaginatedResponse } from '@/types/api';
import type { Movie, MovieDetails, VideosResponse } from '@/types/movie';
import type { Credits } from '@/types/person';

export async function getMovieDetails(
  id: number,
  language: string = 'en-US'
): Promise<MovieDetails> {
  return tmdbFetch<MovieDetails>(`/movie/${id}`, {
    params: { language },
    revalidate: 86400, // 24 hours
  });
}

export async function getMovieCredits(id: number): Promise<Credits> {
  return tmdbFetch<Credits>(`/movie/${id}/credits`, {
    revalidate: 86400,
  });
}

export async function getMovieVideos(id: number): Promise<VideosResponse> {
  return tmdbFetch<VideosResponse>(`/movie/${id}/videos`, {
    revalidate: 86400,
  });
}

export async function getSimilarMovies(
  id: number,
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>(`/movie/${id}/similar`, {
    params: { page },
    revalidate: 43200, // 12 hours
  });
}

export async function getTrendingMovies(
  timeWindow: 'day' | 'week' = 'day',
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>(`/trending/movie/${timeWindow}`, {
    params: { page },
    revalidate: 300, // 5 minutes
  });
}

export async function getPopularMovies(
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>('/movie/popular', {
    params: { page },
    revalidate: 3600, // 1 hour
  });
}

export async function getTopRatedMovies(
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>('/movie/top_rated', {
    params: { page },
    revalidate: 43200, // 12 hours
  });
}

export async function getNowPlayingMovies(
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>('/movie/now_playing', {
    params: { page },
    revalidate: 43200, // 12 hours
  });
}

export async function getUpcomingMovies(
  page: number = 1
): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>('/movie/upcoming', {
    params: { page },
    revalidate: 43200, // 12 hours
  });
}

export async function discoverMovies(params: {
  page?: number;
  with_genres?: string;
  sort_by?: string;
  'vote_average.gte'?: number;
  'vote_average.lte'?: number;
  year?: number;
  with_runtime_gte?: number;
  with_runtime_lte?: number;
}): Promise<PaginatedResponse<Movie>> {
  return tmdbFetch<PaginatedResponse<Movie>>('/discover/movie', {
    params: params as Record<string, string | number>,
    revalidate: 3600, // 1 hour
  });
}
