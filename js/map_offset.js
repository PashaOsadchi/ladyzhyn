// Після додавання адрес які знаходятьсяв певному радіусі від поточних кординат маштабує карту
function map_offset_display_addresses_radius_current_coordinates(lat, lon) {
    // Коефіцієнт ширини екрана
    let screen_width_ratio = 16;

    if (window.innerWidth < 500) screen_width_ratio = 15;

    map.panTo(new google.maps.LatLng(lat, lon));
    map.setZoom(screen_width_ratio);
}

// Після додавання однієї організації маштабує карту
function map_offset_selected_organization(arr) {
    map.panTo(new google.maps.LatLng(Number(arr[0].organization_latitude), Number(arr[0].organization_longitude)));
    map.setZoom(19);
}

// Після додавання меж громади маштабує карту
function map_offset_community_boundary() {
    // Коефіцієнт ширини екрана
    let screen_width_ratio = 12;

    if (window.innerWidth < 500) {
        screen_width_ratio = 10;
    }

    //console.log(screen_width_ratio);
    map.panTo(new google.maps.LatLng(48.67427770149395, 29.19269771294938));
    map.setZoom(screen_width_ratio);
}

// Відповідно до вибраного населеного пункту маштабує карту
function map_offset_human_settlement(human_settlement_code) {
    // Коефіцієнт ширини екрана
    let screen_width_ratio = 0;

    if (window.innerWidth < 500) {
        screen_width_ratio = 2;
    }

    switch (human_settlement_code) {
        case "1":
            map.panTo(new google.maps.LatLng(48.68677362481703, 29.248837454518203));
            map.setZoom(13 - screen_width_ratio);
            break;
        case "2":
            map.panTo(new google.maps.LatLng(48.65109331945063, 29.200714947265933));
            map.setZoom(15 - screen_width_ratio);
            break;
        case "3":
            map.panTo(new google.maps.LatLng(48.61740696905776, 29.30100051479657));
            map.setZoom(17 - screen_width_ratio);
            break;
        case "4":
            map.panTo(new google.maps.LatLng(48.621492176556735, 29.298640170952904));
            map.setZoom(17 - screen_width_ratio);
            break;
        case "5":
            map.panTo(new google.maps.LatLng(48.69385687061192, 29.153430135115773));
            map.setZoom(15 - screen_width_ratio);
            break;
        case "6":
            map.panTo(new google.maps.LatLng(48.70237907383064, 29.109437764549867));
            map.setZoom(15 - screen_width_ratio);
            break;
    }
}

// Відповідно до вибраної вулиці маштабує карту
function map_offset(filtered_gpx_arr) {
    let central_point_lat = 0;
    let central_point_lon = 0;

    // Фільтрує масив щоб небуло пустих значень широти та довготи
    const data_arr = filtered_gpx_arr.filter((e) => e.house_latitude != "" && e.house_longitude != "");

    for (let i = 0; i < data_arr.length; i++) {
        central_point_lat += Number(data_arr[i].house_latitude);
        central_point_lon += Number(data_arr[i].house_longitude);
    }

    central_point_lat /= data_arr.length;
    central_point_lon /= data_arr.length;

    let arr = [];

    for (let i = 0; i < data_arr.length; i++) {
        let obj = {};

        obj.lat = data_arr[i].house_latitude;
        obj.lon = data_arr[i].house_longitude;

        obj.distance = calculate_distance(central_point_lat, central_point_lon, Number(obj.lat), Number(obj.lon));

        obj.distance = Math.trunc(obj.distance * 10) / 10;

        arr.push(obj);
    }

    // Сортує масив за спаданням для знаходження найбільшої відстані
    arr.sort(function (a, b) {
        return b.distance - a.distance;
    });

    // Відстань між центром і найдальшою точкою
    const distance = calculate_distance(central_point_lat, central_point_lon, arr[0].lat, arr[0].lon);

    // Курс від найдальшої точки на центр
    const course = calculate_course(arr[0].lat, arr[0].lon, central_point_lat, central_point_lon);

    // Розрахунок кординат точки на курсові до другої точки на певні відстані від центру
    const coordinates_arr = calculate_point_course(central_point_lat, central_point_lon, distance, course);

    // Маштабує карту
    if (!map_hidden) {
        //console.log("Карта видима можна маштабувати карту одразу");
        const point_1 = new google.maps.LatLng(Number(arr[0].lat), Number(arr[0].lon));
        const point_2 = new google.maps.LatLng(coordinates_arr[0], coordinates_arr[1]);
        let bounds = new google.maps.LatLngBounds();
        bounds.extend(point_1);
        bounds.extend(point_2);
        map.fitBounds(bounds);
    } else {
        //console.log("Карта прихована відкласти маштабування карти до часу коли буде видима карта");
        // Кординати першої і другої точки які потрібно показати маштабуючи карту
        coordinates_map_scaling_obj.lat_1 = Number(arr[0].lat);
        coordinates_map_scaling_obj.lon_1 = Number(arr[0].lon);
        coordinates_map_scaling_obj.lat_2 = coordinates_arr[0];
        coordinates_map_scaling_obj.lon_2 = coordinates_arr[1];
    }
}

// Відповідно до вибраних організацій маштабує карту
function map_offset_few_organization(filtered_gpx_arr) {
    let central_point_lat = 0;
    let central_point_lon = 0;

    // Фільтрує масив щоб небуло пустих значень широти та довготи
    const data_arr = filtered_gpx_arr.filter((e) => e.organization_latitude != "" && e.organization_longitude != "");

    for (let i = 0; i < data_arr.length; i++) {
        central_point_lat += Number(data_arr[i].organization_latitude);
        central_point_lon += Number(data_arr[i].organization_longitude);
    }

    central_point_lat /= data_arr.length;
    central_point_lon /= data_arr.length;

    let arr = [];

    for (let i = 0; i < data_arr.length; i++) {
        let obj = {};

        obj.lat = data_arr[i].organization_latitude;
        obj.lon = data_arr[i].organization_longitude;

        obj.distance = calculate_distance(central_point_lat, central_point_lon, Number(obj.lat), Number(obj.lon));

        obj.distance = Math.trunc(obj.distance * 10) / 10;

        arr.push(obj);
    }

    // Сортує масив за спаданням для знаходження найбільшої відстані
    arr.sort(function (a, b) {
        return b.distance - a.distance;
    });

    // Відстань між центром і найдальшою точкою
    const distance = calculate_distance(central_point_lat, central_point_lon, arr[0].lat, arr[0].lon);

    // Курс від найдальшої точки на центр
    const course = calculate_course(arr[0].lat, arr[0].lon, central_point_lat, central_point_lon);

    // Розрахунок кординат точки на курсові до другої точки на певні відстані від центру
    const coordinates_arr = calculate_point_course(central_point_lat, central_point_lon, distance, course);

    // Маштабує карту
    if (!map_hidden) {
        //console.log("Карта видима можна маштабувати карту одразу");
        const point_1 = new google.maps.LatLng(Number(arr[0].lat), Number(arr[0].lon));
        const point_2 = new google.maps.LatLng(coordinates_arr[0], coordinates_arr[1]);
        let bounds = new google.maps.LatLngBounds();
        bounds.extend(point_1);
        bounds.extend(point_2);
        map.fitBounds(bounds);
    } else {
        //console.log("Карта прихована відкласти маштабування карти до часу коли буде видима карта");
        // Кординати першої і другої точки які потрібно показати маштабуючи карту
        coordinates_map_scaling_obj.lat_1 = Number(arr[0].lat);
        coordinates_map_scaling_obj.lon_1 = Number(arr[0].lon);
        coordinates_map_scaling_obj.lat_2 = coordinates_arr[0];
        coordinates_map_scaling_obj.lon_2 = coordinates_arr[1];
    }
}

// Відповідно до вибраних точок маршруту маштабує карту
function map_offset_route(filtered_gpx_arr) {
    let central_point_lat = 0;
    let central_point_lon = 0;

    // Фільтрує масив щоб небуло пустих значень широти та довготи
    const data_arr = filtered_gpx_arr;

    for (let i = 0; i < data_arr.length; i++) {
        central_point_lat += Number(data_arr[i].latitude);
        central_point_lon += Number(data_arr[i].longitude);
    }

    central_point_lat /= data_arr.length;
    central_point_lon /= data_arr.length;

    let arr = [];

    for (let i = 0; i < data_arr.length; i++) {
        let obj = {};

        obj.lat = data_arr[i].latitude;
        obj.lon = data_arr[i].longitude;

        obj.distance = calculate_distance(central_point_lat, central_point_lon, Number(obj.lat), Number(obj.lon));

        obj.distance = Math.trunc(obj.distance * 10) / 10;

        arr.push(obj);
    }

    // Сортує масив за спаданням для знаходження найбільшої відстані
    arr.sort(function (a, b) {
        return b.distance - a.distance;
    });

    // Відстань між центром і найдальшою точкою
    const distance = calculate_distance(central_point_lat, central_point_lon, arr[0].lat, arr[0].lon);

    // Курс від найдальшої точки на центр
    const course = calculate_course(arr[0].lat, arr[0].lon, central_point_lat, central_point_lon);

    // Розрахунок кординат точки на курсові до другої точки на певні відстані від центру
    const coordinates_arr = calculate_point_course(central_point_lat, central_point_lon, distance, course);

    // Маштабує карту
    if (!map_hidden) {
        //console.log("Карта видима можна маштабувати карту одразу");
        const point_1 = new google.maps.LatLng(Number(arr[0].lat), Number(arr[0].lon));
        const point_2 = new google.maps.LatLng(coordinates_arr[0], coordinates_arr[1]);
        let bounds = new google.maps.LatLngBounds();
        bounds.extend(point_1);
        bounds.extend(point_2);
        map.fitBounds(bounds);
    } else {
        //console.log("Карта прихована відкласти маштабування карти до часу коли буде видима карта");
        // Кординати першої і другої точки які потрібно показати маштабуючи карту
        coordinates_map_scaling_obj.lat_1 = Number(arr[0].lat);
        coordinates_map_scaling_obj.lon_1 = Number(arr[0].lon);
        coordinates_map_scaling_obj.lat_2 = coordinates_arr[0];
        coordinates_map_scaling_obj.lon_2 = coordinates_arr[1];
    }
}

// Маштабує карту для відображення густини населення у приватних будинках на всі території Ладижинської громади
function map_offset_house_private() {
    const point_1 = new google.maps.LatLng(48.7227277343464, 29.06160786713042);
    const point_2 = new google.maps.LatLng(48.62486370605354, 29.320923210115634);
    let bounds = new google.maps.LatLngBounds();
    bounds.extend(point_1);
    bounds.extend(point_2);
    map.fitBounds(bounds);

    if (!map_bounds_changed) {
        add_map_density_population_house_private_2();
    } else {
        listener_map_offset_house_private = google.maps.event.addListenerOnce(map, "idle", function () {
            map_bounds_changed = false;
            add_map_density_population_house_private_2();
        });
    }
}

// Маштабує карту для відображення густини населення у багатоквартирних будинках на всі території Ладижинської громади
function map_offset_house_multifamily() {
    const point_1 = new google.maps.LatLng(48.70055897925647, 29.22288735445911);
    const point_2 = new google.maps.LatLng(48.67543119453066, 29.23899131832271);
    let bounds = new google.maps.LatLngBounds();
    bounds.extend(point_1);
    bounds.extend(point_2);
    map.fitBounds(bounds);

    if (!map_bounds_changed) {
        add_map_density_population_house_multifamily_2();
    } else {
        listener_map_offset_house_multifamily = google.maps.event.addListenerOnce(map, "idle", function () {
            map_bounds_changed = false;
            add_map_density_population_house_multifamily_2();
        });
    }
}


