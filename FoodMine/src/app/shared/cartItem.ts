import { foodDetails } from "./shared";

export class CartItem {
    constructor(public food:foodDetails){ }
    quantity:number= 1;
    price:number=this.food.price;
}