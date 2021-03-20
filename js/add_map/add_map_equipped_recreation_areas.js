let equipped_recreation_areas_or_added = false;
let markers_equipped_recreation_areas = [];

// Додає на карту облаштовані зони відпочинку
function add_map_equipped_recreation_areas_all() {

    if (equipped_recreation_areas_or_added) {
        return delete_equipped_recreation_areas_markers();
    }

    for (let i = 0; i < data_equipped_recreation_areas_arr.length; i++) {
        overlay = new custom_marker(
            new google.maps.LatLng(data_equipped_recreation_areas_arr[i].latitude, data_equipped_recreation_areas_arr[i].longitude),
            map,
            {
                marker_id: `5-${data_equipped_recreation_areas_arr[i].id}`,
                marker_name: data_equipped_recreation_areas_arr[i].name,
                marker_class_name: 'marker marker_equipped_recreation_areas'
            }
        );
        markers_equipped_recreation_areas.push(overlay);
    }

    equipped_recreation_areas_or_added = true;

    // Після додавання облаштованих зон відпочинку маштабує карту
    map_offset_community_boundary();
}