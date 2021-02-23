// https://developers.google.com/maps/documentation/javascript/markers#remove

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

function delete_list_waypoints() {
    document.getElementById("id_list_waypoints").innerHTML = '';
    delete_route();
    waypoints_arr = [];
    waypoints_full_arr = [];
}