
type Chai={
    name:string;
    price:number;
    ishot:boolean
}


// Partial<T> → सर्व properties optional (?)
// Required<T> → सर्व properties required
// Readonly<T> → सर्व properties read-only
// Pick<T, K> → फक्त निवडलेल्या properties
// Omit<T, K> → निवडलेल्या properties वगळून बाकी सर्व

const updateChai=(updates:Partial<Chai>)=>{
    console.log("updating chai with" , updates);
}

updateChai({price:780,name:"OM KALE"})
// updateChai({})


type CHaiOrder={
    name?:string;
    quantity?:number
}

const PlaceOrder=(order:Required<CHaiOrder>)=>{
   console.log(order)

}

PlaceOrder({name:"Om Kale",quantity:5})



type chai={
    name:string
    price:number
    isHot:boolean
    increadents:string[]
}









