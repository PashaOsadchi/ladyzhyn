// https://developers.google.com/maps/documentation/javascript/heatmaplayer
// https://developers.google.com/maps/documentation/javascript/events

const zoom_radius_arr = [
    {
        zoom: 9,
        radius_house_multifamily: 1,
        radius_house_private: 10,
    },
    {
        zoom: 10,
        radius_house_multifamily: 2,
        radius_house_private: 10,
    },
    {
        zoom: 11,
        radius_house_multifamily: 3,
        radius_house_private: 20,
    },
    {
        zoom: 12,
        radius_house_multifamily: 6,
        radius_house_private: 30,
    },
    {
        zoom: 13,
        radius_house_multifamily: 13,
        radius_house_private: 60,
    },
    {
        zoom: 14,
        radius_house_multifamily: 25,
        radius_house_private: 150,
    },
    {
        zoom: 15,
        radius_house_multifamily: 50,
        radius_house_private: 300,
    },
    {
        zoom: 16,
        radius_house_multifamily: 100,
        radius_house_private: 500,
    },
    {
        zoom: 17,
        radius_house_multifamily: 200,
        radius_house_private: 700,
    },
    {
        zoom: 18,
        radius_house_multifamily: 400,
        radius_house_private: 800,
    },
    {
        zoom: 19,
        radius_house_multifamily: 800,
        radius_house_private: 1000,
    },
];

let heatmap_house_multifamily = null;
let heatmap_house_private = null;

// Додає на карту шар із густиною населення на території Ладижинської територіальної громади
function add_map_density_population_house_multifamily() {
    if (heatmap_house_multifamily) {
        // Видаляє теплову карту
        heatmap_house_multifamily.setMap(heatmap_house_multifamily.getMap() ? null : map);
        heatmap_house_multifamily = null;
        // Видаляє всі методи прослуховування подій на карті
        google.maps.event.removeListener(listener_add_map_density_population_house_multifamily);
        google.maps.event.removeListener(listener_map_offset_house_private);
        return;
    }

    if (map_hidden) {
        // Вказує що продовжити виконання фунції потрібно після закриття меню
        need_continue_map_offset_house_multifamily_after_close_sidebar = true;
    } else {
        // Продовжиує виконання фунції
        map_offset_house_multifamily();
    }
}

function add_map_density_population_house_multifamily_2() {
    const heat_map_data = [];

    // Додає у масив із точками для відображення густини населення кординати підїзду із кількістю квартир у ньому
    for (let i = 0; i < data_entrance_arr.length; i++) {
        const first_apartment_entrance = Number(data_entrance_arr[i].entrance_first_apartment_entrance);
        const last_apartment_entrance = Number(data_entrance_arr[i].entrance_last_apartment_entrance);

        const number_apartments = last_apartment_entrance - first_apartment_entrance + 1;

        const obj = {
            location: new google.maps.LatLng(Number(data_entrance_arr[i].entrance_latitude), Number(data_entrance_arr[i].entrance_longitude)),
            weight: number_apartments,
        };
        heat_map_data.push(obj);
    }

    heatmap_house_multifamily = new google.maps.visualization.HeatmapLayer({
        data: heat_map_data,
    });
    heatmap_house_multifamily.setMap(map);

    let zoom_1 = map.getZoom();

    // Знаходить значення радіуса на поточному зумові щоб при додаванні теплової карти був коректний радіус
    const arr_1 = zoom_radius_arr.filter((e) => e.zoom == zoom_1);
    let radius_1 = arr_1[0].radius_house_multifamily;
    //console.log(zoom, ' - ', radius);
    heatmap_house_multifamily.set("radius", heatmap_house_multifamily.get("radius") ? null : radius_1);

    // Додає прослуховувач на подію маштабування карти
    listener_add_map_density_population_house_multifamily = google.maps.event.addListener(map, "idle", function () {
        let zoom = map.getZoom();

        // Знаходить значення радіуса на поточному зумові
        const arr = zoom_radius_arr.filter((e) => e.zoom == zoom);
        let radius = arr[0].radius_house_multifamily;
        //console.log(zoom, ' - ', radius);

        heatmap_house_multifamily.set("radius", heatmap_house_multifamily.get("radius") ? null : 0);
        heatmap_house_multifamily.set("radius", heatmap_house_multifamily.get("radius") ? null : radius);
    });
}

// Додає на карту шар із густиною населення на території Ладижинської територіальної громади для приватних будинків
function add_map_density_population_house_private() {
    if (heatmap_house_private) {
        // Видаляє теплову карту
        heatmap_house_private.setMap(heatmap_house_private.getMap() ? null : map);
        heatmap_house_private = null;
        // Видаляє всі методи прослуховування подій на карті
        //google.maps.event.clearInstanceListeners(map);
        google.maps.event.removeListener(listener_add_map_density_population_house_private);
        google.maps.event.removeListener(listener_map_offset_house_private);
        return;
    }

    if (map_hidden) {
        // Вказує що потрібно продовжити виконання фунції потрібно після закриття меню
        need_continue_map_offset_house_private_after_close_sidebar = true;
    } else {
        // Продовжиує виконання фунції
        map_offset_house_private();
    }
}

function add_map_density_population_house_private_2() {
    // Видаляє метод прослуховування подій
    google.maps.event.removeListener(listener_map_offset_house_private);

    const heat_map_data = [];

    // Якщо будинок приватний то додає у масив із точками для відображення густини населення кординати будинку
    for (let i = 0; i < data_house_arr.length; i++) {
        if (data_house_arr[i].house_multifamily == "false") {
            const obj = {
                location: new google.maps.LatLng(Number(data_house_arr[i].house_latitude), Number(data_house_arr[i].house_longitude)),
                weight: 1,
            };
            heat_map_data.push(obj);
        }
    }

    heatmap_house_private = new google.maps.visualization.HeatmapLayer({
        data: heat_map_data,
    });
    heatmap_house_private.setMap(map);

    let zoom_1 = map.getZoom();

    // Знаходить значення радіуса на поточному зумові щоб при додаванні теплової карти був коректний радіус
    const arr_1 = zoom_radius_arr.filter((e) => e.zoom == zoom_1);
    let radius_1 = arr_1[0].radius_house_private;
    //console.log(zoom_1, ' - ', radius_1);
    heatmap_house_private.set("radius", heatmap_house_private.get("radius") ? null : radius_1);

    // Додає прослуховувач на подію маштабування карти
    listener_add_map_density_population_house_private = google.maps.event.addListener(map, "idle", function () {
        let zoom = map.getZoom();

        // Знаходить значення радіуса на поточному зумові
        const arr = zoom_radius_arr.filter((e) => e.zoom == zoom);
        let radius = arr[0].radius_house_private;
        //console.log(zoom, " - ", radius);

        heatmap_house_private.set("radius", heatmap_house_private.get("radius") ? null : 0);
        heatmap_house_private.set("radius", heatmap_house_private.get("radius") ? null : radius);
    });
}
