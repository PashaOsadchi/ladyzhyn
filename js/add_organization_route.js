function add_organization_route() {
    // Перевіряє чи не перевищено максимальну кількість точок у маршруті
    if (waypoints_arr.length == 25) return open_dialog_error(error_text_12);

    // Визначає вибрану організацію
    const select_organization_selectedIndex = document.getElementById('id_select_found_organization').selectedIndex;
    const select_organization_options = document.getElementById('id_select_found_organization').options;
    const organization_code = select_organization_options[select_organization_selectedIndex].value;

    if (organization_code == '') return open_dialog_error(error_text_14);

    const organization_arr = data_organization_arr.filter((e) => e.organization_id == organization_code);

    // Створює та додає адресу у перелік маршрутних точо
    waypoints_arr.push(
        {
            location: {
                lat: Number(organization_arr[0].organization_latitude),
                lng: Number(organization_arr[0].organization_longitude)
            },
            stopover: true
        });

    const name_organization = `${organization_arr[0].organization_id}. ${organization_arr[0].organization_type}: ${organization_arr[0].organization_name}`;

    // Додає дані у перелік маршрутних точок для створення маркерів
    add_waypoints_full_arr(
        organization_arr[0].organization_id, 
        'data_organization_arr', 
        'Організація', 
        name_organization, 
        organization_arr[0].organization_longitude, 
        organization_arr[0].organization_latitude
    );
}