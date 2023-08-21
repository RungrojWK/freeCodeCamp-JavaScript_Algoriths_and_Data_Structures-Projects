function rot13(str) {
  str = str.toUpperCase()
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  const regex = new RegExp('\w', 'g');

  let newStr = ''

  // List of word
  let lw = str.split('')

  for(let w of lw){
    let index = alphabet.indexOf(w)
    if(index > -1){
      let interval = 1
      let checkReNew = 0
      for(let i = index; i < alphabet.length; i++){ 


        if(interval++ == 13){   
          if(checkReNew == 0){
            w = alphabet[i + 1 > 25 ? 0 : i + 1]
          } else {
            w = alphabet[i] 
          }

          break;
        }

        if(i == alphabet.length - 1){
          i = 0;
          checkReNew = 1
        }
        
      }
    }

    newStr += w == '' ? ' ' : w

  }

  return newStr;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = () => {
  
  rl.question("Enter an ROT13 encoded string: ", (str) => {    
    if(str.trim().toLocaleLowerCase() != '_out') {
      console.log('Result is', rot13(str).trim(), '\n');
      main();   
    } else {
      rl.close()
    }

    main();  
  })
}

console.log('Key _out for close processing', '\n')
main();
