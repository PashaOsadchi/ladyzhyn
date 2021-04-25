// Визначає тип пошукової команди
function determines_type_search_command(command_str) {
    // Видаляє всі накладення на карті
    delete_all_overlay_maps();

    command_str = command_str.replace("вулиця", "вул");
    // console.log('command_str: ', command_str)

    let human_settlement_id = 0;
    let human_settlement_name_voice_search = '';

    let organization_type_id = 0;
    let organization_type = '';

    let voice_search_command_id = 0;
    let voice_search_command_name = '';

    // Визначає пошукову команду
    for (let i_1 = 0; i_1 < data_voice_search_commands_arr.length; i_1++) {

        for (let i_2 = 0; i_2 < data_voice_search_commands_arr[i_1].voice_search.length; i_2++) {
            const reg = new RegExp(`^${data_voice_search_commands_arr[i_1].voice_search[i_2]}`, "i");

            if (reg.test(command_str)) {
                // Знаходить найдовший текст який відповідає пошуку
                if (data_voice_search_commands_arr[i_1].name.length > voice_search_command_name.length) {
                    voice_search_command_id = data_voice_search_commands_arr[i_1].id;
                    voice_search_command_name = data_voice_search_commands_arr[i_1].name;
                }
            }
        }
    }
    // console.log(`${command_str} - ${voice_search_command_id} - ${voice_search_command_name}`)

    // Шукає населений пункт
    for (let i = 0; i < data_human_settlement_arr.length; i++) {
        const reg = new RegExp(`^${data_human_settlement_arr[i].human_settlement_name_voice_search}`, "i");

        if (reg.test(command_str)) {
            human_settlement_id = data_human_settlement_arr[i].human_settlement_id;
            human_settlement_name_voice_search = data_human_settlement_arr[i].human_settlement_name_voice_search;
            break;
        }
    }
    // console.log('human_settlement_id: ', human_settlement_id)

    // Шукає тип організації
    for (let i_1 = 0; i_1 < data_organization_type_arr.length; i_1++) {

        for (let i_2 = 0; i_2 < data_organization_type_arr[i_1].voice_search.length; i_2++) {
            const reg = new RegExp(`^${data_organization_type_arr[i_1].voice_search[i_2]}`, "i");

            if (reg.test(command_str)) {
                organization_type_id = data_organization_type_arr[i_1].organization_id;
                organization_type = data_organization_type_arr[i_1].organization_type;
                break;
            }
        }
    }
    // console.log(`${command_str} - ${organization_type_id} - ${organization_type}`)

    // Знаходить найдовший текст який відповідає пошуку
    if (human_settlement_name_voice_search.length > organization_type.length && human_settlement_name_voice_search.length > voice_search_command_name.length) {
        organization_type_id = 0;
        voice_search_command_id = 0;
    }

    // Знаходить найдовший текст який відповідає пошуку
    if (organization_type.length > human_settlement_name_voice_search.length && organization_type.length > voice_search_command_name.length) {
        human_settlement_id = 0;
        voice_search_command_id = 0;
    }

    // Знаходить найдовший текст який відповідає пошуку
    if (voice_search_command_name.length > human_settlement_name_voice_search.length && voice_search_command_name.length > organization_type.length) {
        human_settlement_id = 0;
        organization_type_id = 0;
    }
    // console.log('voice_search_command_id - ', voice_search_command_id)
    // console.log('human_settlement_id - ', human_settlement_id)
    // console.log('organization_type_id', organization_type_id)

    // Перевіряє чи знайдено начення
    if (voice_search_command_id !== 0 && human_settlement_id == 0 && organization_type == 0) {
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
                id_dialog_openseadragon_master_plan_map.showModal();
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
            default:
                console.log('default');
                break;
        }
        return; 

    } else if (voice_search_command_id == 0 && human_settlement_id !== 0 && organization_type == 0) {
        
        return voice_command_decoding_address(command_str, human_settlement_id);

    } else if (voice_search_command_id == 0 && human_settlement_id == 0 && organization_type_id > 0) {
        
        return voice_command_add_map_organization(organization_type)

    } else if (voice_search_command_id !== 0 && human_settlement_id !== 0 && organization_type !== 0) {
        
        return open_dialog_error("Одночасно розпізнає лише одну команду!<br> Спробуйте ще раз.");
    } 
}


function voice_command_add_map_organization(organization_type) {
    const organization_arr = data_organization_arr.filter((e) => e.organization_type == organization_type);

    add_overlay_map_organization(organization_arr);

    // Якщо було знайдено одну організацію то маштабує карту для однієї організації
    if (organization_arr.length == 1) return map_offset_selected_organization(organization_arr);

    // Маштабує карту враховуючи видимість декількох організацій
    map_offset_few_organization(organization_arr);
}

// Декодує голосову команду пошуку адреси
function voice_command_decoding_address(command_str, human_settlement_id) {
    let house_arr = [];
    let street_id = 0;
    let house_id = 0;

    // Відфільтровує вулиці знайденого населеного пункту
    const street_settlement_arr = data_street_arr.filter(function (e) {
        return e.street_human_settlement_code == human_settlement_id;
    });

    // Шукає вулицю
    for (let i = 0; i < street_settlement_arr.length; i++) {
        const reg = new RegExp(street_settlement_arr[i].street_voice_search, "i");

        if (reg.test(command_str)) {
            street_id = street_settlement_arr[i].street_id;
            break;
        }
    }
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
        house_arr = data_house_arr.filter(function (e) {
            return e.house_code_street == street_id;
        });

        // Шукає будинок
        for (let i = 0; i < house_arr.length; i++) {
            const str = ` ${house_arr[i].house_name}$`;
            const reg = new RegExp(str, "i");

            if (reg.test(command_str)) {
                house_id = house_arr[i].house_id;
                break;
            }
        }
        // console.log('house_id: ', house_id)

        // Якщо вказаний номер будинку не знайдений то повертає помилку
        if (house_id == 0) {
            return open_dialog_error("Вказаний номер будинку не знайдено! Спробуйте ще раз.");
        }

        house_arr = data_house_arr.filter(function (e) {
            return e.house_id == house_id;
        });
        add_map_house_voice(house_arr);
    } else {
        // Якщо слово будинок не знайдено то відображає всі адреси вулиці
        house_arr = data_house_arr.filter(function (e) {
            return e.house_code_street == street_id;
        });
        add_map_street_voice(house_arr);
    }
}

// Додає на карту центр населеного пункту
function add_map_human_settlement_voice(human_settlement_arr) {
    // Видаляє попередньо додані маркери
    delete_voice_search_address_markers();

    overlay = new custom_marker(new google.maps.LatLng(human_settlement_arr[0].human_settlement_latitude, human_settlement_arr[0].human_settlement_longitude), map, {
        marker_id: `11-${human_settlement_arr[0].human_settlement_id}`,
        marker_name: human_settlement_arr[0].human_settlement_short_name,
        marker_class_name: "marker marker_center_human_settlement",
    });
    markers_human_settlement_voice.push(overlay);

    // Відповідно до вибраного населеного пункту маштабує карту
    map_offset_human_settlement(human_settlement_arr[0].human_settlement_id);
}

// Додає на карту усі адреси вулиці
function add_map_street_voice(house_arr) {
    // Видаляє попередньо додані маркери
    delete_voice_search_address_markers();

    // Додає будинки на карту
    for (let i = 0; i < house_arr.length; i++) {
        overlay = new custom_marker(new google.maps.LatLng(Number(house_arr[i].house_latitude), Number(house_arr[i].house_longitude)), map, {
            marker_id: `1-${house_arr[i].house_id}`,
            marker_name: house_arr[i].house_name,
            marker_class_name: "marker marker_house",
        });
        markers_house_voice.push(overlay);
    }

    // Додає підїзди на карту
    for (let i_1 = 0; i_1 < house_arr.length; i_1++) {
        // Завантажує підїзди
        const entrance_arr = data_entrance_arr.filter(function (e) {
            return e.entrance_code_house == house_arr[i_1].house_id;
        });

        for (let i = 0; i < entrance_arr.length; i++) {
            overlay = new custom_marker(new google.maps.LatLng(Number(entrance_arr[i].entrance_latitude), Number(entrance_arr[i].entrance_longitude)), map, {
                marker_id: `2-${entrance_arr[i].entrance_id}`,
                marker_name: `${entrance_arr[i].entrance_first_apartment_entrance}-${entrance_arr[i].entrance_last_apartment_entrance}`,
                marker_class_name: "marker marker_entrance",
            });
            markers_entrance_voice.push(overlay);
        }
    }

    // Відповідно до вибраної вулиці маштабує карту
    map_offset(house_arr);
}

// Додає на карту аресу одного будинку
function add_map_house_voice(house_arr) {
    // Видаляє попередньо додані маркери
    delete_voice_search_address_markers();

    overlay = new custom_marker(new google.maps.LatLng(Number(house_arr[0].house_latitude), Number(house_arr[0].house_longitude)), map, {
        marker_id: `1-${house_arr[0].house_id}`,
        marker_name: house_arr[0].house_name,
        marker_class_name: "marker marker_house",
    });
    markers_house_voice.push(overlay);

    // Завантажує підїзди
    const entrance_arr = data_entrance_arr.filter(function (e) {
        return e.entrance_code_house == house_arr[0].house_id;
    });

    for (let i = 0; i < entrance_arr.length; i++) {
        overlay = new custom_marker(new google.maps.LatLng(Number(entrance_arr[i].entrance_latitude), Number(entrance_arr[i].entrance_longitude)), map, {
            marker_id: `2-${entrance_arr[i].entrance_id}`,
            marker_name: `${entrance_arr[i].entrance_first_apartment_entrance}-${entrance_arr[i].entrance_last_apartment_entrance}`,
            marker_class_name: "marker marker_entrance",
        });
        markers_entrance_voice.push(overlay);
    }

    // Після додавання будинку маштабує карту
    map.panTo(new google.maps.LatLng(Number(house_arr[0].house_latitude), Number(house_arr[0].house_longitude)));
    map.setZoom(19);
}