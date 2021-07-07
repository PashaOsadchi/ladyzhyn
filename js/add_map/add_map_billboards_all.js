let billboards_or_added = false;
let markers_billboards = [];

// Додає на карту білборди
function add_map_billboards_all() {

    if (billboards_or_added) return delete_billboards_markers();

    data_billboards_arr.forEach(el => {
        overlay = new custom_marker(
            new google.maps.LatLng(el.latitude, el.longitude),
            map,
            {
                marker_id: `8-${el.id}`,
                marker_name: el.name,
                marker_class_name: 'marker marker_billboards'
            }
        );
        markers_billboards.push(overlay);
    });

    billboards_or_added = true;

    // Після додавання білбордів маштабує карту
    map_offset_community_boundary();
}