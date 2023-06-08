document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.shows__tabs__button');
  const questions = document.querySelectorAll('.faq__questions__item__question');

  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      ocultaElementosDoHeader();
    } else {
      exibeElementosDoHeader();
    }
  });

  // Seção de atrações, programação das abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      const abaAlvo = this.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
      escondeTodasAbas();
      aba.classList.add('shows__list--is-active');
      removeBotaoAtivo();
      this.classList.add('shows__tabs__button--is-active');
    });
  }

  // Seção FAQ, accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
      const elementoPai = this.parentNode;
      elementoPai.classList.toggle('faq__questions__item--is-open');
    });
  }
});

function ocultaElementosDoHeader() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll('.shows__tabs__button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('shows__tabs__button--is-active');
  }
}

function escondeTodasAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('shows__list--is-active');
  }
}
