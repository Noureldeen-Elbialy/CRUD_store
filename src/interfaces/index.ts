export interface IProductsList{
    id:number;
    title: string;
    url: string;
    desc: string;
    price: string;
    category: {
        name: "sandwiches" | "appetizers";
    }
}
export interface IForm {
    id: string,
    name: 'title' | 'url' | "desc" | 'price',
    label: string,
    type:string
}