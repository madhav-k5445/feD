import { Component,OnInit } from "@angular/core";
import { FoodService } from "../services/food/food.service";
import { foodDetails } from "../shared/shared";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent{

    foods:foodDetails[]=[];
    constructor(private foodService:FoodService,  activatedroute:ActivatedRoute){ 
       activatedroute.params.subscribe((params)=>{
           if(params.searchItem)
           this.foods= this.foodService.getAllFoodsBySearch(params.searchItem);
        else if(params.tag)
        this.foods=this.foodService.getAllFoodsByTAgs(params.tag)
        else
        this.foods=foodService.getAll();

       })
    // this.foods=foodService.getAll();
    }
   
     
    ngOnInit():void{
        
    }

}