export class foodDetails{
    id!:string;
    name!:string;
    price!:number;
    favorate:boolean=false;
    stars:number=0;
    imageUrl!:string;
    origens!:string[];
    cookTime!:string;
    tags?:string[];
}