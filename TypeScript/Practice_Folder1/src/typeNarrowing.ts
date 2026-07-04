function getchai(kind: string | Number){
    if(typeof kind ==="string"){
        return `making ${kind} chai..`;

    }
    return `chai order:${kind}`;
}
// this is typenarrowing
// When I use '.' after the string 'kind', VS Code suggests all string methods.
// When I use '.' after the number 'kind', VS Code suggests all number methods.
// This happens because 'kind' can only be either a string or a number.

 

// 2.

function OrderChai(size: "small" | "Medium" | "large"|number){
    if(size==='small'){
        return 'give me cutting';
    }
    if(size==='Medium' || size==='large'){
        return 'give me extra chai';
    
    }
    return `give me ${size} chai:`
}


// 3.

class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }

}

class Cutting{
    serve(){
        return `serving cutting chai`
    }
}


function serve(chai:KulhadChai|Cutting){
    if (chai instanceof KulhadChai){
        return chai.serve();
    }
}


// 4.

// in typescript we can create own types

type ChaiOrdr={
    type:string
    size:number
}

// we chaeck the type is correct or not

function isChaiOrder(obj:any):obj is ChaiOrdr{
return(
    typeof obj==="object" &&
    obj!==null &&
    typeof obj.type === "string" &&
    typeof obj.size === "number" 
)
}

// example

function serveOrder(item: ChaiOrdr | string){
    if (isChaiOrder(item)){
        return `serve the ${item.type} chai with ${item.size} sugar `
    }
    return `serving the custom chai: ${item}`
}


type masalachai={type:'masala'; spicelevel:number};
type Gingerchai={type:'ginger'; amount:number};
type Elaichichai={type:'elaichi'; aroma:number};

type Chai=masalachai|Gingerchai|Elaichichai;

function makechai(order:Chai){
    switch(order.type){
        case "elaichi":
            return 'elaichi chai'
            break;
        case "ginger":
            return 'ginger chai'
            break;
        case "masala":
            return 'masala chai'
            break;
        
        
    }
}



function brew(order:masalachai|Gingerchai){
    if('spicelevel' in order){
        //
    }
}



// unknown Type in TypeScript
// The unknown type is a type-safe alternative to any.
// any → You can do anything with the value (no type checking).
// unknown → You must check the type first before using the value.

// function isStringArray(arr:unknown):arr is string[]{
// }