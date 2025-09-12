import React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full rounded-md border px-3 py-2 text-sm ${className}`.trim()}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
