const luhnAlgorithm = (digits) => {
  if (digits === '') return false;
  let sum = 0;

  for (let i = 0; i < digits.length; i += 1) {
    let cardNum = +(digits[i]);

    if ((digits.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) cardNum -= 9;
    }
    sum += cardNum;
  }

  return sum % 10 === 0;
};

export default luhnAlgorithm;
