// enum say you can only choose value which i want (which is in the enum) 

enum cupsize{
    SMALL,  //0
    MEDIUM,  // 1
    LARGE    // 2
}
const size= cupsize.LARGE
console.log(size)  // output : 2    bacause enum define by default value




enum ChaiType{
    MASALA='masala',
    GINGER='ginger'
}
function MakeChai(type:ChaiType){
    console.log(`making: ${type} Chai`)
}

MakeChai(ChaiType.MASALA)
MakeChai(ChaiType.GINGER)

// OUTPUT
// making: masala Chai
// making: ginger Chai



