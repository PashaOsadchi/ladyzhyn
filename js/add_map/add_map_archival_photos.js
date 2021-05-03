let archival_photos_arr = [];
let info_window_archival_photos = null;

// Додає на карту архівні фото
function add_map_archival_photos_all() {
    if (archival_photos_arr.length) {
        return delete_archival_photos_markers();
    }
    
    for (let i = 0; i < data_archival_photos_arr.length; i++) {

        if (data_archival_photos_arr[i].longitude) {

            const message_text = `<div>
            <div id="dialog_detailed_information_header">${data_archival_photos_arr[i].name}</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div>
                <img class="img_archival_photos" src="archival_photos/${data_archival_photos_arr[i].id}.webp" alt="${data_archival_photos_arr[i].name}""> 
            </div>`;

            add_map_archival_photos(
                data_archival_photos_arr[i].id,
                data_archival_photos_arr[i].latitude,
                data_archival_photos_arr[i].longitude,
                data_archival_photos_arr[i].latitude_point_course,
                data_archival_photos_arr[i].longitude_point_course,
                `archival_photos_${data_archival_photos_arr[i].id}`,
                message_text,
                data_archival_photos_arr[i].viewing_angle,
                data_archival_photos_arr[i].radius,
            );
        }
    }

    // Після додавання архівних фото маштабує карту
    map_offset_archival_photos() 
};

// Додає на карту архівне фото
function add_map_archival_photos(id, lat_1, lon_1, lat_2, lon_2, name_polygon, message_text, viewing_angle, radius) {
    const centerPoint = new google.maps.LatLng(lat_1, lon_1);

    const course = calculate_course(lat_1, lon_1, lat_2, lon_2);

    viewing_angle = viewing_angle / 2;

    // Створює є полілінію у вигляді сектора
    const arcPts = generates_polyline(centerPoint, course - viewing_angle, course + viewing_angle, radius);

    arcPts.push(centerPoint);

    window[name_polygon] = new google.maps.Polygon({
        paths: [arcPts],
        strokeColor: "#00FF00",
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: "#0095b6",
        fillOpacity: 0.35,
        map: map,
    });
    window[name_polygon].setMap(map);
    archival_photos_arr.push(window[name_polygon]);

    info_window_archival_photos = new google.maps.InfoWindow();

    google.maps.event.addListener(window[name_polygon], "click", function (e) {
        open_dialog_detailed_information(`13-${id}`)
    });
}