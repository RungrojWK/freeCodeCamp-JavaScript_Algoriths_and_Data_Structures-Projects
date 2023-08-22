function checkCashRegister(price, cash, cid) {
  let _cid = JSON.parse(JSON.stringify(cid));
  
  let currency = [
    {currencyUnit:"PENNY", amount:0.01, decimal:2}, 
    {currencyUnit:"NICKEL", amount:0.05, decimal:2}, 
    {currencyUnit:"DIME", amount:0.1, decimal:1}, 
    {currencyUnit:"QUARTER", amount:0.25, decimal:2}, 
    {currencyUnit:"ONE", amount:1 ,decimal:0}, 
    {currencyUnit:"FIVE", amount:5,decimal:0}, 
    {currencyUnit:"TEN", amount:10,decimal:0}, 
    {currencyUnit:"TWENTY", amount:20,decimal:0}, 
    {currencyUnit:"ONE HUNDRED", amount:100,decimal:0}
  ]

  let change = {status: '', change:[]};  
  let num = (cash - price)
  
  currency = currency.filter((a) => a.amount <= num).sort((a, b) => b.amount - a.amount)

  for(let i = 0; i < currency.length; i++){
    let j = _cid.findIndex(a => a[0] == currency[i].currencyUnit)

    if(j > -1){
      while(true){        
        if(_cid[j][1] <= 0 || currency[i].amount > num || num <= 0){

          if(_cid.filter((a) => a[1] == 0).length == _cid.length && num == 0){
            return {status:'CLOSED', change:cid}
          }

          break
        }

        num = Number((num - currency[i].amount).toFixed(3))
        _cid[j][1] = Number((_cid[j][1] - currency[i].amount).toFixed(currency[i].decimal))
        
        let n = change.change.findIndex((a) => a[0] == _cid[j][0])

        n > -1 ? change.change[n][1] = Number(((change.change[n][1]) + Number(currency[i].amount)).toFixed(currency[i].decimal)) : change.change.push([currency[i].currencyUnit, Number(currency[i].amount.toFixed(currency[i].decimal))])
      }
    }
  }

  if (num == 0){
    change.status = 'OPEN'
  } else {
    change.status = 'INSUFFICIENT_FUNDS'
    change.change = []
  } 

  return change;
}

// TEST
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
