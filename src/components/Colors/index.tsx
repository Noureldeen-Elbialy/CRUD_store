import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement>{
    color:string
}
const Colors = ({color,...rest}:IProps) => {
    return (<>
        <span className="block w-5 h-5 rounded-full cursor-pointer m-1" style={{backgroundColor:color}} {...rest}></span>
    </>)
};
export default Colors;