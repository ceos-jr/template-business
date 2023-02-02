import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;  
  type?: string;
}

const Button = ({ children, type } : ButtonProps) => {
  return (
    <button 
      className={type === "outline" ? "btn-outline" : "btn-primary"}
    >
      {children}
    </button>
  );
}

export default Button;