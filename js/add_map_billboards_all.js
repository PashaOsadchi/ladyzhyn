let billboards_or_added = false;
let markers_billboards = [];

// Додає на карту білборди
function add_map_billboards_all() {

    if (billboards_or_added) {
        billboards_or_added = false;
        
        // Видаляє маркери
        for (let i = 0; i < markers_billboards.length; i++) {
            markers_billboards[i].remove();
            markers_billboards[i].setMap(null);
        }
        markers_billboards = [];
        return
    }

    for (let i = 0; i < data_billboards_arr.length; i++) {
        overlay = new custom_marker(
            new google.maps.LatLng(data_billboards_arr[i].latitude, data_billboards_arr[i].longitude),
            map,
            {
                marker_id: `8-${data_billboards_arr[i].id}`,
                marker_name: data_billboards_arr[i].name,
                marker_class_name: 'marker marker_billboards'
            }
        );
        markers_billboards.push(overlay);
    }

    billboards_or_added = true;

    // Після додавання білбордів маштабує карту
    map_offset_community_boundary();
}