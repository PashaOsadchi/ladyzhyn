//https://developers.google.com/maps/documentation/javascript/examples/marker-remove

let marker_current_coordinates_arr = [];
let marker_current_coordinates_or_added = false;

async function add_map_current_coordinates() {
    if (marker_current_coordinates_or_added) {
        marker_current_coordinates_or_added = false;
        return  delete_markers_1(marker_current_coordinates_arr);
    }

    marker_current_coordinates_or_added = true;

    const geolocation = await geolocation_gps();

    const marker = new google.maps.Marker({
        position: { lat: geolocation.geolocation_latitude, lng: geolocation.geolocation_longitude },
        map: map,
        title: "Ваше поточне місце розташування!",
        icon: marker_you_are_here_obj
    });
    marker_current_coordinates_arr.push(marker);

    map.panTo(new google.maps.LatLng(geolocation.geolocation_latitude, geolocation.geolocation_longitude));
    map.setZoom(19);
}

