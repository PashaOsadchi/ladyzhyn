// https://developers.google.com/maps/documentation/javascript/examples/geometry-headings
// https://stackoverflow.com/questions/30976061/google-maps-javascript-computeheading-and-compass-direction-to-calculate-direc
// http://www.movable-type.co.uk/scripts/latlong.html

// Розрахунок курсу між першою точкою на другу точку
function calculate_course(lat_1, lon_1, lat_2, lon_2) {
    const point_1 = new google.maps.LatLng(lat_1, lon_1);
    const point_2 = new google.maps.LatLng(lat_2, lon_2);

    const course = google.maps.geometry.spherical.computeHeading(point_1, point_2);

    return Math.trunc(course * 100) / 100;
}

// Розраховує відстань між двома точками
function calculate_distance(lat_1, lon_1, lat_2, lon_2) {
    const point_1 = new google.maps.LatLng(lat_1, lon_1);
    const point_2 = new google.maps.LatLng(lat_2, lon_2);

    const distance = google.maps.geometry.spherical.computeDistanceBetween(point_1, point_2);

    return Math.trunc(distance * 100) / 100;
}

// Розрахунок кординат точки на курсові до другої точки на певні відстані від першої точки
function calculate_point_course(lat_1, lon_1, distance, course) {
    const point_1 = new google.maps.LatLng(lat_1, lon_1);

    let coordinates_str = google.maps.geometry.spherical.computeOffset(point_1, distance, course);

    coordinates_str = coordinates_str.toString();
    //console.log(coordinates_str) // (48.66908311029324, 29.302364945691135)

    coordinates_str = coordinates_str.replace('(', '');
    coordinates_str = coordinates_str.replace(')', '');

    const arr = coordinates_str.split(', ');

    arr[0] = Number(arr[0]);
    arr[0] = Math.trunc(arr[0] * 100000000) / 100000000;

    arr[1] = Number(arr[1]);
    arr[1] = Math.trunc(arr[1] * 100000000) / 100000000;

    return arr;
}

// Довжина полілінії
//const meters = google.maps.geometry.spherical.computeLength(poly.getPath());