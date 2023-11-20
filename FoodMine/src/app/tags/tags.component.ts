import { Component } from '@angular/core';
import { Tag } from '../shared/tags';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags!:Tag[];

constructor(foodservice:FoodService,   actvatedroute:ActivatedRoute, private router:Router){

  this.tags= foodservice.getAllTAgs();

}
  


}
