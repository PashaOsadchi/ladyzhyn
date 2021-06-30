let settings_obj = {
    close_menu_when_adding_data_to_map: false, // Згортати меню (у мобільні версії сайту) після натискання кнопки яка додає дані на карту
};

// Перевіряє чи є збережені налаштування
function settings_search_for_saved() {
    if (localStorage.getItem("settings_obj")) {
        // Є збережені налаштування

        // Зчитує дані із локального сховища
        read_settings_obj();
    } else {
        // Відсутні збережені налаштування
    }
}

// Зчитує налаштування із локального сховища
function read_settings_obj() {
    const settings_str = localStorage.getItem("settings_obj");
    const obj = JSON.parse(settings_str);
    settings_obj = Object.assign(settings_obj, obj);

    validation_block_close_menu_when_adding_data_to_map();
}

// Відповідно до збережених налаштувань відмічає чекбокс
function validation_block_close_menu_when_adding_data_to_map() {
    document.getElementById("id_close_menu_when_adding_data_to_map").checked = settings_obj.close_menu_when_adding_data_to_map;
}

// Виконується при виборі можливості закривати меню після натискання кнопки яка додає дані на карту
function onchange_checkbox_id_close_menu_when_adding_data_to_map() {
    settings_obj.close_menu_when_adding_data_to_map = document.getElementById("id_close_menu_when_adding_data_to_map").checked;

    // Зберігає налаштування у локальному сховищі
    save_settings_obj();
}

// Зберігає налаштування у локальному сховищі
function save_settings_obj() {
    localStorage.removeItem("settings_obj");
    const settings_str = JSON.stringify(settings_obj);
    localStorage.setItem("settings_obj", settings_str);
}

// Додає обробник події який спрацьовує при натисканні нва кнопки які виводять інформацію на карту
function add_event_listener_class_button_sidebar_add_map() {
    const el_arr = document.querySelectorAll(".button_sidebar_add_map");

    el_arr.forEach((el) =>
        el.addEventListener("click", () => {

            // Змінює колір кнопки
            change_color_show_hide_button(el);

            // В залежності від збережених налаштувань приховує бокове меню
            if (window.innerWidth < 600 && settings_obj.close_menu_when_adding_data_to_map) open_close_sidebar();
        })
    );
}
