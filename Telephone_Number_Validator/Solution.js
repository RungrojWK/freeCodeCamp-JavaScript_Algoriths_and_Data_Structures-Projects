function telephoneCheck(str) {
  
    const regex = /^1?\s?((\(\d{3}\))|(\d{3}))+[- ]?(\d{3})[- ]?(\d{4})$/g
      
    return regex.test(str);
}
  
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = () => {
    rl.question("Enter a telephone number: ", (str) => {
        if(str.trim() != '_out'){
            console.log('Result is', telephoneCheck(str), '\n');
            main();
        } else {
            rl.close();
        }
    })
}
console.log('--------------------------------')
console.log('Key _out for close processing', '\n');
main();
