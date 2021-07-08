let bulletin_boards_or_added = false;
let markers_bulletin_boards = [];

// Додає на карту дошки оголошень
function add_map_bulletin_boards_all() {
    if (bulletin_boards_or_added) return delete_bulletin_boards_markers();

    add_map_overlay(data_bulletin_boards_arr, 7, "marker_bulletin_boards", markers_bulletin_boards);

    bulletin_boards_or_added = true;

    // Після додавання дошок оголошень маштабує карту
    map_offset_community_boundary();
}
