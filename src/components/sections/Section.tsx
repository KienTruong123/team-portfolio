import { cn } from "@/libs";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({ className, ...props }, ref) => (
  <section ref={ref} className={cn("px-2 md:px-4 lg:px-8 xl:px-12", className)} {...props} />
));

Section.displayName = "Section";
