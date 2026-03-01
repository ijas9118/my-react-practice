import type { SimpleIcon } from "simple-icons";

interface BrandIconProps {
  icon: SimpleIcon;
  size?: number;
  className?: string;
}

/**
 * A reusable component to render brand icons from the simple-icons package.
 * Brand icons in lucide-react are deprecated, so this is the recommended way to use them.
 */
export function BrandIcon({ icon, size = 24, className }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}

export default BrandIcon;
