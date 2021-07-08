let billboards_or_added = false;
let markers_billboards = [];

// Додає на карту білборди
function add_map_billboards_all() {
    if (billboards_or_added) return delete_billboards_markers();

    add_map_overlay(data_billboards_arr, 8, "marker_billboards", markers_billboards);

    billboards_or_added = true;

    // Після додавання білбордів маштабує карту
    map_offset_community_boundary();
}
