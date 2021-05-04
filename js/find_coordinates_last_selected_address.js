// Знаходить кординати останньої вибраної адреси
function find_coordinates_last_selected_address() {
    let str;
    selected_code_administrative_unit.human_settlement_code >= 1 ? str = '1,' : str = '0,';
    selected_code_administrative_unit.street_code >= 1 ? str += '1,' : str += '0,';
    selected_code_administrative_unit.house_code >= 1 ? str += '1,' : str += '0,';
    selected_code_administrative_unit.entrance_code >= 1 ? str += '1,' : str += '0,';
    selected_code_administrative_unit.apartment_code >= 1 ? str += '1' : str += '0';

    switch (str) {
        case '1,0,0,0,0': // Всі адреси населеного пункту
            // Знаходить кординати вибраного населеного пункту
            const arr_human_settlement = data_human_settlement_arr.filter((e) => e.human_settlement_id == selected_code_administrative_unit.human_settlement_code);
            last_selected_address_obj.lat = Number(arr_human_settlement[0].human_settlement_latitude);
            last_selected_address_obj.lon = Number(arr_human_settlement[0].human_settlement_longitude);
            break;
        case '1,1,0,0,0':  // Всі адреси вулиці
            const arr_house_2 = data_house_arr.filter((e) => e.house_code_street == selected_code_administrative_unit.street_code);

            // Знаходить кординати першого будинку на вулиці
            last_selected_address_obj.lat = Number(arr_house_2[0].latitude);
            last_selected_address_obj.lon = Number(arr_house_2[0].longitude);
            break;
        case '1,1,1,0,0':  // Адреса будинку
            const arr_house_3 = data_house_arr.filter((e) => e.house_id == selected_code_administrative_unit.house_code);
            
            // Знаходить кординати будинку
            last_selected_address_obj.lat = Number(arr_house_3[0].latitude);
            last_selected_address_obj.lon = Number(arr_house_3[0].longitude);
            break;
        case '1,1,1,1,0':  // Адреса підїзду
            const entrance_arr_1 = data_entrance_arr.filter((e) => e.entrance_id == selected_code_administrative_unit.entrance_code);

            // Знаходить кординати підїзду
            last_selected_address_obj.lat = Number(entrance_arr_1[0].entrance_latitude);
            last_selected_address_obj.lon = Number(entrance_arr_1[0].entrance_longitude);
            break;
        case '1,1,1,1,1':  // Адреса квартири
            const entrance_arr_2 = data_entrance_arr.filter((e) => e.entrance_id == selected_code_administrative_unit.entrance_code);

            // Знаходить кординати підїзду
            last_selected_address_obj.lat = Number(entrance_arr_2[0].entrance_latitude);
            last_selected_address_obj.lon = Number(entrance_arr_2[0].entrance_longitude);
            break;
        default:
            open_dialog_error(error_text_26);
            break;
    }
}