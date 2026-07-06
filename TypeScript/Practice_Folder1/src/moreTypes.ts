let response: any = "42";

let a = response as number;
console.log(a); // runtime ला अजूनही string "42" आहे

let b = Number(response);
console.log(b); // runtime number 42


const inputElement=document.getElementById("username") as HTMLInputElement

// कधी getElementById autocomplete मध्ये दिसत नाही?
// याची काही कारणे असू शकतात:
// document चा type ओळखला जात नाही
// जर .js फाइलमध्ये TypeScript syntax (as HTMLInputElement) वापरत असशील.
// किंवा lib: ["dom"] enable नसेल.
// Editor (VS Code) ला IntelliSense refresh लागतो
// कधी VS Code मध्ये autocomplete बंद पडतो.
// Ctrl + Shift + P → TypeScript: Restart TS Server करून बघ.
// तू चुकीच्या object वर getElementById call करत आहेस


// DIfference of unknown and any 

let value:any;  //any is like APAN MAST HAI , KOI FARAK NAHI PADATA!

value="om";
value=100;
value=[1,2,3,4,5];
value=2.5
value.toUpperCase()  //There is no error in any when we use toUppercase() on value


let Newvalue:unknown;
Newvalue="om";
Newvalue=100;
Newvalue=[1,2,3,4,5];
Newvalue=2.5
// Newvalue.toUpperCase()  //There is an error in unknown when we use toUppercase() on Newvalue

if(typeof Newvalue === 'string'){  //after use of if we can use toUpercase() function
     Newvalue.toUpperCase();
}


