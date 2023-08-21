function palindrome(str) {
  const strReplace = str.replace(/[^a-zA-Z0-9]/g, '')
  return strReplace.split('').reverse().join("").toLowerCase() == strReplace.toLowerCase();
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const main = () => {
  rl.question("Enter a string: ", (str) => {

    if(str.trim().toLocaleLowerCase() != '_out') {
      console.log('Result is ', palindrome(str), '\n');
      main();   
    } else {
      rl.close()
    }

  })
}

console.log('Key _out for close processing')
main();
