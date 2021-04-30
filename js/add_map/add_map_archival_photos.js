let archival_photos_or_added = false;
let markers_archival_photos = [];

// Додає на карту білборди
function add_map_archival_photos() {

    if (archival_photos_or_added) {
        return delete_archival_photos_markers();
    }

    for (let i = 0; i < data_archival_photos_arr.length; i++) {
        overlay = new custom_marker(
            new google.maps.LatLng(data_archival_photos_arr[i].latitude, data_archival_photos_arr[i].longitude),
            map,
            {
                marker_id: `13-${data_archival_photos_arr[i].id}`,
                marker_name: data_archival_photos_arr[i].name,
                marker_class_name: 'marker marker_archival_photos'
            }
        );
        markers_archival_photos.push(overlay);
    }

    archival_photos_or_added = true;

    map_offset_community_boundary();
}