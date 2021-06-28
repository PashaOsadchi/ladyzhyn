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

    open_openseadragon_master_plan_map();

    open_openseadragon_scheme_engineering_thermal_networks_map();

    // Показує інформацію про спонсорів
    //document.getElementById('id_page_footer').innerHTML = generate_message_sponsors(0);

    //detect_device_platform_2();
});

window.addEventListener("resize", () => {
    // Адаптує висоту вікна
    adaptive_height_body();

    const sidebar = document.getElementById("id_sidebar");

    if (window.innerWidth < 700) {
        // ширина вікна менше 700
        if (!sidebar_hidden) {
            // Бокове меню видиме тому ширина бокового меню дорівнює ширині вікна
            document.body.style.gridTemplateColumns = "0% 1fr";
            sidebar.style.display = "block";
            // Відзначаємо що карта прихована
            map_hidden = true;
        }
    } else {
        // Ширина вікна більше 700
        if (!sidebar_hidden) {
            // Бокове меню видиме тому ширина бокового меню має фіксовану ширину
            document.body.style.gridTemplateColumns = "1fr 350px";
            sidebar.style.display = "block";
            // Відзначаємо що карта видима
            map_hidden = false;
        }
    }
});
