const panagram = 'abcdefghijklmnopqrstuvwxyz'
const notAPanagram = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

let isPangram = s => {
    let lc = s.toLowerCase();//it will do all values of s to lowerCase

    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')// is used as the separator, the string is split between each character.
        .filter(c => lc.indexOf(c) === -1)// creates an array filled with all array elements that pass the c function .
        .length === 0;//We want to know if it's empty, therefore we want to know if it has zero elements, so we'll look at its length property". 
};
console.log(isPangram(panagram));
