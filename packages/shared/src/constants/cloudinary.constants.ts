export const CLOUDINARY_CONSTANTS = {
  TRANSFORMATIONS: {
    THUMBNAIL: {
      width: 300,
      height: 300,
      crop: 'fill',
      quality: 'auto',
    },
    MEDIUM: {
      width: 800,
      height: 600,
      crop: 'fill',
      quality: 'auto',
    },
    LARGE: {
      width: 1200,
      height: 800,
      crop: 'fill',
      quality: 'auto',
    },
    HERO: {
      width: 1920,
      height: 1080,
      crop: 'fill',
      quality: 'auto',
    },
  },
  FOLDERS: {
    GALLERIES: 'eruted/galleries',
    PROFILES: 'eruted/profiles',
    TEMPLATES: 'eruted/templates',
  },
} as const;
