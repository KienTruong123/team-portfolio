import { cn } from "@/libs";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({ className, ...props }, ref) => (
  <section ref={ref} className={cn("p-2 md:p-5 lg:p-10", className)} {...props} />
));

Section.displayName = "Section";
