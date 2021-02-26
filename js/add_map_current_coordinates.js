//https://developers.google.com/maps/documentation/javascript/examples/marker-remove

let marker_current_coordinates_arr = [];

async function add_map_current_coordinates() {
    if (marker_current_coordinates_arr.length == 1) {
        for (let i = 0; i < marker_current_coordinates_arr.length; i++) {
            marker_current_coordinates_arr[i].setMap(null);
        }
        marker_current_coordinates_arr = [];
        return;
    }

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

