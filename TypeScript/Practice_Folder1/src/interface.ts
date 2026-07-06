// implement the object to class
type TeaRecipe={
    water:number,
    milk:number
}

class MasalaChai implements TeaRecipe{
    water=100;
    milk=50;
}


// implements the interface to class 

interface cupType{
    size:'small' | 'large'
}
 class Chai implements cupType{
    size:'small'| 'large'='small'
 }



//  kahi thikani type nahi chaalat aaplyla interface chich garajpafate 

// this type 'Type'  is not allowed its need to interface 

//  type response={ok:true} | {ok:false}
//  class myRes implements response{
//     ok:boolean=true;
//  }



// INTERSECTION

type baseChai={Tealevel:number}
type Extra={masala:number}

type masalaChai=baseChai &Extra; //& means INSERTATION

const cup:masalaChai={
    Tealevel:2,
    masala:4
}





