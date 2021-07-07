//https://overcoder.net/q/2429/%D0%BA%D0%B0%D0%BA-%D0%BC%D0%BD%D0%B5-%D1%81%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D0%B2-%D0%B1%D1%83%D1%84%D0%B5%D1%80-%D0%BE%D0%B1%D0%BC%D0%B5%D0%BD%D0%B0-%D0%B2-javascript

function сopy_buffer_exchange_link_coordinates_route() {
    if (waypoints_arr.length < 2) return open_dialog_error(error_text_10);

    let url_str = '';

    if (waypoints_arr.length > 2) {
        let waypoints_str = '';
        let waypoints_number = 0;

        waypoints_arr.forEach(el => {
            // Пропускає ітерацію цикла на перших кординатах
            if(i == 0) return;
            // Пропускає ітерацію цикла на останніх кординатах
            if(i == waypoints_arr.length - 1) return;

            if(waypoints_number == 0) {
                waypoints_str += `${el.location.lat},${el.location.lng}`;
            } else {
                waypoints_str += `|${el.location.lat},${el.location.lng}`;
            }
            waypoints_number += 1;
        });
        
        url_str  = `https://www.google.com/maps/dir/?api=1&origin=${waypoints_arr[0].location.lat},${waypoints_arr[0].location.lng}&waypoints=${waypoints_str}&destination=${waypoints_arr[waypoints_arr.length - 1].location.lat},${waypoints_arr[waypoints_arr.length - 1].location.lng}&travelmode=${paving_route_travel_mode}`;
    } else {
        url_str  = `https://www.google.com/maps/dir/?api=1&origin=${waypoints_arr[0].location.lat},${waypoints_arr[0].location.lng}&destination=${waypoints_arr[1].location.lat},${waypoints_arr[1].location.lng}&travelmode=${paving_route_travel_mode}`;
    }
    
    copy_clipboard(url_str, error_text_11);
}
