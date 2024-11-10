import { ChangeEvent, FormEvent, useState } from "react";
import { AddInputsList, productsList } from "../../data";
import ProductCard from "../ProductCard";
import Button from "../ui/Button";
import ModalDialog from "../ui/ModalDialog";
import Input from "../ui/Input";
import { productValidition } from "../validition";
import Error from "../Error";

const Products = () => {

    //________________ STATE_______________
    const defaultProduct = {
        title: '',
        desc: '',
        url: '',
        price: ''
    };
    const [isOpen, setIsOpen] = useState(false);
    const [product, setProduct] = useState(defaultProduct);

    const [error, setError] = useState({
        title: '',
        desc: '',
        url: '',
        price: ''
    });


    //_______HANDELERS_______
    const open = () => { setIsOpen(true) };
    
    const close = () => { setIsOpen(false) };
    
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setProduct({
            ...product,
            [name]: value
        });
        setError({
            ...error,
            [name]: ''
        });
    };
    
    const cancelHandler = () => {
        setProduct(defaultProduct);
        close();
    }
    
    const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {title,desc,price,url}=product;
        const error = productValidition({
            title,
            desc,
            price,
            url
        });
        console.log(error);
        const hasErrorMsg = Object.values(error).some(value => value === '') && Object.values(error).every(value => value === '');
        console.log(hasErrorMsg);
        if (!hasErrorMsg) {
            setError(error);
            return;
        } else {
            console.log('submit');
        }
    }

    //______________renders _______________
    const renderProductList = productsList.map(product => <ProductCard key={product.id} product={product} />);

    const renderAddInputsList = AddInputsList.map((input) => {
        return<div key={input.id} className="flex-col flex">
            <label htmlFor={input.id}>{input.label}</label>
            <Input type={input.type} name={input.name} id={input.id} value={product[input.name]} onChange={onChangeHandler} />
            <Error msg={error[input.name]} />
        </div>
    })



    return (<>
        <section>
            <div className={`${isOpen&&'bg-black opacity-50 z-10 fixed top-0 right-0 bottom-0 left-0'}`}></div>
            <div className="product-container container">
                <h2 className='text-5xl text-orange-500 font-bold text-center py-5 text-stroke'>Burger Sandwiches</h2>
                <div className="text-center">
                    <Button onClick={()=>{open()}} className="bg-indigo-500 px-3 py-1 rounded-lg" width="w-fit">ADD</Button>
                </div>
                <ModalDialog close={close} isOpen={isOpen} title="ADD A NEW PRODUCT">
                    <form onSubmit={onSubmitHandler} className="form-inputs flex flex-col space-y-3">
                        {renderAddInputsList}
                        <div className="flex space-x-3">
                            <Button width="w-full" className="bg-indigo-400 py-1  hover:bg-indigo-500 rounded-lg">Submite</Button>
                            <Button onClick={cancelHandler} width="w-full" className="bg-gray-400 py-1 hover:bg-gray-500 rounded-lg">Cancel</Button>
                        </div>
                    </form>
                </ModalDialog>
                <div className="products grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 py-5 m-auto">
                    {renderProductList}
                </div>
            </div>
        </section>
    </>)
}
export default Products;