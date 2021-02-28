let areas_recreation_arr = [];
let info_window_recreation_areas = null;

// Додає на карту зону відпочинку
function add_map_recreation_areas(patch_arr, name_polygon, message_text) {
    window[name_polygon] = new google.maps.Polygon({
        path: patch_arr,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 3,
        fillColor: "#7FFF00",
        fillOpacity: 0.4,
        map: map,
    });
    window[name_polygon].setMap(map);
    areas_recreation_arr.push(window[name_polygon]);

    const content_info_window_recreation_areas = `<div style="font-size: 15px">${message_text}</div>`;

    info_window_recreation_areas = new google.maps.InfoWindow();

    google.maps.event.addListener(window[name_polygon], "click", function (e) {
        // Закриває попереднє відкрите вікно при клікові у слідуючі зоні відпочинку
        if (info_window_recreation_areas) {
            info_window_recreation_areas.close();
        }

        info_window_recreation_areas.setPosition(e.latLng);
        info_window_recreation_areas.setContent(content_info_window_recreation_areas);
        info_window_recreation_areas.open(map);
    });

    // Закриває попереднє відкрите вікно при клікові на карті
    google.maps.event.addListener(map, "click", function () {
        if (info_window_recreation_areas) {
            info_window_recreation_areas.close();
        }
    });
}

// Додає на карту зони відпочинку
function add_map_recreation_areas_all() {
    if (areas_recreation_arr.length) {
        // Видаляє зони відпочинку
        for (let i = 0; i < areas_recreation_arr.length; i++) {
            areas_recreation_arr[i].setMap(null);
        }
        areas_recreation_arr = [];
        return;
    }

    for (let i = 0; i < data_recreation_areas_arr.length; i++) {
        const message_text = `
<b>${data_recreation_areas_arr[i].name}</b><br>
${data_recreation_areas_arr[i].detailed_information}
`;

        add_map_recreation_areas(data_recreation_areas_arr[i].patch, `recreation_area_${data_recreation_areas_arr[i].id}`, message_text);
    }

    // Після додавання зон відпочинку маштабує карту
    map_offset_community_boundary();
}
