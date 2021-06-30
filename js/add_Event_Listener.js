// Формує перелік команд після завантаження сторінки
document.addEventListener("DOMContentLoaded", () => {
    // При враховуючи ширину екрана приховує або показує бокову панель
    if (window.innerWidth > 700) open_close_sidebar();

    // Формує список пошукових команд
    forms_list_search_commands();

    // Додає населені пункти у список
    add_select_human_settlements();

    // Додає типи організацій у список
    add_select_organization_type();

    // Додає організацій у список
    add_datalist_organization();

    // Додає маршрути у список
    add_select_route_public_transport();

    // Перевіряє чи є збережені налаштування
    settings_search_for_saved();

    // Додає обробник події який спрацьовує при натисканні нва кнопки які виводять інформацію на карту
    add_event_listener_class_button_sidebar_add_map();

    open_openseadragon_master_plan_map();

    open_openseadragon_scheme_engineering_thermal_networks_map();

    // Показує інформацію про спонсорів
    //document.getElementById('id_page_footer').innerHTML = generate_message_sponsors(0);

    //detect_device_platform_2();
});

window.addEventListener("resize", () => {
    // Адаптує висоту вікна
    adaptive_height_body();

    // Адаптує ширину бокового меню
    if (window.innerWidth < 600) {
        if (!sidebar_hidden) assigns_sidebar_window_width();
    } else {
        if (!sidebar_hidden) assigns_sidebar_fixed_width();
    }
});
