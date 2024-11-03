import { productsList } from "../../data";
import ProductCard from "../ProductCard";

const Products = () => {
    //renders
    const renderProductList = productsList.map(product => <ProductCard key={product.id} product={product} />)
    return (<>
        <section>
        <div className="product-container">
            <h2 className='text-5xl text-orange-500 font-bold text-center py-5 text-stroke'>Burger Sandwiches</h2>
            <div className="products container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 m-auto py-5">
                {renderProductList}
            </div>
        </div>
        </section>
    </>)
}
export default Products;