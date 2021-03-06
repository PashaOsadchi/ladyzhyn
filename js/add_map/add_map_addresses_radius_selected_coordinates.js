let arr_house_radius_selected_coordinates = [];

// Відображає адреси на карті які знаходяться в радіусі 500 метрів від вибраної адреси
function add_map_addresses_radius_selected_coordinates() {
    if (arr_house_radius_selected_coordinates.length > 0) return open_dialog_error(error_text_19);

    if (last_selected_address_obj.lat == 0 || last_selected_address_obj.lon == 0) return open_dialog_error(error_text_20);

    data_house_arr.forEach(el => {
        const distance = calculate_distance(last_selected_address_obj.lat, last_selected_address_obj.lon, Number(el.latitude), Number(el.longitude));
        if (distance < 500) arr_house_radius_selected_coordinates.push(el);
    });
   
    if (arr_house_radius_selected_coordinates.length == 0) return open_dialog_error(error_text_21);

    arr_house_radius_selected_coordinates.forEach(el => {
        // Знаходить вулицю яка відноситься до даного будинку
        const find_street_arr = data_street_arr.filter((e) => e.street_code == el.house_code_street);
        let full_name_street = find_street_arr[0].street_name;

        // Якщо відмічено що відображати скорочену назву вулиці то скорочує назву геоніму і вулиці
        if (id_display_address_reduction.checked) {
            const arr = full_name_street.split('.');
            const geonym = arr[0].substr(0, 1);
            const street_name = arr[1].substr(0, 4);
            full_name_street = `${geonym}.${street_name}`;
        }
        el.house_name_2 = `${full_name_street} ${el.house_name}`;
    });

    add_overlay_map_house_2(arr_house_radius_selected_coordinates);
    map_offset_human_settlement(selected_code_administrative_unit.human_settlement_code);

    // Маштабує карту
    map_offset_display_addresses_radius_current_coordinates(last_selected_address_obj.lat, last_selected_address_obj.lon);
}