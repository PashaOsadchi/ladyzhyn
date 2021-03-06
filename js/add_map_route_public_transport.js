let polyline_route_public_transport_arr = [];

// Приховує вибраний маршрут руху
function delete_map_route_public_transport() {
    if (polyline_route_public_transport_arr.length) {
        // Видаляє межі усіх населених пунктів
        for (let i = 0; i < polyline_route_public_transport_arr.length; i++) {
            polyline_route_public_transport_arr[i].setMap(null);
        }
        polyline_route_public_transport_arr = [];
    }
    
}

// Додає на карту маршрут руху
function add_map_polyline_route_public_transport(obj) {
    const name_polyline = `polyline_route_public_transport_${obj}`;

    window[name_polyline] = new google.maps.Polyline({
        path: obj.patch,
        geodesic: true,
        draggable: false,
        editable: false,
        strokeColor: obj.stroke_сolor,
        strokeOpacity: 1.0,
        strokeWeight: 3,
        icons: [
            {
                icon: {
                    path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
                    scale: 3,
                    strokeWeight: 2,
                    strokeColor: "#FFD700",
                },
                offset: "100%",
                repeat: "60px",
            },
        ],
        map: map,
    });
    window[name_polyline].setMap(map);
    polyline_route_public_transport_arr.push(window[name_polyline]);

    const content_infoWindow = `<div style="font-size: 15px">${obj.detailed_information}</div>`;
    //var infoWindow = new google.maps.InfoWindow({content:contentString});

    let infoWindow = new google.maps.InfoWindow();

    // Відкриває InfoWindow при наведенні курсора миші
    google.maps.event.addListener(window[name_polyline], "mouseover", function (e) {
        infoWindow.setPosition(e.latLng);
        infoWindow.setContent(content_infoWindow);
        infoWindow.open(map);
    });

    // Закриває InfoWindow
    google.maps.event.addListener(window[name_polyline], "mouseout", function () {
        infoWindow.close();
    });
}

function add_map_route_public_transport() {
    delete_map_route_public_transport();

    // Визначає вибраний маршрут
    const select_route_public_transport_selectedIndex = document.getElementById('id_select_route_public_transport').selectedIndex;
    const select_route_public_transport_options = document.getElementById('id_select_route_public_transport').options;
    const select_route_public_transport_value = select_route_public_transport_options[select_route_public_transport_selectedIndex].value;

    const arr = data_route_public_transport_arr.filter((e) => e.id == select_route_public_transport_value);

    add_map_polyline_route_public_transport(arr[0]);
}