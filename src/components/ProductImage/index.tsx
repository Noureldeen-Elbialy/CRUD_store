interface IProductImage{
    imagePath: string;
    alternate: string;
    styles?: string;
}
const ProductImage = ({imagePath,alternate,styles}:IProductImage) => {
    return (<>
        <img src={imagePath} alt={alternate} className={styles} />
    </>);
}
export default ProductImage;