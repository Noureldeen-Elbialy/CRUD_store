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
export interface IForm{
    id:string,
    name:string,
    label: string,
    type:string
}