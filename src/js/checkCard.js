import luhnAlgorithm from './luhnAlgorithm';
import defineSistem from './defineSistem';

export default class CheckCard {
  constructor() {
    this.defineSistem = defineSistem;
    this.luhnAlgorithm = luhnAlgorithm;

    this.form = document.querySelector('[data-form=card-form]');
    this.cardInput = document.querySelector('[data-name=card-number]');
    this.validateButton = document.querySelector('[data-name=validate]');

    this.cardList = document.querySelectorAll('[data-item=card-item]');

    this.cardInput.addEventListener('input', this.inputDigits.bind(this));
    this.cardInput.addEventListener('input', this.checkSistem.bind(this));

    this.validateButton.addEventListener('click', this.isValidCard.bind(this));
  }

  /*
удаляем из поля ввода любые символы кроме цифр
*/
  inputDigits(event) {
    const num = event.currentTarget.value;
    const value = num.replace(/[^0-9.]/g, '');
    this.cardInput.value = value;
  }

  /*
выделяем карту
*/
  checkSistem(event) {
    const { value } = event.currentTarget;

    // defineSistem
    const sistem = this.defineSistem(value);

    if (sistem) {
      const currentCard = document.querySelector(`[data-card=${sistem}]`);

      this.cardList.forEach((cardItem) => {
        if (currentCard !== cardItem && cardItem.classList.contains('active')) {
          cardItem.classList.remove('active');
        }
      });
      currentCard.classList.add('active');
    }

    if (!sistem) {
      this.cardList.forEach((cardItem) => {
        if (cardItem.classList.contains('active')) {
          cardItem.classList.remove('active');
        }
      });
    }
  }

  /*
сообщаем об ошибке пользователю - выделяем поле ввода в зависимости от результата
*/
  isValidCard(e) {
    e.preventDefault();
    const { value } = this.cardInput;

    // luhnAlgorithm
    const checkCard = this.luhnAlgorithm(value);

    if (!checkCard) {
      if (this.cardInput.classList.contains('valid')) this.cardInput.classList.remove('valid');
      this.cardInput.classList.add('invalid');
    }
    if (checkCard) {
      if (this.cardInput.classList.contains('invalid')) this.cardInput.classList.remove('invalid');
      this.cardInput.classList.add('valid');
    }
  }
}// end class
