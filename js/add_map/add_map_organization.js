// Містить масив маркерів які додаються на карту
let markers_organization = [];

// Відображає на карті всі знайдені організації
function add_map_organization() {
    if (find_organization_arr.length == 0) return open_dialog_error(error_text_24);

    delete_markers_organization();
    add_overlay_map_organization(find_organization_arr);

    // Якщо було знайдено одну організацію то маштабує карту для однієї організації
    if (find_organization_arr.length == 1) return map_offset_selected_organization(organization_arr);

    // Маштабує карту враховуючи видимість декількох організацій
    map_offset_few_organization(find_organization_arr);
}

// Відображає на карті одну вибрану організацію
function add_map_selected_organization() {
    // Визначає вибрану організацію
    const select_organization_selectedIndex = document.getElementById("id_select_found_organization").selectedIndex;
    const select_organization_options = document.getElementById("id_select_found_organization").options;
    const organization_code = select_organization_options[select_organization_selectedIndex].value;

    if (organization_code == "") return open_dialog_error(error_text_25);

    delete_markers_organization();

    const organization_arr = data_organization_arr.filter((e) => e.organization_id == organization_code);

    add_overlay_map_organization(organization_arr);

    // Маштабує карту
    map_offset_selected_organization(organization_arr)
}

// Додає на карту організації
function add_overlay_map_organization(organization_arr) {
    delete_markers_organization();

    for (let i = 0; i < organization_arr.length; i++) {
        overlay = new custom_marker(new google.maps.LatLng(Number(organization_arr[i].organization_latitude), Number(organization_arr[i].organization_longitude)), map, {
            marker_id: `4-${organization_arr[i].organization_id}`,
            marker_name: `${organization_arr[i].organization_id}. ${organization_arr[i].organization_type}: ${organization_arr[i].organization_name}`,
            marker_class_name: 'marker marker_organization'
        });
        markers_organization.push(overlay);
    }
}
