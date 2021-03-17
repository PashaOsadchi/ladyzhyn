let bicycle_parking_or_added = false;
let markers_bicycle_parking = [];

// Додає на карту велопарковки
function add_map_bicycle_parking_all() {

    if (bicycle_parking_or_added) {
        bicycle_parking_or_added = false;
        
        // Видаляє маркери
        for (let i = 0; i < markers_bicycle_parking.length; i++) {
            markers_bicycle_parking[i].remove();
            markers_bicycle_parking[i].setMap(null);
        }
        markers_bicycle_parking = [];
        return
    }

    for (let i = 0; i < data_bicycle_parking_arr.length; i++) {
        overlay = new custom_marker(
            new google.maps.LatLng(data_bicycle_parking_arr[i].latitude, data_bicycle_parking_arr[i].longitude),
            map,
            {
                marker_id: `10-${data_bicycle_parking_arr[i].id}`,
                marker_name: data_bicycle_parking_arr[i].name,
                marker_class_name: 'marker marker_bicycle_parking'
            }
        );
        markers_bicycle_parking.push(overlay);
    }

    bicycle_parking_or_added = true;

    // Після додавання велопарковок маштабує карту
    map_offset_community_boundary();
}