"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/shadcn/dialog";
import { generateGalleryData } from "@/lib/gallery-utils";
import useEmblaCarousel from "embla-carousel-react";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 3,
  });
  const [dialogEmblaRef, dialogEmblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const dialogScrollPrev = useCallback(() => {
    if (dialogEmblaApi) dialogEmblaApi.scrollPrev();
  }, [dialogEmblaApi]);

  const dialogScrollNext = useCallback(() => {
    if (dialogEmblaApi) dialogEmblaApi.scrollNext();
  }, [dialogEmblaApi]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const data = await generateGalleryData();
        setGalleryImages(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  useEffect(() => {
    if (dialogEmblaApi && selectedImage) {
      const selectedIndex = galleryImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      if (selectedIndex !== -1) {
        dialogEmblaApi.scrollTo(selectedIndex);
      }
    }
  }, [selectedImage, dialogEmblaApi, galleryImages]);

  const handleImageError = (imageId: string) => {
    console.error(`Error loading image with ID: ${imageId}`);
    setImageErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading gallery...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-emerald-50 transition-all duration-700 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-4"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0"
                >
                  <div
                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative w-full h-[300px]">
                      {!imageErrors[image.id] ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={() => handleImageError(image.id)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                          <p className="text-gray-500">Failed to load image</p>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-emerald-900 p-2 rounded-full shadow-md transition-colors"
            onClick={scrollPrev}
            aria-label="Previous images"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-emerald-900 p-2 rounded-full shadow-md transition-colors"
            onClick={scrollNext}
            aria-label="Next images"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Lightbox */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          {/* Note: The ![90vw] is what is overwriting the default width */}
          <DialogContent className="!w-[90vw] !max-w-screen-xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {selectedImage && (
              <>
                <DialogTitle className="sr-only">
                  {selectedImage.alt} - Full Size View
                </DialogTitle>
                <div className="relative w-full h-[90vh]">
                  <div className="overflow-hidden" ref={dialogEmblaRef}>
                    <div className="flex">
                      {galleryImages.map((image) => (
                        <div key={image.id} className="flex-[0_0_100%] min-w-0">
                          <div className="relative w-full h-[90vh]">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              sizes="65vw"
                              className="object-contain"
                              onError={() => handleImageError(image.id)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Dialog Navigation Buttons */}
                  <button
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 p-2 rounded-full shadow-md transition-colors"
                    onClick={dialogScrollPrev}
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-emerald-900 p-2 rounded-full shadow-md transition-colors"
                    onClick={dialogScrollNext}
                    aria-label="Next image"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
