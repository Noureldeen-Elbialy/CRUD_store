export interface IProductsList{
    id?:string;
    title: string;
    url: string;
    desc: string;
    price: string;
    colors:string[]
}
export interface IForm {
    id: string,
    name: 'title' | 'url' | "desc" | 'price',
    label: string,
    type:string
}