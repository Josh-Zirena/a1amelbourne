type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
};

export async function generateGalleryData(): Promise<GalleryImage[]> {
  return [
    {
      id: 'img-1',
      src: '/images/gallery/a1a_melbourne_wrestling.jpg',
      alt: 'A1A Melbourne Wrestling',
      category: 'events'
    },
    {
      id: 'img-2',
      src: '/images/gallery/a1a_winner4.jpg',
      alt: 'A1A Winner 4',
      category: 'events'
    },
    {
      id: 'img-3',
      src: '/images/gallery/a1a_winner3.jpg',
      alt: 'A1A Winner 3',
      category: 'events'
    },
    {
      id: 'img-4',
      src: '/images/gallery/a1a_winner2.jpg',
      alt: 'A1A Winner 2',
      category: 'events'
    },
    {
      id: 'img-5',
      src: '/images/gallery/a1a_boys.jpg',
      alt: 'A1A Boys',
      category: 'activities'
    },
    {
      id: 'img-6',
      src: '/images/gallery/a1a_winner.jpg',
      alt: 'A1A Winner',
      category: 'events'
    },
    {
      id: 'img-7',
      src: '/images/gallery/a1a_girls.jpg',
      alt: 'A1A Girls',
      category: 'activities'
    },
    {
      id: 'img-8',
      src: '/images/gallery/samhazewinkel_camp.jpg',
      alt: 'Sam Hazewinkel Camp',
      category: 'events'
    }
  ];
} 