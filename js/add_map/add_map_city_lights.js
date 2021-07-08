let city_lights_or_added = false;
let markers_city_lights = [];

// Додає на карту сітілайти
function add_map_city_lights_all() {
    if (city_lights_or_added) return delete_city_lights_markers();

    add_map_overlay(data_city_lights_arr, 9, "marker_city_lights", markers_city_lights);

    city_lights_or_added = true;

    // Після додавання сітілайтів маштабує карту
    map_offset_community_boundary();
}
