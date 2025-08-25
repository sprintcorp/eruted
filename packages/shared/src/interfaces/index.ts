// Base entity interface
export interface BaseEntity {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

// User interface
export interface User extends BaseEntity {
  email: string;
  name: string;
  role: 'admin' | 'user';
  isActive: boolean;
}

// Gallery interface
export interface Gallery extends BaseEntity {
  name: string;
  description: string;
  category: string;
  images: Image[];
  featured: boolean;
  slug: string;
}

// Image interface
export interface Image extends BaseEntity {
  title: string;
  description: string;
  url: string;
  cloudinaryId: string;
  category: string;
  galleryId: string;
  featured: boolean;
  alt: string;
  width: number;
  height: number;
  format: string;
  size: number;
}

// Booking interface
export interface Booking extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  date: Date;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  type: 'wedding' | 'portrait' | 'event' | 'other';
  location?: string;
  duration?: number;
}

// Contact message interface
export interface ContactMessage extends BaseEntity {
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  adminReply?: string;
  repliedAt?: Date;
}

// Newsletter subscriber interface
export interface NewsletterSubscriber extends BaseEntity {
  email: string;
  isActive: boolean;
  subscribedAt: Date;
  unsubscribedAt?: Date;
}

// Email template interface
export interface EmailTemplate extends BaseEntity {
  name: string;
  description: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  variables: string[];
  isActive: boolean;
}

// Campaign interface
export interface Campaign extends BaseEntity {
  name: string;
  description: string;
  emails: string[];
  status: 'active' | 'inactive';
  tags: string[];
}

// Site settings interface
export interface SiteSettings extends BaseEntity {
  siteName: string;
  siteDescription: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  seoSettings: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
    ogImage: string;
  };
}

// API response interfaces
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Pagination interface
export interface PaginationDto {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// File upload interface
export interface FileUpload {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

// Cloudinary upload result interface
export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  url: string;
  width: number;
  height: number;
  format: string;
  size: number;
  resource_type: string;
}
