// Отримує географічні кординати  Geolocation_GPS().then(function (respond) { console.log(respond) });
function geolocation_gps() {
  const location = {};

  const options = {
    maximumAge: 0,           // чіле число (мілісекунди) - якщо більше нуля то програма готова прийняти кешовані кординати дата отримання яких не перевищує заданого часу в мілісекундах (якщо 0 кординати повинні біти отримані негайно) або infinity - максимальний час кешування позиції
    timeout: 10000,          // чіле число (мілісекунди) - кількість часу до виклику callback. Якщо 0 то пристрій буде шукати до того часу поки не отримає кординати
    enableHighAccuracy: true // false або true - false пристрій буде визначати кординати максимально швидко і економічно що зменшує точність
  }

  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      location.geolocation_latitude = pos.coords.latitude;                    // широта в десяткових градусах
      location.geolocation_longitude = pos.coords.longitude;                  // довгота в десяткових градусах
      location.geolocation_accuracy = pos.coords.accuracy;                    // точність положення місце знаходження в метрах
      location.geolocation_altitude = pos.coords.altitude;                    // висота в метрах над середнім рівнем моря (повертається, якщо є)
      location.geolocation_altitudeAccuracy = pos.coords.altitudeAccuracy;    // точність висоти положення (повертається, якщо є)
      location.geolocation_heading = pos.coords.heading;                      // кількість градусів за годинниковою стрілкою з півночі (повертається, якщо є)
      location.geolocation_speed = pos.coords.speed;                          // швидкість в метрах в секунду (повертається, якщо є)
      location.geolocation_timestamp = pos.timestamp;                         // дата час визначення місця розташування
      location.geolocation_error_message_text = false;
      resolve(location);
    }, function error(err) {
      //location.error_logical = true;
      //location.error_code = err.code;
      //location.error_message = err.message;
      switch (err.code) {
        case 0:
          location.error_message_text = 'Невідома помилка!';
          break;
        case 1:
          location.error_message_text = 'Увімкніть GPS та надайте дозвіл для визначення місцезнаходження пристрою!';
          break;
        case 2:
          location.error_message_text = 'Внутрішня помилка визначення місцезнаходження пристрою!';
          break;
        case 3:
          location.error_message_text = 'Закінчився час наданий на визначення місцезнаходження пристрою!';
          break;
      }
      resolve(location);
    }, options);
  });
};
