function add_map_overlay(data_arr, detailed_information_id, class_name, source_arr) {
    data_arr.forEach((el) => {
        overlay = new custom_marker(new google.maps.LatLng(el.latitude, el.longitude), map, {
            marker_id: `${detailed_information_id}-${el.id}`,
            marker_name: el.name,
            marker_class_name: `marker ${class_name}`,
        });
        source_arr.push(overlay);
    });
}