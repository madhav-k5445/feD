import { Injectable } from '@angular/core';
import { foodDetails } from 'src/app/shared/shared';

import { sample_tags, samplefood } from 'src/app/shared/data';
import { Tag } from 'src/app/shared/tags';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():foodDetails[]{
    return  samplefood;
    
  }
    getAllFoodsBySearch(searchItem:String){
          return this.getAll().filter(foodDetails => foodDetails.name.toLowerCase().includes(searchItem.toLowerCase()))
    }


    getAllTAgs():Tag[]{
      return sample_tags;
    }

    getAllFoodsByTAgs(tag:string):foodDetails[]{
       return tag ==="All"?
       this.getAll():
        this.getAll().filter(food => food.tags?.includes(tag))
    }
 
    getFoodById(foodId:string):foodDetails{
      return this.getAll().find(food=>food.id == foodId) ?? new foodDetails();

    }
    
} 