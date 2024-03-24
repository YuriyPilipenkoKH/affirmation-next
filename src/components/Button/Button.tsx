import { SBtn } from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
  }

  const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <SBtn type='button' {...props}> {children}</SBtn>;
};


export default Button;