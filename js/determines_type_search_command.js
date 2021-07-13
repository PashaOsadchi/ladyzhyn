// Визначає тип пошукової команди
function determines_type_search_command(command_str, search_source) {
    // Видаляє всі накладення на карті
    delete_all_overlay_maps();

    command_str = command_str.replace("вулиця", "вул");
    // console.log('command_str: ', command_str)

    let voice_search_command_id = 0;
    let voice_search_command_name = "";

    let human_settlement_id = 0;
    let human_settlement_name_voice_search = "";

    let organization_type_id = 0;
    let organization_type = "";

    let organization_id = 0;
    let organization_name = "";

    // Шукає основну команду
    data_voice_search_commands_arr.forEach(el_1 => {
        el_1.voice_search.forEach(el_2 => {
            const reg = new RegExp(`^${el_2}`, "i");

            if (reg.test(command_str)) {
                // Знаходить найдовший текст який відповідає пошуку
                if (el_1.name.length > voice_search_command_name.length) {
                    voice_search_command_id = el_1.id;
                    voice_search_command_name = el_1.name;
                }
            }
        
        });
    });
    //console.log(`Основна команда: ${command_str} - ${voice_search_command_id} - ${voice_search_command_name}`)

    // Шукає адресу (населений пункт)
    data_human_settlement_arr.forEach(el => {
        const reg = new RegExp(`^${el.human_settlement_name_voice_search}`, "i");

        if (reg.test(command_str)) {
            human_settlement_id = el.human_settlement_id;
            human_settlement_name_voice_search = el.human_settlement_name_voice_search;
            return;
        }
    });
    //console.log(`Адреса: ${command_str} - ${human_settlement_id} - ${human_settlement_name_voice_search}`)

    // Шукає тип організації
    data_organization_type_arr.forEach(el_1 => {
        el_1.voice_search.forEach(el_2 => {
            const reg = new RegExp(`^${el_2}`, "i");

            if (reg.test(command_str)) {
                organization_type_id = el_1.organization_id;
                organization_type = el_1.organization_name;
                return;
            }
        });
    });
    //console.log(`Типи організацій: ${command_str} - ${organization_type_id} - ${organization_type}`)

    // Шукає організації
    data_organization_arr.forEach(el => {
        let reg;

        if (search_source == "organization") {
            // Пропускає поточну ітерацію циклу якщо відсутня назва організації
            if (el.organization_name == "") return;
            reg = new RegExp(`^${el.organization_type}: ${el.organization_name}`, "i");
        } else if (search_source == "voiсe") {
            // Пропускає поточну ітерацію циклу якщо відсутня назва організації
            if (el.organization_name == "") return;
            reg = new RegExp(`^${el.organization_name}`, "i");
        } else {
            // Пропускає поточну ітерацію циклу якщо відсутня назва організації
            if (el.organization_name == "") return;
            reg = new RegExp(`^${el.organization_name}`, "i");
        }

        if (reg.test(command_str)) {
            organization_id = el.organization_id;
            organization_name = el.organization_name;
            return
        }
    });
    // console.log(`Організації: ${command_str} - ${organization_id} - ${organization_name}`);

    /* console.log('voice_search_command_id - ', voice_search_command_id)
    console.log('human_settlement_id - ', human_settlement_id)
    console.log('organization_type_id', organization_type_id)
    console.log('organization_id', organization_id) */

    // Основна команда
    if (voice_search_command_id > 0) {
        switch (voice_search_command_id) {
            // Очищає карту
            case 1:
                // Видаляє всі маркери
                delete_all_overlay_maps();
                break;
            // Оновлює сторінку
            case 2:
                location.reload();
                break;
            // Густина населення у багатоквартирних будинках
            case 3:
                add_map_density_population_house_multifamily();
                break;
            // Густина населення у приватних будинках
            case 4:
                add_map_density_population_house_private();
                break;
            // Межі населених пунктів
            case 5:
                add_map_polyline_community_boundary_all();
                break;
            // Поточні кординати
            case 6:
                add_map_current_coordinates();
                break;
            // Облаштовані зони відпочинку
            case 7:
                add_map_equipped_recreation_areas_all();
                break;
            // Зони відпочинку
            case 8:
                add_map_recreation_areas_all();
                break;
            // План зонування м.Ладижина
            case 9:
                open_dialog_openseadragon_master_plan_map();
                break;
            // Зупинки громадського транспорту
            case 10:
                add_map_public_transport_stops_all();
                break;
            // Дошки оголошень
            case 11:
                add_map_bulletin_boards_all();
                break;
            // Білборди
            case 12:
                add_map_billboards_all();
                break;
            // Сітілайти
            case 13:
                add_map_city_lights_all();
                break;
            // Велопарковки
            case 14:
                add_map_bicycle_parking_all();
                break;
            // Веломайстерні
            case 15:
                add_map_bicycle_service_center_all();
                break;
            // Об'єкти альтернативної енергетики
            case 16:
                add_map_alternative_energy_facilities_all();
                break;
            // Об'єкти паркувального простору
            case 17:
                add_map_parking_space_all();
                break;
            // Камери відеоспостереження
            case 18:
                add_map_video_surveillance_all();
                break;
            // Багатоквартирні будинки
            case 19:
                add_overlay_map_house_multifamily_all();
                break;
            // Архівні фото
            case 20:
                add_map_archival_photos();
                break;
        }
        return;
    }

    if (human_settlement_id > 0) return voice_command_decoding_address(command_str, human_settlement_id);

    if (search_source == "organization_type" && organization_type_id > 0) return voice_command_add_map_organization(organization_type);

    if (search_source == "organization" && organization_id > 0) return voice_command_add_map_organization_find_id(organization_id);

    if (search_source == "voiсe") {
        if (organization_type_id > 0) return voice_command_add_map_organization(organization_type);
        if (organization_id > 0) return voice_command_add_map_organization_find_id(organization_id);
    }

    open_dialog_error(error_text_40);
}

function voice_command_add_map_organization_find_id(id) {
    const organization_arr = data_organization_arr.filter((e) => e.organization_id == id);

    add_overlay_map_organization(organization_arr);

    // Якщо було знайдено одну організацію то маштабує карту для однієї організації
    if (organization_arr.length == 1) return map_offset_selected_organization(organization_arr);

    // Маштабує карту враховуючи видимість декількох організацій
    map_offset(organization_arr);
}

function voice_command_add_map_organization(organization_type) {
    const organization_arr = data_organization_arr.filter((e) => e.organization_type == organization_type);

    if (organization_arr.length == 0) return open_dialog_error(error_text_40);

    add_overlay_map_organization(organization_arr);

    // Якщо було знайдено одну організацію то маштабує карту для однієї організації
    if (organization_arr.length == 1) return map_offset_selected_organization(organization_arr);

    // Маштабує карту враховуючи видимість декількох організацій
    map_offset(organization_arr);
}

// Декодує голосову команду пошуку адреси
function voice_command_decoding_address(command_str, human_settlement_id) {
    let house_arr = [];
    let street_id = 0;
    let house_id = 0;

    // Відфільтровує вулиці знайденого населеного пункту
    const street_settlement_arr = data_street_arr.filter( (e) => e.street_human_settlement_code == human_settlement_id);

    // Шукає вулицю
    street_settlement_arr.forEach(el => {
        const reg = new RegExp(el.street_voice_search, "i");
        if (reg.test(command_str)) return street_id = el.street_id;
    });
    // console.log('street_id: ', street_id)

    // Перевіряє чи знайдено вулицю
    if (street_id == 0) {
        //Відображає на карті центр населеного пункту
        const human_settlement_arr = data_human_settlement_arr.filter((e) => e.human_settlement_id == human_settlement_id);
        return add_map_human_settlement_voice(human_settlement_arr);
    }

    // Шукає будинок (після слова будинок + пробіл знаходить число)]
    if (/буд /i.test(command_str) || /будинок /i.test(command_str)) {
        // Якщо зайдено слово будинок то шукає номер будинку із вибраної вулиці
        // Відфільтровує будинки знайденого населеного пункту
        house_arr = data_house_arr.filter( (e) => e.house_code_street == street_id);

        // Шукає будинок
        house_arr.forEach(el => {
            const str = ` ${el.house_name}$`;
            const reg = new RegExp(str, "i");

            if (reg.test(command_str)) return house_id = el.house_id;
        });
        // console.log('house_id: ', house_id)

        // Якщо вказаний номер будинку не знайдений то повертає помилку
        if (house_id == 0) return open_dialog_error(error_text_41);

        house_arr = data_house_arr.filter( (e) => e.house_id == house_id);
        add_map_house_voice(house_arr);
    } else {
        // Якщо слово будинок не знайдено то відображає всі адреси вулиці
        house_arr = data_house_arr.filter( (e) => e.house_code_street == street_id);
        add_map_street_voice(house_arr);
    }
}

// Додає на карту центр населеного пункту
function add_map_human_settlement_voice(human_settlement_arr) {
    // Видаляє попередньо додані маркери
    delete_voice_search_address_markers();

    add_map_overlay_one_expanded(human_settlement_arr[0], 11, 'human_settlement_latitude', 'human_settlement_longitude', 'human_settlement_id', 'human_settlement_short_name', 'marker_center_human_settlement', markers_human_settlement_voice);

    // Відповідно до вибраного населеного пункту маштабує карту
    map_offset_human_settlement(human_settlement_arr[0].human_settlement_id);
}

// Додає на карту усі адреси вулиці
function add_map_street_voice(house_arr) {
    // Видаляє попередньо додані маркери
    delete_voice_search_address_markers();

    // Додає будинки на карту
    add_map_overlay_expanded(house_arr, 1, 'latitude', 'longitude', 'house_id', 'house_name', 'marker_house', markers_house_voice);

    // Додає підїзди на карту
    house_arr.forEach(el => {
        const entrance_arr = data_entrance_arr.filter( (e) => e.entrance_code_house == el.house_id);
        add_map_overlay_entrance(entrance_arr);
    });

    // Відповідно до вибраної вулиці маштабує карту
    map_offset(house_arr);
}

// Додає на карту аресу одного будинку
function add_map_house_voice(house_arr) {
    // Видаляє попередньо додані маркери
    delete_voice_search_address_markers();

    add_map_overlay_expanded(house_arr, 1, 'latitude', 'longitude', 'house_id', 'house_name', 'marker_house', markers_house_voice);

    // Завантажує підїзди
    const entrance_arr = data_entrance_arr.filter( (e) => e.entrance_code_house == house_arr[0].house_id);

    add_map_overlay_entrance(entrance_arr);

    // Після додавання будинку маштабує карту
    map.panTo(new google.maps.LatLng(Number(house_arr[0].latitude), Number(house_arr[0].longitude)));
    map.setZoom(19);
}
