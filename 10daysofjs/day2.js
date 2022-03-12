//DAY 2 : CONDITIONAL IF ELSE
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    // Write your code here
    if(score > 25 && score <= 30){
        return("A");
    }else if(score > 20 && score <= 25){
        return("B");
    }else if(score > 15 && score <= 20){
        return("C");
    }else if(score > 10 && score <= 15){
        return("D");
    }else if(score > 5 && score <= 10){
        return("E");
    }else if(score > 0 && score <= 5){
        return("F");
    }
    
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}

//DAY 2 : CONDITIONAL SWITCH
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case ('a' || 'e' || 'o' || 'i' || 'u'):
            letter = 'A';
            break;

        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;

        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;

        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
            letter = 'D';

    }

    return letter;
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}

//DAY 2 : LOOPS
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];

    for(let v of s) {
        if(vowels.includes(v))
            console.log(v);
    }
    
    for(let v of s) {
        if(!vowels.includes(v))
            console.log(v);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}