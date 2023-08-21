function convertToRoman(num) {
    let master = [['IX', 'V', 'IV', 'I'], ['XC', 'L', 'XL', 'X'], ['CM', 'D', 'CD', 'C']]
  
    let roman = '';
    let arrNum = num.toString().split('').map(n => Number(n))
  
    if(arrNum.length >= 3){
      let n = Number(arrNum.splice(0, arrNum.length - 3).join())
      
      while(n > 0){
        roman += 'M'
        n--
      }
    }
  
    arrNum.reverse()
    
    for(let i = arrNum.length - 1; i >= 0; i--){
      let num = arrNum[i]
  
      if(num == 0){
        continue;
      }
  
      if(num >= 9){
        roman += master[i][0]
      } else if (num >= 5){
        roman += master[i][1]
        
        let n = num - 5
        while(n > 0){
          roman += master[i][3] 
          n--
        }
      } else if (num >= 4){
        roman += master[i][2]
      } else {      
        while(num > 0){
          roman += master[i][3]
          num--
        }
      }
    } 
    return roman;
  }
  console.log('convertToRoman(2) should return the string II')
  console.log('Result is ', convertToRoman(2), '\n'); //should return the string II
  console.log('convertToRoman(3) should return the string III')
  console.log('Result is ', convertToRoman(3), '\n');
  console.log('convertToRoman(4) should return the string IV')
  console.log('Result is ', convertToRoman(4), '\n'); 
  console.log('convertToRoman(5) should return the string V')
  console.log('Result is ', convertToRoman(5), '\n');
  console.log('convertToRoman(9) should return the string IX')
  console.log('Result is ', convertToRoman(9), '\n');
  console.log('convertToRoman(12) should return the string XII')
  console.log('Result is ', convertToRoman(12), '\n');
  console.log('convertToRoman(16) should return the string XVI')
  console.log('Result is ', convertToRoman(16), '\n');
  console.log('convertToRoman(29) should return the string XXIX')
  console.log('Result is ', convertToRoman(29), '\n');
  console.log('convertToRoman(44) should return the string XLIV')
  console.log('Result is ', convertToRoman(44), '\n');
  console.log('convertToRoman(45) should return the string XLV')
  console.log('Result is ', convertToRoman(45), '\n');
  console.log('convertToRoman(68) should return the string LXVIII')
  console.log('Result is ', convertToRoman(68), '\n');
  console.log('convertToRoman(83) should return the string LXXXIII')
  console.log('Result is ', convertToRoman(83), '\n');
  console.log('convertToRoman(97) should return the string XCVII')
  console.log('Result is ', convertToRoman(97), '\n');
  console.log('convertToRoman(99) should return the string XCIX')
  console.log('Result is ', convertToRoman(99), '\n');
  console.log('convertToRoman(400) should return the string CD')
  console.log('Result is ', convertToRoman(400), '\n');
  console.log('convertToRoman(500) should return the string D')
  console.log('Result is ', convertToRoman(500), '\n');
  console.log('convertToRoman(501) should return the string DI')
  console.log('Result is ', convertToRoman(501), '\n');
  console.log('convertToRoman(649) should return the string DCXLIX')
  console.log('Result is ', convertToRoman(649), '\n');
  console.log('convertToRoman(798) should return the string DCCXCVIII')
  console.log('Result is ', convertToRoman(798), '\n');
  console.log('convertToRoman(891) should return the string DCCCXCI')
  console.log('Result is ', convertToRoman(891), '\n');
  console.log('convertToRoman(1000) should return the string M')
  console.log('Result is ', convertToRoman(1000), '\n');
  console.log('convertToRoman(1004) should return the string MIV')
  console.log('Result is ', convertToRoman(1004), '\n');
  console.log('convertToRoman(1006) should return the string MVI')
  console.log('Result is ', convertToRoman(1006), '\n');
  console.log('convertToRoman(1023) should return the string MXXIII')
  console.log('Result is ', convertToRoman(1023), '\n');
  console.log('convertToRoman(2014) should return the string MMXIV')
  console.log('Result is ', convertToRoman(2014), '\n');
  console.log('convertToRoman(3999) should return the string MMCMXIX')
  console.log('Result is ', convertToRoman(3999), '\n');
