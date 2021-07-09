let bicycle_service_center_or_added = false;
let markers_bicycle_service_center = [];

function add_map_bicycle_service_center_all() {
 
    if (bicycle_service_center_or_added) return delete_bicycle_service_center_markers();

    const organization_arr = data_organization_arr.filter((e) => e.organization_id == "233");

    add_map_overlay_organization(organization_arr)

    bicycle_service_center_or_added = true;

    map.panTo(new google.maps.LatLng(Number(organization_arr[0].latitude), Number(organization_arr[0].longitude)));
    map.setZoom(19);
};