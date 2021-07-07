let bicycle_service_center_or_added = false;
let markers_bicycle_service_center = [];

function add_map_bicycle_service_center_all() {
 
    if (bicycle_service_center_or_added) return delete_bicycle_service_center_markers();

    const organization_arr = data_organization_arr.filter((e) => e.organization_id == "233");

    overlay = new custom_marker(new google.maps.LatLng(Number(organization_arr[0].latitude), Number(organization_arr[0].longitude)), map, {
        marker_id: `4-${organization_arr[0].organization_id}`,
        marker_name: `Веломайстерня: ${organization_arr[0].organization_name} (продаж, прокат, обслуговування)`,
        marker_class_name: 'marker marker_organization'
    });
    markers_bicycle_service_center.push(overlay);

    bicycle_service_center_or_added = true;

    map.panTo(new google.maps.LatLng(Number(organization_arr[0].latitude), Number(organization_arr[0].longitude)));
    map.setZoom(19);
};