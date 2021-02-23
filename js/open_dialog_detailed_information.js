function open_dialog_detailed_information(id) {
    //console.log(id)
    const id_arr = id.split("-");
    //console.log(id_arr)
    const dialog_detailed_information = document.getElementById("id_dialog_detailed_information");

    switch (Number(id_arr[0])) {
        // Будинок
        case 1:
            const house_arr = data_house_arr.filter((e) => e.house_id == id_arr[1]);
            dialog_detailed_information.showModal();

            let house_str = `
            <div id="dialog_detailed_information_header">Детальна інформація про будинок</div>
            <div id="dialog_detailed_information_content">
            <b>Номер будинку: </b> ${house_arr[0].house_name} `;

            house_arr[0].house_multifamily == "true" ? house_str += `(багатоквартирний)<br>` : house_str += `<br>`;

            if (house_arr[0].house_kadastr_number) { house_str += `<b>Кадастровий номер:</b> <a href="https://e.land.gov.ua/back/cadaster/?cad_num=${house_arr[0].house_kadastr_number}">${house_arr[0].house_kadastr_number}</a>` }

            dialog_detailed_information.innerHTML = `${house_str}</div>`;
            break;
        // Підїзд
        case 2:
            const entrance_arr = data_entrance_arr.filter((e) => e.entrance_id == id_arr[1]);
            dialog_detailed_information.showModal();

            dialog_detailed_information.innerHTML =  `
            <div id="dialog_detailed_information_header">Детальна інформація про підїзд</div>
            <<div id="dialog_detailed_information_content">
            <b>Номер підїзду: </b> ${entrance_arr[0].entrance_name}<br>
            <b>Квартири: </b> ${entrance_arr[0].entrance_first_apartment_entrance} - ${entrance_arr[0].entrance_last_apartment_entrance}  
            </div>`;
            break;
        // Квартира
        case 3:
            const apartment_arr = data_apartment_arr.filter((e) => e.apartment_id == id_arr[1]);
            dialog_detailed_information.showModal();

            let apartment_str = `
            <div id="dialog_detailed_information_header">Детальна інформація про квартиру</div>
            <<div id="dialog_detailed_information_content">
            <b>Номер квартири: </b> ${apartment_arr[0].apartment_name} `;
            if (apartment_arr[0].apartment_kadastr_number) { apartment_str += `<b>Кадастровий номер:</b> <a href="https://e.land.gov.ua/back/cadaster/?cad_num=${apartment_arr[0].apartment_kadastr_number}">${apartment_arr[0].apartment_kadastr_number}</a>` }

            dialog_detailed_information.innerHTML = `${apartment_str}</div>`;
            break;
        // Організація
        case 4:
            const organization_arr = data_organization_arr.filter((e) => e.organization_id == id_arr[1]);
            dialog_detailed_information.showModal();

            let organization_str = `
            <div id="dialog_detailed_information_header">Детальна інформація про організацію</div>
            <div id="dialog_detailed_information_content">
            <b>Назва: </b> ${organization_arr[0].organization_name}<br>
            <b>Тип: </b> ${organization_arr[0].organization_type}<br>
            <b>Адреса: </b> ${organization_arr[0].organization_address}<br>`;

            if (organization_arr[0].organization_note_address) organization_str += `<b>Примітка до адреси: </b> ${organization_arr[0].organization_note_address}<br>`;
            
            organization_str += `
            <b>Графік роботи</b><br>
            <b>Понеділок: </b> ${organization_arr[0].organization_monday}<br>
            <b>Вівторок: </b> ${organization_arr[0].organization_tuesday}<br>
            <b>Середа: </b> ${organization_arr[0].organization_wednesday}<br>
            <b>Четвер: </b> ${organization_arr[0].organization_thursday}<br>
            <b>Пятниця: </b> ${organization_arr[0].organization_friday}<br>
            <b>Субота: </b> ${organization_arr[0].organization_saturday}<br>
            <b>Неділя: </b> ${organization_arr[0].organization_sunday}
            </div>`;

            dialog_detailed_information.innerHTML = organization_str;
            break;
        default:
            return open_dialog_error(error_text_29);
    }
}