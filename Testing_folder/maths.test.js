const myFunctions = require('./maths.js');


test('Testing mySum -- success', () => {

  const expected = 30;

  const result = myFunctions.mySum(12, 18);

  expect(expected).toBe(result);

});

test('Testing contains_num -- success', () => {

    const expected = true;
  
    const result = myFunctions.containsNumbers("opoiiii2");
  
    expect(expected).toBe(result);
  
  });