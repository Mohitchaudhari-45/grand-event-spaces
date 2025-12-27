import { useState } from "react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImage from "@/assets/hero-banquet.jpg";

const galleryImages = [
  { src: heroImage, category: "weddings", alt: "Grand Wedding Hall" },
  { src: gallery1, category: "stage", alt: "Decorated Stage" },
  { src: gallery2, category: "decor", alt: "Crystal Chandelier" },
  { src: gallery3, category: "dining", alt: "Dining Setup" },
  { src: gallery4, category: "hall", alt: "Hall Interior" },
  { src: gallery1, category: "decor", alt: "Floral Arrangements" },
  { src: gallery2, category: "weddings", alt: "Wedding Reception" },
  { src: gallery3, category: "stage", alt: "Stage Lighting" },
  { src: gallery4, category: "dining", alt: "Table Settings" },
  { src: heroImage, category: "hall", alt: "Main Ballroom" },
];

const categories = ["all", "weddings", "stage", "dining", "decor", "hall"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <PageHeader
        title="Our Gallery"
        subtitle="Explore the elegance and beauty of Royal Palace"
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 capitalize border",
                  activeCategory === category
                    ? "bg-gradient-gold text-charcoal border-accent shadow-gold"
                    : "bg-transparent text-muted-foreground border-border hover:border-accent hover:text-accent"
                )}
              >
                {category === "hall" ? "Hall Interior" : category}
              </button>
            ))}
          </div>

          {/* Masonry Gallery Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <span className="text-ivory font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-ivory hover:text-accent transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
