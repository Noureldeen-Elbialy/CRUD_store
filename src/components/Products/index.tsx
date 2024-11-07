import { useState } from "react";
import { AddInputsList, productsList } from "../../data";
import ProductCard from "../ProductCard";
import Button from "../ui/Button";
import ModalDialog from "../ui/ModalDialog";
import Input from "../ui/Input";

const Products = () => {
    //________________ STATE_______________
    const [isOpen, setIsOpen] = useState(false)
    //_______HANDELERS_______
    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }
    //______________renders _______________
    const renderProductList = productsList.map(product => <ProductCard key={product.id} product={product} />)

    const renderAddInputsList = AddInputsList.map((input) => {
        return <>
            <div className="flex-col flex">
                <label htmlFor={input.id}>{input.label}</label>
                <Input />
            </div>
        </>
    })
    return (<>
        <section>
        <div className={`${isOpen&&'bg-black opacity-35 z-10 fixed top-0 right-0 bottom-0 left-0'}`}></div>
        <div className="product-container container">
                <h2 className='text-5xl text-orange-500 font-bold text-center py-5 text-stroke'>Burger Sandwiches</h2>
                <div className="text-center">

                <Button onClick={()=>{open()}} className="bg-indigo-500 px-3 py-1 rounded-lg" width="w-fit">ADD</Button>
                </div>
                <ModalDialog close={close} isOpen={isOpen} title="ADD A NEW PRODUCT">
                    <form className="form-inputs flex flex-col space-y-3">
                        {renderAddInputsList}
                        <div className="flex space-x-3">
                            <Button width="w-full" className="bg-indigo-400 py-1  hover:bg-indigo-500 rounded-lg">Submite</Button>
                            <Button onClick={()=>{close()}} width="w-full" className="bg-gray-400 py-1 hover:bg-gray-500 rounded-lg">Cancel</Button>
                        </div>
                    </form>
                </ModalDialog>
            <div className="products grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 m-auto py-5">
                {renderProductList}
            </div>
        </div>
        </section>
    </>)
}
export default Products;