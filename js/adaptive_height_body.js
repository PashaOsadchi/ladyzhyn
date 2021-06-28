// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

function adaptive_height_body() {
    // Спочатку ми отримуємо висоту вікна перегляду і множимо її на 1%, щоб отримати значення одиниці vh
    let vh = window.innerHeight * 0.01;
    // Потім ми встановлюємо значення в користувацькій властивості --vh у кореневій частині документа
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

adaptive_height_body();