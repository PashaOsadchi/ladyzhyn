let equipped_recreation_areas_or_added = false;
let markers_equipped_recreation_areas = [];

// Додає на карту облаштовані зони відпочинку
function add_map_equipped_recreation_areas_all() {
    if (equipped_recreation_areas_or_added) return delete_equipped_recreation_areas_markers();

    add_map_overlay(data_equipped_recreation_areas_arr, 5, "marker_equipped_recreation_areas", markers_equipped_recreation_areas);

    equipped_recreation_areas_or_added = true;

    // Після додавання облаштованих зон відпочинку маштабує карту
    map_offset_community_boundary();
}
