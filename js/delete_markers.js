// https://developers.google.com/maps/documentation/javascript/markers#remove

function delete_markers_all() {
    delete_markers();
    delete_markers_organization();
    delete_markers_route();
    delete_route();
    delete_voice_search_address_markers();
    delete_alternative_energy_facilities_markers();
    delete_bicycle_parking_markers();
    delete_billboards_markers();
    delete_bulletin_boards_markers();
    delete_city_lights_markers();
    delete_equipped_recreation_areas_markers();
    delete_public_transport_stops_markers();
    delete_recreation_areas_markers();
    delete_route_public_transport_markers();
    delete_parking_space_markers();

    // Змінює колір кнопок
    const elements = document.querySelectorAll('.button_sidebar_add_map');
    for (let element of elements) element.style.backgroundColor = 'rgba(102, 255, 0, 0.6)';
}

// Видаляє маркери адрес із карти
function delete_markers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].remove();
        markers[i].setMap(null);
    }
    markers = [];

    arr_house_radius_current_coordinates = [];
    arr_house_radius_selected_coordinates = [];

    for (let i = 0; i < marker_current_coordinates_arr.length; i++) {
        marker_current_coordinates_arr[i].setMap(null);
    }
    marker_current_coordinates_arr = [];
}

// Видаляє маркери організацій із карти
function delete_markers_organization() {
    for (let i = 0; i < markers_organization.length; i++) {
        markers_organization[i].remove();
        markers_organization[i].setMap(null);
    }
}

// Видаляє маркери маршрутних точок із карти
function delete_markers_route() {
    for (let i = 0; i < markers_route.length; i++) {
        markers_route[i].remove();
        markers_route[i].setMap(null);
    }
}

// Видаляє маршрут із карти
function delete_route() {
    //directionsDisplay.setDirections({routes: []});
    directionsDisplay.setMap(null);

    // Якщо потрібно видалити маршрут повністю
    //waypoints_arr = [];
    //waypoints_full_arr = [];

    delete_markers_route();
    markers_route = [];
}

// Очищає список із маршрутними точками
function delete_list_waypoints() {
    document.getElementById("id_list_waypoints").innerHTML = "";
    delete_route();
    waypoints_arr = [];
    waypoints_full_arr = [];
}

// Видаляє маркери адрес знайдені за допомогою голосового пошуку
function delete_voice_search_address_markers() {
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

// Видаляє маркери адрес об'єктів альтернативної енергетики
function delete_alternative_energy_facilities_markers() {
    alternative_energy_facilities_or_added = false;

    // Видаляє маркери
    for (let i = 0; i < markers_alternative_energy_facilities.length; i++) {
        markers_alternative_energy_facilities[i].remove();
        markers_alternative_energy_facilities[i].setMap(null);
    }
    markers_alternative_energy_facilities = [];
}

// Видаляє маркери велопарковок
function delete_bicycle_parking_markers() {
    bicycle_parking_or_added = false;

    // Видаляє маркери
    for (let i = 0; i < markers_bicycle_parking.length; i++) {
        markers_bicycle_parking[i].remove();
        markers_bicycle_parking[i].setMap(null);
    }
    markers_bicycle_parking = [];
}

// Видаляє маркери білбордів
function delete_billboards_markers() {
    billboards_or_added = false;

    // Видаляє маркери
    for (let i = 0; i < markers_billboards.length; i++) {
        markers_billboards[i].remove();
        markers_billboards[i].setMap(null);
    }
    markers_billboards = [];
}

// Видаляє маркери дошок оголошень
function delete_bulletin_boards_markers() {
    bulletin_boards_or_added = false;

    // Видаляє маркери
    for (let i = 0; i < markers_bulletin_boards.length; i++) {
        markers_bulletin_boards[i].remove();
        markers_bulletin_boards[i].setMap(null);
    }
    markers_bulletin_boards = [];
}

// Видаляє маркери сіті лайтів
function delete_city_lights_markers() {
    city_lights_or_added = false;

    // Видаляє маркери
    for (let i = 0; i < markers_city_lights.length; i++) {
        markers_city_lights[i].remove();
        markers_city_lights[i].setMap(null);
    }
    markers_city_lights = [];
}

// Видаляє маркери облаштовані зони відпочинку
function delete_equipped_recreation_areas_markers() {
    equipped_recreation_areas_or_added = false;

    // Видаляє маркери
    for (let i = 0; i < markers_equipped_recreation_areas.length; i++) {
        markers_equipped_recreation_areas[i].remove();
        markers_equipped_recreation_areas[i].setMap(null);
    }
    markers_equipped_recreation_areas = [];
}

// Видаляє маркери зупинки громадського транспорту
function delete_public_transport_stops_markers() {
    public_transport_stops_all_or_added = false;

    // Видаляє маркери
    for (let i = 0; i < markers_public_transport_stops.length; i++) {
        markers_public_transport_stops[i].remove();
        markers_public_transport_stops[i].setMap(null);
    }
    markers_public_transport_stops = [];
}

// Видаляє маркери зони відпочинку
function delete_recreation_areas_markers() {
    // Видаляє зони відпочинку
    for (let i = 0; i < areas_recreation_arr.length; i++) {
        areas_recreation_arr[i].setMap(null);
    }
    areas_recreation_arr = [];
}

// Видаляє маркери маршрут руху громадського транспорту
function delete_route_public_transport_markers() {
    if (polyline_route_public_transport_arr.length) {
        // Видаляє межі усіх населених пунктів
        for (let i = 0; i < polyline_route_public_transport_arr.length; i++) {
            polyline_route_public_transport_arr[i].setMap(null);
        }
        polyline_route_public_transport_arr = [];
    }
}

// Видаляє маркери об'єкти паркувального простору
function delete_parking_space_markers() {
    // Видаляє об'єкти паркувального простору
    for (let i = 0; i < parking_space_arr.length; i++) {
        parking_space_arr[i].setMap(null);
    }
    parking_space_arr = [];
}
