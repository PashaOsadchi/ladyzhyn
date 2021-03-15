let alternative_energy_facilities_or_added = false;
let markers_alternative_energy_facilities = [];

// Додає на карту велопарковки
function add_map_alternative_energy_facilities_all() {

    if (alternative_energy_facilities_or_added) {
        alternative_energy_facilities_or_added = false;
        
        // Видаляє маркери
        for (let i = 0; i < markers_alternative_energy_facilities.length; i++) {
            markers_alternative_energy_facilities[i].remove();
            markers_alternative_energy_facilities[i].setMap(null);
        }
        markers_alternative_energy_facilities = [];
        return
    }

    for (let i = 0; i < data_alternative_energy_facilities_arr.length; i++) {
        overlay = new custom_marker(
            new google.maps.LatLng(data_alternative_energy_facilities_arr[i].latitude, data_alternative_energy_facilities_arr[i].longitude),
            map,
            {
                marker_id: `12-${data_alternative_energy_facilities_arr[i].id}`,
                marker_name: data_alternative_energy_facilities_arr[i].name,
                marker_class_name: 'marker marker_alternative_energy_facilities'
            }
        );
        markers_alternative_energy_facilities.push(overlay);
    }

    alternative_energy_facilities_or_added = true;

    // Після додавання велопарковок маштабує карту
    map_offset_community_boundary();
}