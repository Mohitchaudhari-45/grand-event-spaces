import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Elegant table setting", span: "md:col-span-1 md:row-span-1" },
  { src: gallery2, alt: "Crystal chandelier", span: "md:col-span-1 md:row-span-2" },
  { src: gallery3, alt: "Wedding reception", span: "md:col-span-1 md:row-span-1" },
  { src: gallery4, alt: "Outdoor ceremony", span: "md:col-span-1 md:row-span-1" },
];

const GalleryPreview = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <SectionHeading
          subtitle="Our Gallery"
          title="Moments of Elegance"
        >
          <p>
            Explore our stunning venue through images of past celebrations and beautifully curated events.
          </p>
        </SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
