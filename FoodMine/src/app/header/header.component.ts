import { Component,OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CartSService } from '../services/cart-s.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

cartQuantity=0;
  constructor( srvcart:CartSService){
  srvcart.getCartObservable().subscribe((newCArt)=>{
     this.cartQuantity=newCArt.totalCount;
  })
  }
  ngOnInit(){

    

  }
}
