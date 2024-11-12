import { v4 as uuid } from "uuid";
import { IForm, IProductsList } from "../interfaces";

export const productsList:IProductsList[] = [
    {
        id:uuid(),
        title: `Shiitake Mushroom`,
        url: `https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fa76de047b66f2511962b600232c60769.png&w=256&q=75`,
        desc: `Sautéed mushroom, cheddar cheese, and creamy mayonnaise spread on top of our pure beef burger..`,
        price: "280",
        colors:["#FAF6E3","#D8DBBD"]
    }, {
        id:uuid(),
        title: `Animal Style`,
        url: `https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2F36db94ef11461ebb6d1712215b530fb5.png&w=256&q=75`,
        desc: `Crispy onion rings, topped with semi dijon mustard, creamy Buffalo sauce, and cheddar cheese.`,
        price: "155",
        colors:["#B59F78","#2A3663"]
    }, {
        id:uuid(),
        title: `Bacon Mushroom Jack`,
        url: `https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fd845c9309b0d95d8c5d945b6b2552491.png&w=256&q=75`,
        desc: `Beef bacon with fresh sautéed mushroom, cheddar cheese, and creamy mayonnaise.`,
        price: "190",
        colors:["#E6B9A6","#254336"]
    }, {
        id:uuid(),
        title: `Old School`,
        url: `https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fb4a9bce0163404b97f76e9cec638bb08.png&w=256&q=75`,
        desc: `Pure beef burger patty, topped with our signature Buffalo sauce and cheddar cheese.`,
        price: "145",
        colors:["#681313","#211717"]
    }, {
        id:uuid(),
        title: `The Rastafari`,
        url: `https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3-accelerate.amazonaws.com%2Fmenu_items%2Fff183e68e89cbe5674dfb3c8e7b1a26b.png&w=256&q=75`,
        desc: `Crispy cheddar jalapeño bites, on a grilled burger patty with and creamy Buffalo sauce.`,
        price: "170",
        colors:["#254336","#862B0D"]
    }, {
        id:uuid(),
        title: `Truffle Beef Burger`,
        url: `https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F20f87185b44e354f1842d124015724da.png&w=256&q=75`,
        desc: `Flame grilled burger with Sautéed mushroom, crispy onion, truffle sauce, and cheddar cheese.`,
        price: "170",
        colors:["#2A3663","#254336","#0000"]
    },{
        id:uuid(),
        title: `Blanco Fries`,
        url: `https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2F8451f4eff364a68c8f9ed01d0fdb5b84.png&w=256&q=75`,
        desc: `French Fries with Ketchup, Mayonnaise and fresh onion`,
        price: "60",
        colors:["#254336","#68df13"]
    }, {
        id:uuid(),
        title: `Caesar Salad`,
        url: `https://buffaloburger.com/_next/image?url=https%3A%2F%2Fbuffalonlineorderingprod.s3.eu-west-1.amazonaws.com%2Fmenu_items%2Fb969e186dcb089185c6d63d6774d02d6.png&w=256&q=75`,
        desc: `Fresh lettuce with pieces of grilled chicken topped with croutons bread and parmesan cheese with..`,
        price: "169",
        colors:["#2Af6dd","#fff9A6","#b54f36"]
    }
];


export const AddInputsList: IForm[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text",
    },
    {
        id: "desc",
        name: "desc",
        label: "Product Description",
        type: "text"
    },
    {
        id: "imageUrl",
        name: "url",
        label: "Product Image",
        type: "text"
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text"
    }
];

export const colors= ["#FAF6E3","#D8DBBD","#B59F78","#2A3663","#E6B9A6","#254336","#862B0D","#681313","#211717"];