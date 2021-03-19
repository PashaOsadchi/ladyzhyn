// https://developers.google.com/maps/documentation/javascript/markers#remove

function delete_markers_all() {
    delete_markers();
    delete_markers_organization();
    delete_markers_route();
    delete_route();
    delete_voice_search_address_markers();
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
};

// Видаляє маркери організацій із карти
function delete_markers_organization() {
    for (let i = 0; i < markers_organization.length; i++) {
        markers_organization[i].remove();
        markers_organization[i].setMap(null);
    }
};

// Видаляє маркери маршрутних точок із карти
function delete_markers_route() {
    for (let i = 0; i < markers_route.length; i++) {
        markers_route[i].remove();
        markers_route[i].setMap(null);
    }
};

// Видаляє маршрут із карти
function delete_route() {
    //directionsDisplay.setDirections({routes: []});
    directionsDisplay.setMap(null);
    
    // Якщо потрібно видалити маршрут повністю
    //waypoints_arr = [];
    //waypoints_full_arr = [];

    delete_markers_route();
    markers_route = [];
};

// Очищає список із маршрутними точками
function delete_list_waypoints() {
    document.getElementById("id_list_waypoints").innerHTML = '';
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