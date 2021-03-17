// https://wicg.github.io/speech-api/

let recognition;
let markers_human_settlement_voice = [];
let markers_house_voice = [];
let markers_entrance_voice = [];

function voice_recognition() {
    recognition.start();
    // open_circles_preloader();
}

// Перевіряє чи браузер підтримує розпізнавання голосу
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    // Відображає кнопку для ведення голосових команд
    document.getElementById("icon_voice_recognition").style.display = "inline";

    recognition = new webkitSpeechRecognition();

    const t_0 = performance.now();

    recognition.lang = "uk";
    // Означає, що коли користувач перестане говорити, розпізнавання мови закінчиться (Якщо встановлено значення false, користувальницький агент повинен повертати не більше одного остаточного результату)
    recognition.continuous = false;
    // Означає, чи повертаються проміжні результати (Якщо встановлено значення true, слід повертати проміжні результати)
    recognition.interimResults = false;

    // Виконується, коли служба розпізнавання почала прослуховувати аудіо з метою розпізнавання.
    recognition.onstart = (e) => {
        // console.log(`1 - recognition started (${performance.now() - t_0})`);
    };

    // Виконується, коли агент користувача починає захоплювати звук.
    recognition.onaudiostart = (e) => {
        // console.log(`2 - audiostart (${performance.now() - t_0})`);
    };

    // Виконується, коли виявлено якийсь звук, можливо, мова.
    recognition.onsoundstart = (e) => {
        // console.log(`3 - soundstart (${performance.now() - t_0})`);
    };

    // Виконується, коли розпочалася мова, яка буде використовуватися для розпізнавання мови.
    recognition.onspeechstart = (e) => {
        // console.log(`4 - speechstart (${performance.now() - t_0})`);
    };

    // Виконується коли служба розпізнавання мови повертає результат
    recognition.onresult = (e) => {
        // id_dialog_circles_preloader.close();

        const results = e.results;
        recognition.stop();
        //recognition.abort();

        const transcript = results[results.length - 1][0].transcript;

        // console.log(`5 - onresult:  (${performance.now() - t_0})`, transcript);
        voice_command_decoding(transcript);
    };

    // Виконується, коли мова, яка буде використана для розпізнавання мови, закінчиться.
    recognition.onspeechend = (e) => {
        // console.log(`6 - speechend (${performance.now() - t_0})`);
        // Метод зупинки представляє вказівку службі розпізнавання припинити прослуховування більше звуку та спробувати повернути результат, використовуючи лише той звук, який він вже отримав для цього розпізнавання.
        recognition.stop();
    };

    // Виконується, коли якийсь звук більше не виявляється
    recognition.onsoundend = (e) => {
        // console.log(`7 - soundend (${performance.now() - t_0})`);
    };

    // Виконується, коли агент користувача завершує зйомку звуку.
    recognition.onaudioend = (e) => {
        // console.log(`8 - audioend (${performance.now() - t_0})`);
    };

    // Виконується, коли послуга відключена. Подія завжди повинна генеруватися, коли сеанс закінчується незалежно від причини закінчення.
    recognition.onend = (e) => {
        // console.log(`9 - recognition stopped (${performance.now() - t_0})`);
    };

    // Виконується коли виникає помилка
    recognition.onerror = (e) => {
        switch (e.error) {
            case "not-allowed":
                open_dialog_error(`Надайте доступ до мікрофону!(${e.error})`);
            case "network":
                open_dialog_error(`Відсутнє інтернет зєднання!(${e.error})`);
            case "no-speech":
                open_dialog_error(`Голос не знайдено!(${e.error})`);
            case "aborted":
                open_dialog_error(`Голосове введення було перерване!(${e.error})`);
            case "audio-capture":
                open_dialog_error(`Не вдалося розпізнати звук!(${e.error})`);
            case "service-not-allowed":
                open_dialog_error(`Користувацький агент забороняє використовувти голосову службу!(${e.error})`);
            case "bad-grammar":
                open_dialog_error(`Помилка в граматиці!(${e.error})`);
            case "language-not-supported":
                open_dialog_error(`Мова не підтримується!(${e.error})`);
            default:
                open_dialog_error(`Невідома помилка! (${e.error})`);
        }
    };
} else {
    open_dialog_error(`Ваший браузер не підтримує розпізнавання голосу! Використовуйте браузер Chrome останньої версії`);
}

/* // Розпізнавання голосу
function voice_recognition() {
    if (!('webkitSpeechRecognition' in window)) {
        return open_dialog_error(`Ваший браузер не підтримує розпізнавання голосу! Використовуйте браузер Chrome останньої версії`);
    };

    const recognition = new webkitSpeechRecognition();

    // setTimeout(() => recognition.stop(), 4000);

    recognition.lang = "uk";
    // Означає, що коли користувач перестане говорити, розпізнавання мови закінчиться
    recognition.continuous = false;
    recognition.interimResults = false;

    // Виконується коли мова перестає виявлятися
    recognition.onspeechend = function() {
        recognition.stop();
    };

    // Виконується коли служба розпізнавання мови повертає результат
    recognition.onresult = function (e) {
        const results = e.results;
        recognition.stop();

        const transcript = results[results.length - 1][0].transcript;
        voice_command_decoding(transcript);
    };

    // Виконується коли виникає помилка
    recognition.onerror = function (e) {
        switch (e.error) {
            case "not-allowed":
                open_dialog_error(`Надайте доступ до мікрофону!(${e.error})`);
            case "network":
                open_dialog_error(`Відсутнє інтернет зєднання!(${e.error})`);
            case "no-speech":
                open_dialog_error(`Голос не знайдено!(${e.error})`);
            case "aborted":
                open_dialog_error(`Голосове введення було перерване!(${e.error})`);
            case "audio-capture":
                open_dialog_error(`Не вдалося розпізнати звук!(${e.error})`);
            case "service-not-allowed":
                open_dialog_error(`Користувацький агент забороняє використовувти голосову службу!(${e.error})`);
            case "bad-grammar":
                open_dialog_error(`Помилка в граматиці!(${e.error})`);
            case "language-not-supported":
                open_dialog_error(`Мова не підтримується!(${e.error})`);
            default:
                open_dialog_error(`Невідома помилка! (${e.error})`);
        };
    };

    recognition.start();
} */

// Декодує голосову команду
function voice_command_decoding(command_str) {
    command_str = command_str.replace("вулиця", "вул");

    // console.log('command_str: ', command_str)
    let house_arr = [];
    let human_settlement_id = 0;
    let street_id = 0;
    let house_id = 0;

    // Шукає населений пункт
    for (let i = 0; i < data_human_settlement_arr.length; i++) {
        const reg = new RegExp(data_human_settlement_arr[i].human_settlement_name_voice_search, "i");

        if (reg.test(command_str)) {
            human_settlement_id = data_human_settlement_arr[i].human_settlement_id;
            break;
        }
    }
    // console.log('human_settlement_id: ', human_settlement_id)

    // Перевіряє чи знайдено населений пункт
    if (human_settlement_id == 0) {
        return open_dialog_error("Населений пункт не знайдено! Спробуйте ще раз.");
    }

    // Відфільтровує вулиці знайденого населеного пункту
    const street_settlement_arr = data_street_arr.filter(function (e) {
        return e.street_human_settlement_code == human_settlement_id;
    });

    // Шукає вулицю
    for (let i = 0; i < street_settlement_arr.length; i++) {
        const reg = new RegExp(street_settlement_arr[i].street_voice_search, "i");

        if (reg.test(command_str)) {
            street_id = street_settlement_arr[i].street_id;
            break;
        }
    }
    // console.log('street_id: ', street_id)

    // Перевіряє чи знайдено вулицю
    if (street_id == 0) {
        //Відображає на карті центр населеного пункту
        const human_settlement_arr = data_human_settlement_arr.filter((e) => e.human_settlement_id == human_settlement_id);
        return add_map_human_settlement_voice(human_settlement_arr);
    }

    // Шукає будинок (після слова будинок + пробіл знаходить число)]
    if (/буд /i.test(command_str) || /будинок /i.test(command_str)) {
        // Якщо зайдено слово будинок то шукає номер будинку із вибраної вулиці
        // Відфільтровує будинки знайденого населеного пункту
        house_arr = data_house_arr.filter(function (e) {
            return e.house_code_street == street_id;
        });

        // Шукає будинок
        for (let i = 0; i < house_arr.length; i++) {
            const str = ` ${house_arr[i].house_name}$`;
            const reg = new RegExp(str, "i");

            if (reg.test(command_str)) {
                house_id = house_arr[i].house_id;
                break;
            }
        }
        // console.log('house_id: ', house_id)

        // Якщо вказаний номер будинку не знайдений то повертає помилку
        if (house_id == 0) {
            return open_dialog_error("Вказаний номер будинку не знайдено! Спробуйте ще раз.");
        }

        house_arr = data_house_arr.filter(function (e) {
            return e.house_id == house_id;
        });
        add_map_house_voice(house_arr);
    } else {
        // Якщо слово будинок не знайдено то відображає всі адреси вулиці
        house_arr = data_house_arr.filter(function (e) {
            return e.house_code_street == street_id;
        });
        add_map_street_voice(house_arr);
    }
}

// Додає на карту центр населеного пункту
function add_map_human_settlement_voice(human_settlement_arr) {
    // Видаляє попередньо додані маркери
    removes_previously_added_markers();

    overlay = new custom_marker(new google.maps.LatLng(human_settlement_arr[0].human_settlement_latitude, human_settlement_arr[0].human_settlement_longitude), map, {
        marker_id: `11-${human_settlement_arr[0].human_settlement_id}`,
        marker_name: human_settlement_arr[0].human_settlement_short_name,
        marker_class_name: "marker marker_center_human_settlement",
    });
    markers_human_settlement_voice.push(overlay);

    // Відповідно до вибраного населеного пункту маштабує карту
    map_offset_human_settlement(human_settlement_arr[0].human_settlement_id);
}

// Додає на карту усі адреси вулиці
function add_map_street_voice(house_arr) {
    // Видаляє попередньо додані маркери
    removes_previously_added_markers();

    // Додає будинки на карту
    for (let i = 0; i < house_arr.length; i++) {
        overlay = new custom_marker(new google.maps.LatLng(Number(house_arr[i].house_latitude), Number(house_arr[i].house_longitude)), map, {
            marker_id: `1-${house_arr[i].house_id}`,
            marker_name: house_arr[i].house_name,
            marker_class_name: "marker marker_house",
        });
        markers_house_voice.push(overlay);
    }

    // Додає підїзди на карту
    for (let i_1 = 0; i_1 < house_arr.length; i_1++) {
        // Завантажує підїзди
        const entrance_arr = data_entrance_arr.filter(function (e) {
            return e.entrance_code_house == house_arr[i_1].house_id;
        });

        for (let i = 0; i < entrance_arr.length; i++) {
            overlay = new custom_marker(new google.maps.LatLng(Number(entrance_arr[i].entrance_latitude), Number(entrance_arr[i].entrance_longitude)), map, {
                marker_id: `2-${entrance_arr[i].entrance_id}`,
                marker_name: `${entrance_arr[i].entrance_first_apartment_entrance}-${entrance_arr[i].entrance_last_apartment_entrance}`,
                marker_class_name: "marker marker_entrance",
            });
            markers_entrance_voice.push(overlay);
        }
    }

    // Відповідно до вибраної вулиці маштабує карту
    map_offset(house_arr);
}

// Додає на карту аресу одного будинку
function add_map_house_voice(house_arr) {
    // Видаляє попередньо додані маркери
    removes_previously_added_markers();

    overlay = new custom_marker(new google.maps.LatLng(Number(house_arr[0].house_latitude), Number(house_arr[0].house_longitude)), map, {
        marker_id: `1-${house_arr[0].house_id}`,
        marker_name: house_arr[0].house_name,
        marker_class_name: "marker marker_house",
    });
    markers_house_voice.push(overlay);

    // Завантажує підїзди
    const entrance_arr = data_entrance_arr.filter(function (e) {
        return e.entrance_code_house == house_arr[0].house_id;
    });

    for (let i = 0; i < entrance_arr.length; i++) {
        overlay = new custom_marker(new google.maps.LatLng(Number(entrance_arr[i].entrance_latitude), Number(entrance_arr[i].entrance_longitude)), map, {
            marker_id: `2-${entrance_arr[i].entrance_id}`,
            marker_name: `${entrance_arr[i].entrance_first_apartment_entrance}-${entrance_arr[i].entrance_last_apartment_entrance}`,
            marker_class_name: "marker marker_entrance",
        });
        markers_entrance_voice.push(overlay);
    }

    // Після додавання будинку маштабує карту
    map.panTo(new google.maps.LatLng(Number(house_arr[0].house_latitude), Number(house_arr[0].house_longitude)));
    map.setZoom(19);
}

// Видаляє попередньо додані маркери
function removes_previously_added_markers() {
    // Видаляє попередній маркер центра населеного пункту
    for (let i = 0; i < markers_human_settlement_voice.length; i++) {
        markers_human_settlement_voice[i].remove();
        markers_human_settlement_voice[i].setMap(null);
    }
    markers_human_settlement_voice = [];

    // Видаляє попередній маркер будинків
    for (let i = 0; i < markers_house_voice.length; i++) {
        markers_house_voice[i].remove();
        markers_house_voice[i].setMap(null);
    }
    markers_house_voice = [];

    // Видаляє попередній маркер підїздів
    for (let i = 0; i < markers_entrance_voice.length; i++) {
        markers_entrance_voice[i].remove();
        markers_entrance_voice[i].setMap(null);
    }
    markers_entrance_voice = [];
}
