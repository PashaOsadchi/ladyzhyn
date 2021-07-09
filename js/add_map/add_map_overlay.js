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

function add_map_overlay_organization(data_arr) {
    data_arr.forEach(el => {
        let marker_name = `${el.organization_id}. ${el.organization_type}: ${el.organization_name}`
        if (el.organization_phone_2) marker_name = `✆ ${marker_name}`

        overlay = new custom_marker(new google.maps.LatLng(Number(el.latitude), Number(el.longitude)), map, {
            marker_id: `4-${el.organization_id}`,
            marker_name: marker_name,
            marker_class_name: 'marker marker_organization'
        });
        markers_organization.push(overlay);
    });
}

function add_map_overlay_expanded(data_arr, detailed_information_id, property_name_latitude, property_name_longitude, property_name_id, property_name_name, class_name, source_arr) {
    data_arr.forEach((el) => {
        overlay = new custom_marker(new google.maps.LatLng(el[property_name_latitude], el[property_name_longitude]), map, {
            marker_id: `${detailed_information_id}-${el[property_name_id]}`,
            marker_name: el[property_name_name],
            marker_class_name: `marker ${class_name}`,
        });
        source_arr.push(overlay);
    });
}

function add_map_overlay_entrance(data_arr) {
    data_arr.forEach(el => {
        overlay = new custom_marker(new google.maps.LatLng(Number(el.entrance_latitude), Number(el.entrance_longitude)), map, {
            marker_id: `2-${el.entrance_id}`,
            marker_name: `${el.entrance_first_apartment_entrance}-${el.entrance_last_apartment_entrance}`,
            marker_class_name: "marker marker_entrance",
        });
        markers_entrance_voice.push(overlay);
    });
}

function add_map_overlay_one_expanded(data_arr, detailed_information_id, property_name_latitude, property_name_longitude, property_name_id, property_name_name, class_name, source_arr) {

        overlay = new custom_marker(new google.maps.LatLng(data_arr[property_name_latitude], data_arr[property_name_longitude]), map, {
            marker_id: `${detailed_information_id}-${data_arr[property_name_id]}`,
            marker_name: data_arr[property_name_name],
            marker_class_name: `marker ${class_name}`,
        });
        source_arr.push(overlay);
}