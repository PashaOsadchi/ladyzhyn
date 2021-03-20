let city_lights_or_added = false;
let markers_city_lights = [];

// Додає на карту сітілайти
function add_map_city_lights_all() {

    if (city_lights_or_added) {
        return delete_city_lights_markers();
    }

    for (let i = 0; i < data_city_lights_arr.length; i++) {
        overlay = new custom_marker(
            new google.maps.LatLng(data_city_lights_arr[i].latitude, data_city_lights_arr[i].longitude),
            map,
            {
                marker_id: `9-${data_city_lights_arr[i].id}`,
                marker_name: data_city_lights_arr[i].name,
                marker_class_name: 'marker marker_city_lights'
            }
        );
        markers_city_lights.push(overlay);
    }

    city_lights_or_added = true;

    // Після додавання сітілайтів маштабує карту
    map_offset_community_boundary();
}