import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import StorytellingSection from "@/components/StorytellingSection";
import GalleryPreview from "@/components/GalleryPreview";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ExperienceSection />
      <StorytellingSection />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
