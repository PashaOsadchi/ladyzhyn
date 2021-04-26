function open_close_sidebar() {
    const sidebar = document.getElementById("id_sidebar");

    if (sidebar_hidden) {
        // Потрібно показати бокову панель
        if (window.innerWidth < 400) {
            // Ширина екрана менше 400 тому панелі даємо розмір ширини вікна
            document.body.style.gridTemplateColumns = "0% 1fr";
            sidebar.style.display = "block";
            // Відзначаємо що карта прихована
            map_hidden = true;
        } else {
            // Ширина екрана більше 400 тому панелі даємо фіксований розмір
            document.body.style.gridTemplateColumns = "1fr 350px";
            sidebar.style.display = "block";
            // Відзначаємо що карта видима
            map_hidden = false;
        }

        sidebar_hidden = false;
    } else {
        // Потрібно приховати бокову панель

        // Закриває усі details першого рівня
        close_details_all_level_1();

        // Очищає поле пошуку
        id_input_search.value = '';

        // Очищає результати пошуку
        document.querySelector("#id_list_search_parameters").innerHTML = '';

        document.body.style.gridTemplateColumns = "1fr 0%";
        sidebar.style.display = "none";
        map_hidden = false;

        // Відзначаємо що карта видима
        sidebar_hidden = true;

        // Маштабує карту щоб було видно задані кординати
        if (coordinates_map_scaling_obj.lat_1 != 0) {
            setTimeout(() => {
                const point_1 = new google.maps.LatLng(coordinates_map_scaling_obj.lat_1, coordinates_map_scaling_obj.lon_1);
                const point_2 = new google.maps.LatLng(coordinates_map_scaling_obj.lat_2, coordinates_map_scaling_obj.lon_2);
                let bounds = new google.maps.LatLngBounds();
                bounds.extend(point_1);
                bounds.extend(point_2);
                map.fitBounds(bounds);
                coordinates_map_scaling_obj.lat_1 = 0;
                coordinates_map_scaling_obj.lon_1 = 0;
                coordinates_map_scaling_obj.lat_2 = 0;
                coordinates_map_scaling_obj.lon_2 = 0;
            }, 100);
        }

        // Вказує що потрібно продовжити виконання фунції по додаванню теплової карти густини населення у багатоквартирних будинках потрібно після закриття меню
        if (need_continue_map_offset_house_multifamily_after_close_sidebar) {
            setTimeout(() => {
                need_continue_map_offset_house_multifamily_after_close_sidebar = false;
                map_offset_house_multifamily();
            }, 100);
        }

        // Вказує що потрібно продовжити виконання фунції по додаванню теплової карти густини населення у приватних будинках потрібно після закриття меню
        if (need_continue_map_offset_house_private_after_close_sidebar) {
            setTimeout(() => {
                need_continue_map_offset_house_private_after_close_sidebar = false;
                map_offset_house_private();
            }, 100);
        }

    }

    // Toggle працює як перимикач і трансформує зовнішній вигляд меню
    document.getElementById("id_bar_1").classList.toggle("bar_1_change");
    document.getElementById("id_bar_2").classList.toggle("bar_2_change");
    document.getElementById("id_bar_3").classList.toggle("bar_3_change");
}
