export interface IProductsList{
    id?:string|undefined;
    title: string;
    url: string;
    desc: string;
    price: string;
    category: {
        name: "sandwiches" | "appetizers";
    }
}