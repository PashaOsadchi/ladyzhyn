// Розраховує центральну точку
function calculates_central_point() {
    let central_point_longitude = 0;
    let central_point_latitude = 0;

    data_community_boundary_arr.forEach(el => {
        central_point_longitude += Number(el.community_boundary_longitude);
        central_point_latitude += Number(el.community_boundary_latitude);
    });
   
    central_point_longitude /= data_community_boundary_arr.length;
    central_point_latitude /= data_community_boundary_arr.length;
}