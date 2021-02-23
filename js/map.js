// https://developers.google.com/maps/documentation/javascript/controls
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: new google.maps.LatLng(48.684743, 29.234444),
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
    });
}
