import { Component } from '@angular/core';
import { Cart } from '../shared/cart';
import { CartSService } from '../services/cart-s.service';
import { CartItem } from '../shared/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
cart!:Cart;

constructor(private srvCart:CartSService){
  this.srvCart.getCartObservable().subscribe((cart)=>{
    this.cart =cart;
  })
}

removeFromCart(cartItem:CartItem){
this.srvCart.removeFromCArt(cartItem.food.id)
}
changeQuantity(cartItem:CartItem, quantityInString:string){
  const quantity = parseInt(quantityInString)
  this.srvCart.changeQuantity(cartItem.food.id,quantity )
}
}
