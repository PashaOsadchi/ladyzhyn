async function add_map_addresses() {
    delete_markers();

    let str;
    selected_code_administrative_unit.human_settlement_code >= 1 ? str = '1,' : str = '0,';
    selected_code_administrative_unit.street_code >= 1 ? str += '1,' : str += '0,';
    selected_code_administrative_unit.house_code >= 1 ? str += '1,' : str += '0,';
    selected_code_administrative_unit.entrance_code >= 1 ? str += '1,' : str += '0,';
    selected_code_administrative_unit.apartment_code >= 1 ? str += '1' : str += '0';

    switch (str) {
        case '1,0,0,0,0': // Всі адреси населеного пункту

            if (selected_code_administrative_unit.human_settlement_code == 1) return open_dialog_error(error_text_22);

            let arr_house_1 = data_house_arr.filter((e) => e.house_human_settlement_code == selected_code_administrative_unit.human_settlement_code);
            // Додає до номера будинку назву вулиці
            arr_house_1.forEach(el => {
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

            add_overlay_map_house_2(arr_house_1);
            map_offset_human_settlement(selected_code_administrative_unit.human_settlement_code);
            break;
        case '1,1,0,0,0':  // Всі адреси вулиці
            const arr_house_2 = data_house_arr.filter((e) => e.house_code_street == selected_code_administrative_unit.street_code);
            add_overlay_map_house(arr_house_2);
            map_offset(arr_house_2);
            break;
        case '1,1,1,0,0':  // Адреса будинку
            const arr_house_3 = data_house_arr.filter((e) => e.house_id == selected_code_administrative_unit.house_code);

            // Якщо будинок багатоквартирний то додатково відображає підїзди
            if (arr_house_3[0].house_multifamily) {
                entrance_arr = data_entrance_arr.filter((e) => e.entrance_code_house == selected_code_administrative_unit.house_code);
                add_overlay_map_entrance(entrance_arr);
            }

            add_overlay_map_house(arr_house_3);

            map.panTo(new google.maps.LatLng(arr_house_3[0].latitude, arr_house_3[0].longitude));
            map.setZoom(19);
            break;
        case '1,1,1,1,0':  // Адреса підїзду
            const entrance_arr_1 = data_entrance_arr.filter((e) => e.entrance_id == selected_code_administrative_unit.entrance_code);
            add_overlay_map_entrance(entrance_arr_1);

            map.panTo(new google.maps.LatLng(entrance_arr_1[0].entrance_latitude, entrance_arr_1[0].entrance_longitude));
            map.setZoom(19);
            break;
        case '1,1,1,1,1':  // Адреса квартири
            const entrance_arr_2 = data_entrance_arr.filter((e) => e.entrance_id == selected_code_administrative_unit.entrance_code);
            const apartment_arr_1 = data_apartment_arr.filter((e) => e.id == selected_code_administrative_unit.apartment_code);
            add_overlay_map_apartment(apartment_arr_1, entrance_arr_2);

            map.panTo(new google.maps.LatLng(entrance_arr_2[0].entrance_latitude, entrance_arr_2[0].entrance_longitude));
            map.setZoom(19);
            break;
        default:
            open_dialog_error(error_text_23);
            break;
    }
};

// Додає на карту будинки
function add_overlay_map_house(arr) {
    arr.forEach(el => {
        overlay = new custom_marker(
            new google.maps.LatLng(Number(el.latitude), Number(el.longitude)),
            map,
            {
                marker_id: `1-${el.house_id}`,
                marker_name: el.house_name,
                marker_class_name: 'marker marker_house'
            }
        );
        markers.push(overlay);
    });
}

// Додає на карту будинки (виправляє помилку подвійної назви вулиці)
function add_overlay_map_house_2(arr) {
    arr.forEach(el => {
        overlay = new custom_marker(
            new google.maps.LatLng(Number(el.latitude), Number(el.longitude)),
            map,
            {
                marker_id: `1-${el.house_id}`,
                marker_name: el.house_name_2,
                marker_class_name: 'marker marker_house'
            }
        );
        markers.push(overlay);
    });
}

// Додає на карту підїзд
function add_overlay_map_entrance(entrance_arr) {
    entrance_arr.forEach(el => {
        overlay = new custom_marker(
            new google.maps.LatLng(Number(el.entrance_latitude), Number(el.entrance_longitude)),
            map,
            {
                marker_id: `2-${el.entrance_id}`,
                marker_name: `${el.entrance_first_apartment_entrance}-${el.entrance_last_apartment_entrance}`,
                marker_class_name: 'marker marker_entrance'
            }
        );
        markers.push(overlay);
    });
}

// Додає на карту квартиру
function add_overlay_map_apartment(apartment_arr, entrance_arr) {
    apartment_arr.forEach((el, i) => {
        overlay = new custom_marker(
            new google.maps.LatLng(Number(entrance_arr[i].entrance_latitude), Number(entrance_arr[i].entrance_longitude)),
            map,
            {
                marker_id: `3-${el.id}`,
                marker_name: el.name,
                marker_class_name: 'marker marker_apartment'
            }
        );
        markers.push(overlay);
    });
}

// Додає на карту усі багатоквартирні будинки
function add_overlay_map_house_multifamily_all() {
    delete_markers();
    
    let arr_house = data_house_arr.filter((e) => e.house_multifamily == true);

    // Додає до номера будинку назву вулиці
    arr_house.forEach(el => {
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
    
    add_overlay_map_house_2(arr_house);
    map_offset_community_boundary();
}