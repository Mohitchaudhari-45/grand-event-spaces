import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section
      className={cn(
        "relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary overflow-hidden",
        backgroundImage && "bg-cover bg-center"
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-primary/80" />
      )}
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-accent/10 rounded-full hidden md:block" />
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-accent/10 rounded-full hidden md:block" />

      <div className="container-custom relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex justify-center mt-6">
          <div className="w-20 h-0.5 bg-accent" />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
