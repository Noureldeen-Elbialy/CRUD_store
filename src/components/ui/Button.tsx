import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    className?: string;
    width: 'w-full' | 'w-fit';
}
const Button = ({children,className,width,...rest}:IProps) => {
    return (<>
        <button className={`text-white rounded-sm ${width} ${className}`} {...rest}>{children}</button>
    </>);
}
export default Button;