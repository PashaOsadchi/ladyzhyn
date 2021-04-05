// Розраховує центральну точку
function calculates_central_point() {
    let central_point_longitude = 0;
    let central_point_latitude = 0;

    for (let i = 0; i < data_community_boundary_arr.length; i++) {
        central_point_longitude += Number(data_community_boundary_arr[i].community_boundary_longitude);
        central_point_latitude += Number(data_community_boundary_arr[i].community_boundary_latitude);
    }
    central_point_longitude /= data_community_boundary_arr.length;
    central_point_latitude /= data_community_boundary_arr.length;

    //console.log(central_point_latitude, ' ', central_point_longitude);
}
//calculates_central_point()