function add_address_route() {
    let str;
    selected_code_administrative_unit.human_settlement_code >= 1 ? (str = "1,") : (str = "0,");
    selected_code_administrative_unit.street_code >= 1 ? (str += "1,") : (str += "0,");
    selected_code_administrative_unit.house_code >= 1 ? (str += "1,") : (str += "0,");
    selected_code_administrative_unit.entrance_code >= 1 ? (str += "1,") : (str += "0,");
    selected_code_administrative_unit.apartment_code >= 1 ? (str += "1") : (str += "0");

    switch (str) {
        case "1,0,0,0,0": // Вибрано населений пункт
            // Перевіряє чи не перевищено максимальну кількість точок у маршруті
            if (waypoints_arr.length == 25) return open_dialog_error(error_text_12);

            const human_settlement_arr = data_human_settlement_arr.filter((e) => e.human_settlement_id == selected_code_administrative_unit.human_settlement_code);

            waypoints_arr.push({
                location: {
                    lat: Number(human_settlement_arr[0].human_settlement_latitude),
                    lng: Number(human_settlement_arr[0].human_settlement_longitude),
                },
                stopover: true,
            });

            // Додає дані у перелік маршрутних точок для створення маркерів
            add_waypoints_full_arr(
                human_settlement_arr[0].human_settlement_id,
                "data_human_settlement_arr",
                `Центр населеного пункту`,
                full_address,
                human_settlement_arr[0].human_settlement_longitude,
                human_settlement_arr[0].human_settlement_latitude,
                11
            );
            break;
        case "1,1,0,0,0": // Вибрана вулиця - вибирає кординати першого будинку
            // Перевіряє чи не перевищено максимальну кількість точок у маршруті
            if (waypoints_arr.length == 25) return open_dialog_error(error_text_12);

            const street_arr = data_street_arr.filter((e) => e.street_code == selected_code_administrative_unit.street_code);
            const house_arr = data_house_arr.filter((e) => e.house_code_street == selected_code_administrative_unit.street_code);

            waypoints_arr.push({
                location: {
                    lat: Number(house_arr[0].latitude),
                    lng: Number(house_arr[0].longitude),
                },
                stopover: true,
            });

            // Додає дані у перелік маршрутних точок для створення маркерів
            add_waypoints_full_arr(
                house_arr[0].house_id, 
                "data_house_arr", 
                `Перший будинок на вулиці`, 
                full_address, 
                house_arr[0].longitude, 
                house_arr[0].latitude,
                1
            );
            break;
        case "1,1,1,0,0": // Вибраний будинок
            // Перевіряє чи не перевищено максимальну кількість точок у маршруті
            if (waypoints_arr.length == 25) return open_dialog_error(error_text_12);

            const house_arr_2 = data_house_arr.filter((e) => e.house_id == selected_code_administrative_unit.house_code);

            waypoints_arr.push({
                location: {
                    lat: Number(house_arr_2[0].latitude),
                    lng: Number(house_arr_2[0].longitude),
                },
                stopover: true,
            });

            // Додає дані у перелік маршрутних точок для створення маркерів
            add_waypoints_full_arr(
                house_arr_2[0].house_id, 
                "data_house_arr", 
                `Будинок`, 
                full_address, 
                house_arr_2[0].longitude, 
                house_arr_2[0].latitude,
                1
            );
            break;
        case "1,1,1,1,0": // Вибраний підїзд
            // Перевіряє чи не перевищено максимальну кількість точок у маршруті
            if (waypoints_arr.length == 25) return open_dialog_error(error_text_12);

            const entrance_arr = data_entrance_arr.filter((e) => e.entrance_id == selected_code_administrative_unit.entrance_code);
            waypoints_arr.push({
                location: {
                    lat: Number(entrance_arr[0].entrance_latitude),
                    lng: Number(entrance_arr[0].entrance_longitude),
                },
                stopover: true,
            });

            // Додає дані у перелік маршрутних точок для створення маркерів
            add_waypoints_full_arr(
                entrance_arr[0].entrance_id, 
                "data_entrance_arr", 
                `Підїзд`, 
                full_address, 
                entrance_arr[0].entrance_longitude, 
                entrance_arr[0].entrance_latitude,
                2
            );
            break;
        case "1,1,1,1,1": // Вибрана квартира
            // Перевіряє чи не перевищено максимальну кількість точок у маршруті
            if (waypoints_arr.length == 25) return open_dialog_error(error_text_12);

            const apartment_arr = data_apartment_arr.filter((e) => e.id == selected_code_administrative_unit.apartment_code);
            const entrance_arr_2 = data_entrance_arr.filter((e) => e.entrance_id == apartment_arr[0].entrance_code);

            waypoints_arr.push({
                location: {
                    lat: Number(entrance_arr_2[0].entrance_latitude),
                    lng: Number(entrance_arr_2[0].entrance_longitude),
                },
                stopover: true,
            });

            // Додає дані у перелік маршрутних точок для створення маркерів
            add_waypoints_full_arr(
                apartment_arr[0].id, 
                "data_apartment_arr", 
                `Квартира`, 
                full_address, 
                entrance_arr_2[0].entrance_longitude, 
                entrance_arr_2[0].entrance_latitude,
                3
            );
            break;
        default:
            open_dialog_error(error_text_13);
            break;
    }
}