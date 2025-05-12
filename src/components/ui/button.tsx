import React from "react";

interface ButtonProps {
  variant?: "default" | "bordered";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  class?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  rounded = "none",
  class: className,
  children,
  ...props
}) => {
  const baseClass = "px-12 py-2.5 font-bold cursor-pointer transition-colors duration-300";
  const variantClass =
    variant === "bordered"
      ? "text-foreground border-2 border-primary hover:bg-primary hover:text-black"
      : "text-black bg-primary hover:bg-primary/80";
  const radiusClass = rounded === "none" ? "" : `rounded-${rounded}`;

  return (
    <button
      className={`${className} ${baseClass} ${variantClass} ${radiusClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
