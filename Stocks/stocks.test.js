const Portfolio = require('./stocks.js');

test('create new portfolio -- success', () => {
    var result = Portfolio.create();
    expect(result).toBe(true);
  });

test('is empty? portfolio -- success', () => {
    const result = Portfolio.isEmpty();
    expect(result).toBeTruthy();
  });

  test('Check how many tickers -- success', () => {
    const expected = 0
    const result = Portfolio.checkTickers();
    expect(result).toBe(0);
  });

  test('make a purchase -- success', () => {
    const expected = 0
    Portfolio.purchase("GMC",5);
    const result = Portfolio.checkTickers();
    const result2= Portfolio.checkStock();

    expect(result).toBe(1);
    expect(result2).toBe(5);

  });

  test('make a sale -- success', () => {
    const expected = 0
    Portfolio.sell("GMC",3);
    const result = Portfolio.checkStock();
    expect(result).toBe(2);
  });

  test('sell all of one stock -- success', () => {
    const expected = 0
    Portfolio.sell("GMC",2);
    const result = Portfolio.checkTickers();
    expect(result).toBe(0);
  });

  test('see how many of a stock -- success', () => {
    const expected = 0
    Portfolio.purchase("BUX", 5);
    const result = Portfolio.check("BUX");
    expect(result).toBe(5);
  });

  test('sell too many shares -- success', () => {
    
    try {
        result = Portfolio.sell("BUX", 6);
    } catch (error) {
        expect(error.message).toBe("ShareSaleException")
    }
  });