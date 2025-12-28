import { TMDB_API_CONFIG } from '@/constants/tmdb';

export class TMDbError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string
  ) {
    super(message);
    this.name = 'TMDbError';
  }
}

export async function tmdbFetch<T>(
  endpoint: string,
  options?: RequestInit & {
    params?: Record<string, string | number>;
    revalidate?: number | false;
  }
): Promise<T> {
  const { params, ...fetchOptions } = options || {};

  const url = new URL(`${TMDB_API_CONFIG.BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', TMDB_API_CONFIG.API_KEY!);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
  }

  const response = await fetch(url.toString(), {
    ...fetchOptions,
    ...(options?.revalidate !== undefined && {
      next: { revalidate: options?.revalidate },
    }),
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    throw new TMDbError(
      `TMDb API Error: ${response.statusText}`,
      response.status,
      response.statusText
    );
  }

  return response.json();
}
