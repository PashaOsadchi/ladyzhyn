// https://developers.google.com/maps/documentation/javascript/directions

const directionsDisplay = new google.maps.DirectionsRenderer();
const directionsService = new google.maps.DirectionsService();
directionsDisplay.setOptions({ suppressMarkers: true });
directionsDisplay.setMap(map);

function paving_route() {
    // console.log(waypoints_arr)
    // Перевіряє чи додано мінімально необхідну кількість точок у маршрут
    if (waypoints_arr.length < 2) return open_dialog_error(error_text_30);

    const request = {
        origin: new google.maps.LatLng(waypoints_arr[0].location.lat, waypoints_arr[0].location.lng), // Точка старту
        destination: new google.maps.LatLng(waypoints_arr[0].location.lat, waypoints_arr[0].location.lng), // Точка фінішу
        waypoints: waypoints_arr, // Перелік маршрутних точок
        optimizeWaypoints: false, // Вказує що маршрут може бути оптимізовано тобто буде розрахований оптимальний маршрут між точками
        provideRouteAlternatives: false, //  true - вказує, що служба маршрутів може надавати у відповіді більше одного варіанту маршруту (тільки коли відсутні проміжні точки)
        travelMode: google.maps.DirectionsTravelMode[paving_route_travel_mode], // Вид транспорту який використовується (WALKING  DRIVING)[paving_route_travel_mode]
    };

    // Викликається API Google Maps для визначення маршруту
    directionsService.route(request, function (response, status) {
        // Перевіряється результат надходження маршруту
        switch (status) {
            // Вказує, що відповідь містить дійсний DirectionsResult
            case google.maps.DirectionsStatus.OK:
                directionsDisplay.setDirections(response);

                for (let i = 0; i < waypoints_full_arr.length; i++) {
                    overlay = new custom_marker(new google.maps.LatLng(Number(waypoints_full_arr[i].latitude), Number(waypoints_full_arr[i].longitude)), map, {
                        marker_id: `${waypoints_full_arr[i].dialog_detailed_information_code}-${waypoints_full_arr[i].code}`,
                        marker_name: waypoints_full_arr[i].name,
                        marker_class_name: 'marker marker_route'
                    });
                    markers_route.push(overlay);
                }

                directionsDisplay.setMap(map);
                map_offset_route(waypoints_full_arr);
                break;
            case google.maps.DirectionsStatus.NOT_FOUND:
                open_dialog_error(error_text_31);
                break;
            case google.maps.DirectionsStatus.ZERO_RESULTS:
                open_dialog_error(error_text_32);
                break;
            case google.maps.DirectionsStatus.MAX_WAYPOINTS_EXCEEDED:
                open_dialog_error(error_text_33);
                break;
            case google.maps.DirectionsStatus.MAX_ROUTE_LENGTH_EXCEEDED:
                open_dialog_error(error_text_34);
                break;
            case google.maps.DirectionsStatus.INVALID_REQUEST:
                open_dialog_error(error_text_35);
                break;
            case google.maps.DirectionsStatus.OVER_QUERY_LIMIT:
                open_dialog_error(error_text_36);
                break;
            case google.maps.DirectionsStatus.REQUEST_DENIED:
                open_dialog_error(error_text_37);
                break;
            case google.maps.DirectionsStatus.UNKNOWN_ERROR:
                open_dialog_error(error_text_38);
                break;
            default:
                open_dialog_error(error_text_39);
                break;
        }
    });

    
}
