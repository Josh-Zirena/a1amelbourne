"use server";

import fs from 'fs';
import path from 'path';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export async function generateGalleryData(): Promise<GalleryImage[]> {
  // Use the public directory path directly
  const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
  
  // Check if directory exists
  if (!fs.existsSync(galleryDir)) {
    console.warn('Gallery directory does not exist:', galleryDir);
    return [];
  }

  // Read all files in the directory
  const files = fs.readdirSync(galleryDir);
  
  // Filter for image files and generate gallery data
  const galleryImages = files
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    })
    .map((file, index) => {
      // Generate a human-readable alt text from the filename
      const filename = path.parse(file).name;
      const altText = filename
        .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
        .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word

      // Determine category from filename or directory structure
      // You can customize this logic based on your needs
      let category = 'events'; // default category
      if (filename.toLowerCase().includes('activity')) {
        category = 'activities';
      } else if (filename.toLowerCase().includes('social')) {
        category = 'social';
      }

      return {
        id: `img-${index + 1}`,
        // Ensure the path starts with a forward slash
        src: `/images/gallery/${file}`,
        alt: altText,
        category
      };
    });

  return galleryImages;
} 