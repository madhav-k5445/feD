import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchItem='';
constructor(activer:ActivatedRoute,private rotewr:Router){

  activer.params.subscribe((params)=>{
    if(params.searchItem) this.searchItem=params.searchItem
  })
}



search(term:string):void{
  this.rotewr.navigateByUrl('/search/'+term)
}

}
