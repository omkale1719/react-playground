// Generic म्हणजे असा type जो आधी ठरलेला नसतो.
// जेव्हा function किंवा class वापरतो, तेव्हा आपण type देतो.

// यामुळे एकच code अनेक types साठी वापरता येतो.


// समजा number print करणारे function आहे.

function printNumber(value: number): number {
    return value;
}

printNumber(10);

// आता string साठी वेगळं function लिहावं लागेल.

function printString(value: string): string {
    return value;
}

printString("Om");

// ❌ Code repeat झाला.

// Generic वापरून
function printValue<T>(value: T): T {
    return value;
}

printValue(10);      // number
printValue("Om");    // string
printValue(true);    // boolean

// इथे <T> म्हणजे Type Placeholder.
// जेव्हा function call करतो, तेव्हा TypeScript T चा type ओळखतो.











