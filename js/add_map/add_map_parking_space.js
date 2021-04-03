let parking_space_arr = [];
let info_window_parking_space = null;

// Додає на карту об'єкт паркувального простору
function add_map_parking_space(patch_arr, name_polygon, message_text, fill_сolor) {
    window[name_polygon] = new google.maps.Polygon({
        path: patch_arr,
        strokeColor: "#d900ff",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        fillColor: fill_сolor,
        fillOpacity: 1,
        map: map,
    });
    window[name_polygon].setMap(map);
    parking_space_arr.push(window[name_polygon]);

    const content_info_window_parking_space = `<div style="font-size: 15px">${message_text}</div>`;

    info_window_parking_space = new google.maps.InfoWindow();

    google.maps.event.addListener(window[name_polygon], "click", function (e) {
        // Закриває попереднє відкрите вікно при клікові у слідуючому об'єкті паркувального простору
        if (info_window_parking_space) {
            info_window_parking_space.close();
        }

        info_window_parking_space.setPosition(e.latLng);
        info_window_parking_space.setContent(content_info_window_parking_space);
        info_window_parking_space.open(map);
    });

    // Закриває попереднє відкрите вікно при клікові на карті
    google.maps.event.addListener(map, "click", function () {
        if (info_window_parking_space) {
            info_window_parking_space.close();
        }
    });
}

// Додає на карту об'єкти паркувального простору
function add_map_parking_space_all() {
    if (parking_space_arr.length) {
        return delete_parking_space_markers();
    }

    for (let i = 0; i < data_parking_space_arr.length; i++) {
        const parking_space_type_arr = data_parking_space_type_arr.filter(function (e) { return e.id == data_parking_space_arr[i].type });

        const message_text = `
<b>${parking_space_type_arr[0].name}</b><br>
${parking_space_type_arr[0].detailed_information}
`;

        add_map_parking_space(data_parking_space_arr[i].patch, `parking_space_${data_parking_space_arr[i].id}`, message_text, parking_space_type_arr[0].fill_сolor);
    }

    // Після додавання об'єків паркувального простору маштабує карту
    map_offset_community_boundary();
}
