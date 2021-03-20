let bulletin_boards_or_added = false;
let markers_bulletin_boards = [];

// Додає на карту дошки оголошень
function add_map_bulletin_boards_all() {

    if (bulletin_boards_or_added) {
        return delete_bulletin_boards_markers();
    }

    for (let i = 0; i < data_bulletin_boards_arr.length; i++) {
        overlay = new custom_marker(
            new google.maps.LatLng(data_bulletin_boards_arr[i].latitude, data_bulletin_boards_arr[i].longitude),
            map,
            {
                marker_id: `7-${data_bulletin_boards_arr[i].id}`,
                marker_name: data_bulletin_boards_arr[i].name,
                marker_class_name: 'marker marker_bulletin_boards'
            }
        );
        markers_bulletin_boards.push(overlay);
    }

    bulletin_boards_or_added = true;

    // Після додавання дошок оголошень маштабує карту
    map_offset_community_boundary();
}