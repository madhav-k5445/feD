import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import{BehaviorSubject, Observable, } from 'rxjs'
import { foodDetails } from '../shared/shared';
import { CartItem } from '../shared/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartSService {
private cart:Cart= this.getCartFromLocalStorage();
private cartSubject:BehaviorSubject<Cart> =new BehaviorSubject(this.cart);
  constructor() { }
   
  addToCArt(food:foodDetails):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem)
    return;
     
      this.cart.items.push(new CartItem(food));
      this.setCartToLocalStorage();
  }

  removeFromCArt(foodID:string):void{
    this.cart.items=this.cart.items.filter(item => item.food.id != foodID) 
    this.setCartToLocalStorage();

   }

   changeQuantity(foodId:string, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem)
    return

    cartItem.quantity=quantity;
    cartItem.price= quantity * cartItem.food.price;
    this.setCartToLocalStorage();

   }

   clearCart(){
    this.cart = new Cart()
    this.setCartToLocalStorage();

   }

   getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
   }

   private setCartToLocalStorage():void{

    this.cart.totalPrice=this.cart.items.reduce((prevsum,currentItem)=>prevsum+currentItem.price,0);
    this.cart.totalCount=this.cart.items.reduce((prevsum,currentItem)=>prevsum+currentItem.quantity,0);
      const cartJson= JSON.stringify(this.cart);
      localStorage.setItem('cart',cartJson);
      this.cartSubject.next(this.cart)

   }

  private  getCartFromLocalStorage():Cart{
    const cartJson= localStorage.getItem('cart');
    return cartJson? JSON.parse(cartJson):new Cart();
   }


}
