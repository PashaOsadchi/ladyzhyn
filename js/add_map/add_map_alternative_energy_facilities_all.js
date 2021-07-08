let alternative_energy_facilities_or_added = false;
let markers_alternative_energy_facilities = [];

// Додає на карту об'єкти альтернативної енергетики
function add_map_alternative_energy_facilities_all() {
    if (alternative_energy_facilities_or_added) return delete_alternative_energy_facilities_markers();

    add_map_overlay(data_alternative_energy_facilities_arr, 12, "marker_alternative_energy_facilities", markers_alternative_energy_facilities);

    alternative_energy_facilities_or_added = true;

    // Після додавання об'єктів альтернативної енергетики маштабує карту
    map_offset_community_boundary();
}
