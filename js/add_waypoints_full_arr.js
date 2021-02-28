// Додає дані у перелік маршрутних точок для створення маркерів
function add_waypoints_full_arr(id, name_arr, name_address, full_address, longitude, latitude) {
    let index = waypoints_full_arr.length;

    waypoints_full_arr.push({
        id: `waypoints_${index}`,
        name_arr: name_arr,
        name: `${name_address}: ${full_address}`,
        name_address: name_address,
        full_address: full_address,
        longitude: longitude,
        latitude: latitude,
    });

    const div = document.createElement("div");
    div.setAttribute("id", `waypoints_${index}`);
    //div.setAttribute("value", value);
    div.setAttribute("class", "class_div_add_address_route");
    //div.setAttribute("draggable", "true");
    div.innerHTML = `
     <div class="field_name">${name_address}: </div> 
     <div class="field_value">${full_address}</div>
     <div onclick="delete_waypoints('waypoints_${index}')" class="field_close">
        <div class="cross_close"></div>
     </div>
     `;

    document.getElementById("id_list_waypoints").appendChild(div);
}


function delete_waypoints(id) {
    const arr = waypoints_full_arr.filter((e) => e.id == id);

    // Видаляє одну маршрутну точку у масиві
    waypoints_arr = waypoints_arr.filter(item => item.location.lat !== Number(arr[0].latitude) && item.location.lng !== Number(arr[0].longitude));

    // Видаляє одну маршрутну точку у масиві
    waypoints_full_arr = waypoints_full_arr.filter(item => item.id !== id);

    // Видаляє одну маршрутну точку у переліку маршрутних точок
    document.getElementById(id).remove();
}