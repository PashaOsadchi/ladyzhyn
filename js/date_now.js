const date_now_obj = {};

function current_date() {
    // Отримує поточну дату час із поправкою на часовий пояc результат виводить у мілісекундах - 1 564 489 506 645
    //  Літній час + 3 години або 10800000 мс Зимовий час + 2 години або 7200000 мс
    date_now_obj.date_time_milliseconds = Date.now() + 10800000;

    // Форматує дату - tue Jul 30 2019 15:27:37 Gmt+0300 (Восточная Европа, летнее время)
    const maxdate = new Date(date_now_obj.date_time_milliseconds);

    // Отримує поточну дату час із поправкою на часовий пояc результат виводить у форматі дата час - 30.07.19 12:25 - 2019-07-30t12:25:06.645Z
    date_now_obj.date_time = maxdate.toISOString();

    // Отримує поточну дату із поправкою на часовий пояc результат виводить у форматі дата - 30.07.19 - 2019-07-30
    date_now_obj.date = date_now_obj.date_time.substr(0, date_now_obj.date_time.length - 14);

    // Отримує поточний час із поправкою на часовий пояc результат виводить у форматі час - 12:25 - t12:25:06
    date_now_obj.time = date_now_obj.date_time.substr(10, date_now_obj.date_time.length - 15);

    // Отримує поточний час результат виводить у мікросекундах - 268 922 220 000
    const time_1 = date_now_obj.time.substr(1, date_now_obj.time.length - 0);
    const a = time_1.split(":");
    date_now_obj.time_milliseconds = (a[0] * 3600 + a[1] * 60 + a[2]) * 60 * 1000;
    //  date_now_obj.time_milliseconds = ((a[0]*3600000) + (a[1]*60000) + (a[2] * 1000)); Правильніша строка за попередню але потребує перевірки

    // Отримує поточну дату результат виводить у мікросекундах - 1 295 567 437 145
    date_now_obj.date_milliseconds = date_now_obj.date_time_milliseconds - date_now_obj.time_milliseconds;

    // Повертає номер дня тижня  0 - Неділя 6 - Субота
    const d = new Date(date_now_obj.date);
    date_now_obj.day_week = d.getDay();

    // Форматує дату для коректного відображення у текстовому полі - 30.07.2019
    const arr = date_now_obj.date.split("-");
    date_now_obj.date_format_text = arr[2] + "." + arr[1] + "." + arr[0];

    // Форматує час для коректного відображення у текстовому полі - 12:22
    date_now_obj.time_format_text = date_now_obj.time.substr(1, date_now_obj.time.length - 4);

    // Форматує час + секунди для коректного відображення у текстовому полі - 22:52:15
    date_now_obj.time_seconds_format_text = date_now_obj.time.substr(1, date_now_obj.time.length - 1);

    // Форматує час для коректного відображення у текстовому полі - 12-22
    const time_format_text_arr = date_now_obj.time_format_text.split(":");
    date_now_obj.time_format_text_3 = time_format_text_arr[0] + "-" + time_format_text_arr[1];

    // Форматує дату час для коректного відображення у текстовому полі - 30.07.2019 12:22
    date_now_obj.date_time_format_text = date_now_obj.date_format_text + " " + date_now_obj.time_format_text;

    // Форматує дату час + секунди для коректного відображення у текстовому полі - 30.07.2019 22:52:15
    date_now_obj.date_time_seconds_format_text = date_now_obj.date_format_text + " " + date_now_obj.time_seconds_format_text;

    // Форматує дату час для коректного відображення у текстовому полі - 30.07.2019 12 год. 22 хв.
    date_now_obj.date_time_format_text_2 = date_now_obj.date_format_text + " " + date_now_obj.time_format_text_3;

    // Додає до поточної дати в мілісекундах 10 днів у мілісекундах
    const date_ad_10_deys_1 = date_now_obj.date_time_milliseconds + 864000000;
    const date_ad_10_deys_2 = new Date(date_ad_10_deys_1);
    const date_ad_10_deys_3 = date_ad_10_deys_2.toISOString();
    const date_ad_10_deys_4 = date_ad_10_deys_3.substr(0, 10);
    const date_ad_10_deys_5 = date_ad_10_deys_4.split("-");
    const date_ad_10_deys_6 = date_ad_10_deys_5[2] + "." + date_ad_10_deys_5[1] + "." + date_ad_10_deys_5[0];
    date_now_obj.date_format_text_Ad_10_days = date_ad_10_deys_6;

    return date_now_obj;
}