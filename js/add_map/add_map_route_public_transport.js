let polyline_route_public_transport_arr = [];

// Додає на карту маршрут руху
function add_map_polyline_route_public_transport(id) {

    delete_route_public_transport_markers();

    const arr = data_route_public_transport_arr.filter((e) => e.id == id);

    const obj = arr[0];

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
    google.maps.event.addListener(window[name_polyline], "mouseover", (e) => {
        infoWindow.setPosition(e.latLng);
        infoWindow.setContent(content_infoWindow);
        infoWindow.open(map);
    });

    // Закриває InfoWindow
    google.maps.event.addListener(window[name_polyline], "mouseout", () => infoWindow.close());
}