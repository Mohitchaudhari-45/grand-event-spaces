import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
