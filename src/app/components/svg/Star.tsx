import { forwardRef, SVGProps } from "react";

export const Star = forwardRef<SVGPathElement, SVGProps<SVGPathElement>>((props, ref) => {
  return (
    <path
      {...props}
      ref={ref}
      id="star"
      d="M409.6,198.066l26.833,54.369l60,8.719l-43.417,42.321l10.249,59.758L409.6,335.019
      l-53.666,28.214l10.249-59.758l-43.417-42.321l60-8.719L409.6,198.066z"
    />
  );
});

Star.displayName = "StarSVG";
