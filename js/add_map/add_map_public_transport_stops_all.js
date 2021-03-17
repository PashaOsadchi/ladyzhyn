let public_transport_stops_all_or_added = false;
let markers_public_transport_stops = [];

// Додає на карту зупинки громадського транспорту
function add_map_public_transport_stops_all() {

    if (public_transport_stops_all_or_added) {
        public_transport_stops_all_or_added = false;
        
        // Видаляє маркери
        for (let i = 0; i < markers_public_transport_stops.length; i++) {
            markers_public_transport_stops[i].remove();
            markers_public_transport_stops[i].setMap(null);
        }
        markers_public_transport_stops = [];
        return
    }

    for (let i = 0; i < data_public_transport_stops_arr.length; i++) {
        overlay = new custom_marker(
            new google.maps.LatLng(data_public_transport_stops_arr[i].latitude, data_public_transport_stops_arr[i].longitude),
            map,
            {
                marker_id: `6-${data_public_transport_stops_arr[i].id}`,
                marker_name: data_public_transport_stops_arr[i].name,
                marker_class_name: 'marker marker_public_transport_stops'
            }
        );
        markers_public_transport_stops.push(overlay);
    }

    public_transport_stops_all_or_added = true;

    // Після додавання зупинок громадського транспорту маштабує карту
    map_offset_community_boundary();
}