import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ${className}`.trim()}
      {...props}
    />
  )
);
Input.displayName = "Input";
