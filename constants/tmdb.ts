export const TMDB_API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
  IMAGE_BASE_URL: process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE,
  API_KEY: process.env.TMDB_API_KEY,
} as const;

export const TMDB_IMAGE_SIZES = {
  backdrop: {
    small: 'w780',
    large: 'w1280',
    original: 'original',
  },
  poster: {
    small: 'w185',
    medium: 'w342',
    large: 'w500',
    original: 'original',
  },
  profile: {
    small: 'w45',
    medium: 'w185',
    large: 'h632',
    original: 'original',
  },
  logo: {
    small: 'w92',
    medium: 'w185',
    large: 'w500',
    original: 'original',
  },
} as const;

export const getImageUrl = (
  path: string | null,
  type: keyof typeof TMDB_IMAGE_SIZES,
  size: string = 'medium'
) => {
  if (!path) return null;
  const sizeValue =
    TMDB_IMAGE_SIZES[type][
      size as keyof (typeof TMDB_IMAGE_SIZES)[typeof type]
    ];
  return `${TMDB_API_CONFIG.IMAGE_BASE_URL}/${sizeValue}${path}`;
};
