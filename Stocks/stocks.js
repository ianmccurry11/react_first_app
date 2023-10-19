
var stocks = {};
var shares = 0;
function create(){
        
        shares = 0;
        return true;

}

function isEmpty(){
    if(shares == 0){
        return true;
    }else{
        return false;
    }
}

function checkTickers(){
    return Object.keys(stocks).length;

}

function purchase(name, num_stocks){
    if( num_stocks > 0){
        let stockName = name in stocks;
            if(stockName)
                stocks[name] = stocks[name] +num_stocks;
            else
                stocks[name] = num_stocks
        shares +=num_stocks
    }else
        throw new Error("SharePurchaseException");
    
}       

function sell(name, num_stocks){
    const cur = stocks[name];
    if (cur >= num_stocks)
    stocks[name] = cur - num_stocks;
    else{
        throw new Error("ShareSaleException");
    }
    if (stocks[name] == 0)
        delete stocks[name];
}

function checkStock(){
    let count = 0;
    for (const key of Object.keys(stocks)) { 
        count = count + stocks[key];
     };
     return count;
}

function check(name){
    return stocks[name]
}

exports.create = create
exports.isEmpty = isEmpty
exports.checkTickers = checkTickers
exports.purchase = purchase
exports.sell = sell
exports.checkStock = checkStock
exports.check = check