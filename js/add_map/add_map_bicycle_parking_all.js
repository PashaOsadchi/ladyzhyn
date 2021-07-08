let bicycle_parking_or_added = false;
let markers_bicycle_parking = [];

// Додає на карту велопарковки
function add_map_bicycle_parking_all() {
    if (bicycle_parking_or_added) return delete_bicycle_parking_markers();

    add_map_overlay(data_bicycle_parking_arr, 10, "marker_bicycle_parking", markers_bicycle_parking);

    bicycle_parking_or_added = true;

    // Після додавання велопарковок маштабує карту
    map_offset_community_boundary();
}
