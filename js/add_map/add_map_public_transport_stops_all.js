let public_transport_stops_all_or_added = false;
let markers_public_transport_stops = [];

// Додає на карту зупинки громадського транспорту
function add_map_public_transport_stops_all() {
    if (public_transport_stops_all_or_added) return delete_public_transport_stops_markers();

    add_map_overlay(data_public_transport_stops_arr, 6, "marker_public_transport_stops", markers_public_transport_stops);

    public_transport_stops_all_or_added = true;

    // Після додавання зупинок громадського транспорту маштабує карту
    map_offset_community_boundary();
}
