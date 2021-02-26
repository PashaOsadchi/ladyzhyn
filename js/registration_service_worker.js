if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js', { scope: "/"}).then(function(registration) {
        // Registration was successful
        // console.log('Реєстрація Service Worker пройшла успішно: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('Виникла помилка при реєстрації Service Worker: ', err);
      });
    });
  }
