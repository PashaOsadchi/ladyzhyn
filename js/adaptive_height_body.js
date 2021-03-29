// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

// Спочатку ми отримуємо висоту вікна перегляду і множимо її на 1%, щоб отримати значення одиниці vh
let vh = window.innerHeight * 0.01;
// Потім ми встановлюємо значення в користувацькій властивості --vh у кореневій частині документа
document.documentElement.style.setProperty('--vh', `${vh}px`);


// Ми слухаємо подію зміни розміру
window.addEventListener('resize', () => {
  // Ми виконуємо той самий сценарій, що і раніше
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});