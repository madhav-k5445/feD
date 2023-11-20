import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes:Routes=[
//  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'search/:searchItem', component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:foodId',component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent}
]
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
