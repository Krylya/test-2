const defineSistem = (value) => {
  let sistem = '';

  const numOne = value.substr(0, 1);
  const numTwo = value.substr(0, 2);

  if (numOne === '4') sistem = 'visa';
  if (numOne === '2') sistem = 'mir';

  if (numTwo === '30' || numTwo === '36' || numTwo === '38') sistem = 'dinersClub';
  if (numTwo === '34' || numTwo === '37') sistem = 'americanExpress';
  if (numTwo === '31' || numTwo === '35') sistem = 'JCB';
  if (numTwo === '51' || numTwo === '52' || numTwo === '53' || numTwo === '54' || numTwo === '55') {
    sistem = 'masterCard';
  }
  if (numTwo === '60') sistem = 'discover';

  if (sistem !== '') {
    return sistem;
  }

  return false;
};

export default defineSistem;
