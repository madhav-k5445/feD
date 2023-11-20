import { foodDetails } from "./shared";
import { Tag } from "./tags";


export const samplefood:foodDetails[]=[

    {
        id:"1",
        name:"pizza",
        price:90,
        favorate:false,
        stars:4.5,
        tags:['Pizza','FastFood'],

        imageUrl:"assets/images/food1.jpg",
        origens:['italy'],
        cookTime:"10-20"
       },
       {
        id:"2",
        name:"PanCake",
        price:80,
        favorate:false,
        stars:4.5,
        imageUrl:"assets/images/food2.jpg",
        origens:['Japan'],
        cookTime:"10-20"
       },
       {
        id:"3",
        name:"Veg-pizza",
        price:100,
        favorate:false,
        tags:['Pizza','FastFood'],
        stars:4.5,
        imageUrl:"assets/images/food3.jpg",
        origens:['italy'],
        cookTime:"20-30"
       },
       {
        id:"4",
        name:"Non-Veg Salad",
        price:150,
        favorate:false,
        tags:['SlowFood','FastFood'],
        stars:4.5,
        imageUrl:"assets/images/food4.jpg",
        origens:['italy'],
        cookTime:"10-20"
       },
       {
        id:"5",
        name:"Chicken Stake",
        price:200,
        favorate:false,
        tags:['fry',],

        stars:4.5,
        imageUrl:"assets/images/food5.jpg",
        origens:['italy'],
        cookTime:"10-20"
       },
       {
        id:"6",
        name:"Burger",
        price:180,
        favorate:false,
        tags:['Burger'],

        stars:4.5,
        imageUrl:"assets/images/food6.jpg",
        origens:['italy'],
        cookTime:"15-20"
       }
]
 export const sample_tags:Tag[]=[
    {name: 'All', count:6},
    {name: 'FastFood', count:4},
    {name: 'Pizza', count:2},
    {name: 'SlowFood', count:3},
    {name: 'Burger', count:2},
    {name: 'fry', count:1},
    {name: 'soup', count:1}
]