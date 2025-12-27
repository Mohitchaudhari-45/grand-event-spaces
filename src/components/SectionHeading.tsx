import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  light = false,
  children,
}: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
      {subtitle && (
        <span className={cn(
          "text-accent font-medium text-sm tracking-widest uppercase mb-3 block",
          light && "text-accent"
        )}>
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
        light ? "text-primary-foreground" : "text-foreground"
      )}>
        {title}
      </h2>
      {children && (
        <div className={cn(
          "mt-4 max-w-2xl",
          centered && "mx-auto",
          light ? "text-primary-foreground/80" : "text-muted-foreground"
        )}>
          {children}
        </div>
      )}
      {centered && (
        <div className="flex justify-center mt-6">
          <div className="w-16 h-0.5 bg-accent" />
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
