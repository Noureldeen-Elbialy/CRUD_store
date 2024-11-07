import { InputHTMLAttributes} from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement>{}
const Input = ({...rest}:IProps) => {
    return (<>
        <input {...rest} className="border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-indigo-500 focus:ring-1"/>
    </>)
};
export default Input;