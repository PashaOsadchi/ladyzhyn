let bicycle_parking_or_added = false;
let markers_bicycle_parking = [];

// Додає на карту велопарковки
function add_map_bicycle_parking_all() {
    if (bicycle_parking_or_added) return delete_bicycle_parking_markers();

    data_bicycle_parking_arr.forEach((el) => {
        overlay = new custom_marker(new google.maps.LatLng(el.latitude, el.longitude), map, {
            marker_id: `10-${el.id}`,
            marker_name: el.name,
            marker_class_name: "marker marker_bicycle_parking",
        });
        markers_bicycle_parking.push(overlay);
    });

    bicycle_parking_or_added = true;

    // Після додавання велопарковок маштабує карту
    map_offset_community_boundary();
}
