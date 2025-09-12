import React from "react";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
};

export const Badge: React.FC<BadgeProps> = ({ className = "", variant = "default", ...props }) => {
  const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold";
  const variants: Record<string, string> = {
    default: "bg-muted text-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "text-foreground",
  };
  return <span className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />;
};
