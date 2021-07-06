let polyline_traffic_flows_arr = [];
let markers_traffic_flows = [];

function add_map_traffic_flows() {
    if (polyline_traffic_flows_arr.length) {
        delete_polyline_traffic_flow();
        delete_traffic_flows_markers();
        return;
    }

    data_traffic_flows_arr.forEach((el) => add_map_polyline_traffic_flows(el));

    // Формує масив кординат для маштабування карти
    let dataset_arr = [];
    data_traffic_flows_arr.forEach((el) =>
        dataset_arr.push({
            latitude: el.coordinates[0].lat,
            longitude: el.coordinates[0].lng,
        })
    );

    // Маштабує карту
    map_offset(dataset_arr);
}

// Додає на карту
function add_map_polyline_traffic_flows(obj) {
    const poly_traffic_flows = `poly__traffic_flows${obj.id}`;

    window[poly_traffic_flows] = new google.maps.Polyline({
        path: obj.coordinates,
        geodesic: true,
        draggable: false,
        editable: false,
        strokeColor: "#ff001e",
        strokeOpacity: 1.0,
        strokeWeight: 8,
        map: map,
    });
    window[poly_traffic_flows].setMap(map);
    polyline_traffic_flows_arr.push(window[poly_traffic_flows]);

    // Розраховує кординати середини лінії контролю
    const distance = calculate_distance(obj.coordinates[0].lat, obj.coordinates[0].lng, obj.coordinates[1].lat, obj.coordinates[1].lng);
    const course = calculate_course(obj.coordinates[0].lat, obj.coordinates[0].lng, obj.coordinates[1].lat, obj.coordinates[1].lng);
    const coordinates_point = calculate_point_course(obj.coordinates[0].lat, obj.coordinates[0].lng, distance / 2, course);

    // Додає маркер
    overlay = new custom_marker(new google.maps.LatLng(coordinates_point[0], coordinates_point[1]), map, {
        marker_id: `14-${obj.id}`,
        marker_name: `${obj.total_traffic_flows} транс. зас. за 24год`,
        marker_class_name: "marker marker_traffic_flows",
    });
    markers_traffic_flows.push(overlay);
}
