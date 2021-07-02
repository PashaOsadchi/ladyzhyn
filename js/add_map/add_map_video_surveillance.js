let video_surveillance_arr = [];
let info_window_video_surveillance = null;

let all_cameras_added = false;
let all_cameras_one_owner_added = false;

let code_last_camera_owner = 0;

// Додає на карту камери відеоспостереження
function add_map_video_surveillance_all() {

    let map_offset_arr = [];

    change_color_show_hide_button_bloсk('id_details_video_surveillance_cameras');

    delete_video_surveillance_markers();


    for (let i = 0; i < data_surveillance_cameras_arr.length; i++) {
        const place_installation_surveillance_camera_arr = data_place_installation_surveillance_camera_arr.filter((e) => e.id == data_surveillance_cameras_arr[i].place_installation_id);

        const owners_surveillance_cameras_arr = data_owners_surveillance_cameras_arr.filter((e) => e.id == data_surveillance_cameras_arr[i].owners_code);

        const message_text = `
<b>Детальна інформація про камеру відеоспостереження</b><br>
<b>Номер:</b> ${data_surveillance_cameras_arr[i].id}<br>
<b>Власник:</b> ${owners_surveillance_cameras_arr[0].owners_name}<br>
`;

        add_map_video_surveillance_one(
            place_installation_surveillance_camera_arr[0].latitude,
            place_installation_surveillance_camera_arr[0].longitude,
            data_surveillance_cameras_arr[i].latitude_point_course,
            data_surveillance_cameras_arr[i].longitude_point_course,
            `video_surveillance_${data_surveillance_cameras_arr[i].id}`,
            message_text,
            data_surveillance_cameras_arr[i].viewing_angle,
            data_surveillance_cameras_arr[i].radius
        );

        const obj = {};
        obj.latitude = place_installation_surveillance_camera_arr[0].latitude;
        obj.longitude = place_installation_surveillance_camera_arr[0].longitude;
        map_offset_arr.push(obj)
    }

    // Після додавання камер відеоспостереження маштабує карту
    map_offset(map_offset_arr);
}

// Додає на карту камери відеоспостереження однієї організації
function add_map_video_surveillance(owners_id = 0) {

    change_color_show_hide_button_bloсk('id_details_video_surveillance_cameras');

    delete_video_surveillance_markers();

    let map_offset_arr = [];
    let arr = [];

    if (owners_id == 0) {
        arr = data_surveillance_cameras_arr;
    } else {
        arr = data_surveillance_cameras_arr.filter((e) => e.owners_code == owners_id);
    }


    for (let i = 0; i < arr.length; i++) {
        const place_installation_surveillance_camera_arr = data_place_installation_surveillance_camera_arr.filter((e) => e.id == arr[i].place_installation_id);

        const owners_surveillance_cameras_arr = data_owners_surveillance_cameras_arr.filter((e) => e.id == owners_id);

        const message_text = `
<b>Детальна інформація про камеру відеоспостереження</b><br>
<b>Номер:</b> ${arr[i].id}<br>
<b>Власник:</b> ${owners_surveillance_cameras_arr[0].owners_name}<br>
`;

        add_map_video_surveillance_one(
            place_installation_surveillance_camera_arr[0].latitude,
            place_installation_surveillance_camera_arr[0].longitude,
            arr[i].latitude_point_course,
            arr[i].longitude_point_course,
            `video_surveillance_${arr[i].id}`,
            message_text,
            arr[i].viewing_angle,
            arr[i].radius
        );

        const obj = {};
        obj.latitude = place_installation_surveillance_camera_arr[0].latitude;
        obj.longitude = place_installation_surveillance_camera_arr[0].longitude;
        map_offset_arr.push(obj)
    }

    // Після додавання камер відеоспостереження маштабує карту
    map_offset(map_offset_arr);
}

// Додає на карту камеру відеоспостереження
function add_map_video_surveillance_one(lat_1, lon_1, lat_2, lon_2, name_polygon, message_text, viewing_angle, radius) {
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
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map,
    });
    window[name_polygon].setMap(map);
    video_surveillance_arr.push(window[name_polygon]);

    const content_info_window_video_surveillance = `<div style="font-size: 15px">${message_text}</div>`;

    info_window_video_surveillance = new google.maps.InfoWindow();

    google.maps.event.addListener(window[name_polygon], "click", function (e) {
        // Закриває попереднє відкрите вікно при клікові у слідуючому об'єкті паркувального простору
        if (info_window_video_surveillance) {
            info_window_video_surveillance.close();
        }

        info_window_video_surveillance.setPosition(e.latLng);
        info_window_video_surveillance.setContent(content_info_window_video_surveillance);
        info_window_video_surveillance.open(map);
    });

    // Закриває попереднє відкрите вікно при клікові на карті
    google.maps.event.addListener(map, "click", function () {
        if (info_window_video_surveillance) {
            info_window_video_surveillance.close();
        }
    });
}
