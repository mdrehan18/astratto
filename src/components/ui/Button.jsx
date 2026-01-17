import React from "react";

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  as = "button",
  children,
  withArrow = false,
  size = "md",
  className = "",
  type = "button",
  ...props
}) => {
  const Component = as;

  return (
    <Component
      type={Component === "button" ? type : undefined}
      {...props}
      className={`
        group
        inline-flex items-center gap-2
        rounded-full border border-black
        font-medium
        cursor-pointer
        transition-all duration-300
        hover:bg-black hover:text-white
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
      {withArrow && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Component>
  );
};

export default Button;
