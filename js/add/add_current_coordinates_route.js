async function add_current_coordinates_route() {
    // Перевіряє чи не перевищено максимальну кількість точок у маршруті
    if (waypoints_arr.length == 25) return open_dialog_error(error_text_12);

    const geolocation = await geolocation_gps();

    waypoints_arr.push({
        location: {
            lat: geolocation.geolocation_latitude,
            lng: geolocation.geolocation_longitude,
        },
        stopover: true,
    });
    
    // Додає дані у перелік маршрутних точок для створення маркерів
    add_waypoints_full_arr(
        "current_coordinates", 
        "current_coordinates", 
        'Поточні кординати', 
        `${geolocation.geolocation_longitude} - ${ geolocation.geolocation_latitude}`, 
        geolocation.geolocation_longitude, 
        geolocation.geolocation_latitude
    );
}