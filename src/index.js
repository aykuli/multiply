module.exports = function multiply(first, second) {
  let bigNumber1 = BigInt(first);
  let bigNumber2 = BigInt(second);
  
  return '' + BigInt(bigNumber1 * bigNumber2);
}

