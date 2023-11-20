import { Component } from '@angular/core';
import { foodDetails } from '../shared/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartSService } from '../services/cart-s.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {


  food!:foodDetails;

  constructor(foodsrv:FoodService,actvatedroute:ActivatedRoute,private router:Router,
   private cartsrv: CartSService){


    actvatedroute.params.subscribe((params)=>{
      if(params.foodId)
      this.food=foodsrv.getFoodById(params.foodId)
    })
   

  }
  addToCart(){
      this.cartsrv.addToCArt(this.food)
      this.router.navigateByUrl('/cart-page')
  }

}
