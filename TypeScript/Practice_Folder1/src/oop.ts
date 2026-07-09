class buyChai{
    flavour:string;
    price:number;

    constructor(flavour:string,price:number){
        this.flavour=flavour
        this.price=price

        console.log(`flavour: ${flavour} price: ${price}`)
    }
    
}

const masalaChai=new buyChai("ginger",45)
// masalaChai.flavour='masala'
console.log(masalaChai)



