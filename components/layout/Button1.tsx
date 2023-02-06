import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: string;
  className?: string;
}

const Button = ({ children, type, className }: ButtonProps) => {
  return (
    <button
      className={`${
        type === "outline" ? "btn-outline" : "btn-primary"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
