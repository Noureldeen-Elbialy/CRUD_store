interface IProps{
    product:IProductsList
}
import { IProductsList } from '../../interfaces';
import ProductImage from '../ProductImage';
import Button from "../ui/Button";
import './index.scss'
const ProductCard = ({ product }: IProps) => {
    const { title,desc,price,url,category} = product;
    return (<>
        <div className="productCard m-auto max-w-80 md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl cursor-pointer flex flex-col justify-between hover:-translate-y-2 transition-all duration-1000 ease-in-out h-full">
            <div className="image -translate-x-16 translate-y-16 md:-translate-x-10 xl:-translate-x-14">
                <ProductImage imagePath={url} alternate={title} styles='w-3/5 m-auto'/>
            </div>
            <div className="content bg-gray-100 h-full shadow-sm p-2 rounded-md flex flex-col justify-between">
                <div className="title">
                    <h2 className="font-extrabold mb-5 mt-10 text-md">{ title.toUpperCase()}</h2>
                    <p className="my-3 text-zinc-400 p-product text-sm font-semibold">{desc.split(' ').slice(0,10).join(' ').toUpperCase()}. . .</p>
                </div>
                <div className="colors flex space-x-1 my-3">
                    <div className="w-5 cursor-pointer h-5 rounded-full bg-red-400"></div>
                    <div className="w-5 cursor-pointer h-5 rounded-full bg-orange-400"></div>
                    <div className="w-5 cursor-pointer h-5 rounded-full bg-yellow-400"></div>
                    <div className="w-5 cursor-pointer h-5 rounded-full bg-indigo-400"></div>
                </div>
                <p>{category.name}</p>
                <div className='flex items-center justify-between my-2'>
                    <p className='font-semibold'>{`EGP ${price}`}</p>
                </div>
                <div className="btns flex gap-2">
                    <Button className='bg-slate-900' width='w-full'>edit</Button>
                    <Button className='bg-red-900' width='w-full'>delete</Button>
                </div>
            </div>
        </div>
    </>)
};
export default ProductCard;