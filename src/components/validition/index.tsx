export const productValidition = (product: { title: string, desc: string ,url:string ,price:string}) => {
    const errors: { title: string, desc: string, url: string, price: string } = {
        title: '',
        desc: '',
        url: '',
        price: ''
    };
    const vaildUrl = /^(ftp|http|https):\/\/[^ ""]+$/.test(product.url);

    if (!product.title.trim() || product.title.length < 10 || product.title.length > 30) {
        errors.title = 'product title must be 10 to 30 characters!';
    }
    if (!product.desc.trim() || product.desc.length < 10 || product.desc.length > 50) {
        errors.desc = 'product description must be 10 to 50 characters!';
    }
    if (!product.url.trim()|| !vaildUrl) {
        errors.url = 'product URL Invaild!';
    }
    if (!product.price.trim() || isNaN(Number(product.price)) ) {
        errors.price = 'product price Invaild!';
    }


    return errors;
};