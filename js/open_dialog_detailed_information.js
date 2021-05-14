let archival_photo_upload_status = false;

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
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про будинок</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            <b>Номер будинку: </b> ${house_arr[0].house_name} `;

            house_arr[0].house_multifamily == "true" ? (house_str += `(багатоквартирний)<br>`) : (house_str += `<br>`);

            if (house_arr[0].house_kadastr_number) {
                house_str += `<b>Кадастровий номер:</b> <a href="https://e.land.gov.ua/back/cadaster/?cad_num=${house_arr[0].house_kadastr_number}">${house_arr[0].house_kadastr_number}</a>`;
            }

            dialog_detailed_information.innerHTML = `${house_str}</div>`;
            break;
        // Підїзд
        case 2:
            const entrance_arr = data_entrance_arr.filter((e) => e.entrance_id == id_arr[1]);
            dialog_detailed_information.showModal();

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про підїзд</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            <b>Номер підїзду: </b> ${entrance_arr[0].entrance_name}<br>
            <b>Квартири: </b> ${entrance_arr[0].entrance_first_apartment_entrance} - ${entrance_arr[0].entrance_last_apartment_entrance}  
            </div>`;
            break;
        // Квартира
        case 3:
            const apartment_arr = data_apartment_arr.filter((e) => e.id == id_arr[1]);
            dialog_detailed_information.showModal();

            let apartment_str = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про квартиру</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            <b>Номер квартири: </b> ${apartment_arr[0].name} `;
            if (apartment_arr[0].kadastr_number) {
                apartment_str += `<b>Кадастровий номер:</b> <a href="https://e.land.gov.ua/back/cadaster/?cad_num=${apartment_arr[0].kadastr_number}">${apartment_arr[0].kadastr_number}</a>`;
            }

            dialog_detailed_information.innerHTML = `${apartment_str}</div>`;
            break;
        // Організація
        case 4:
            const organization_arr = data_organization_arr.filter((e) => e.organization_id == id_arr[1]);
            dialog_detailed_information.showModal();

            let organization_str = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про організацію</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            <b>Назва: </b> ${organization_arr[0].organization_name}<br>
            <b>Тип: </b> ${organization_arr[0].organization_type}<br>`;

            switch (organization_arr[0].organization_commodity_specialization) {
                case "food_goods":
                    organization_str += `<b>Спеціалізація: </b> харчові групи товарів<br>`;
                    break;
                case "mixed_goods":
                    organization_str += `<b>Спеціалізація: </b> змішані групи товарів<br>`;
                    break;
                case "non_food_goods":
                    organization_str += `<b>Спеціалізація: </b> нехарчові групи товарів<br>`;
            }

            if (organization_arr[0].organization_phone_2) organization_str += `<b>Телефон: </b> <a href="tel:${organization_arr[0].organization_phone_2}">${organization_arr[0].organization_phone_2}</a><br>`;

            organization_str += `<b>Адреса: </b> ${organization_arr[0].organization_address}<br>`;

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
        // Облаштована зона відпочинку
        case 5:
            const equipped_recreation_areas_arr = data_equipped_recreation_areas_arr.filter((e) => e.id == id_arr[1]);
            dialog_detailed_information.showModal();

            let equipped_recreation_areas_str = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про облаштовану зону відпочинку</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            ${equipped_recreation_areas_arr[0].name} `;
            if (equipped_recreation_areas_arr[0].detailed_information !== "") {
                equipped_recreation_areas_str += `<br><b>Детальна інформація:</b><br> ${equipped_recreation_areas_arr[0].detailed_information}`;
            }

            dialog_detailed_information.innerHTML = `${equipped_recreation_areas_str}</div>`;
            break;
        // Зупинка громадського транспорту
        case 6:
            const public_transport_stops_arr = data_public_transport_stops_arr.filter((e) => e.id == id_arr[1]);
            dialog_detailed_information.showModal();

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про графіки руху</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            ${public_transport_stops_arr[0].detailed_information}</div>`;

            break;
        // Дошка оголошень
        case 7:
            const bulletin_boards_arr = data_bulletin_boards_arr.filter((e) => e.id == id_arr[1]);
            dialog_detailed_information.showModal();

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про дошку оголошень</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            ${bulletin_boards_arr[0].detailed_information}</div>`;

            break;
        // Білборди
        case 8:
            const billboards_arr = data_billboards_arr.filter((e) => e.id == id_arr[1]);
            dialog_detailed_information.showModal();

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про білборд</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            ${billboards_arr[0].detailed_information}</div>`;

            break;
        // Сітілайти
        case 9:
            const city_lights_arr = data_city_lights_arr.filter((e) => e.id == id_arr[1]);
            dialog_detailed_information.showModal();

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про сітілайт</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            ${city_lights_arr[0].detailed_information}</div>`;

            break;
        // Велопарковки
        case 10:
            const bicycle_parking_arr = data_bicycle_parking_arr.filter((e) => e.id == id_arr[1]);
            dialog_detailed_information.showModal();

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про велопарковку</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            ${bicycle_parking_arr[0].detailed_information}</div>`;

            break;
        // Населений пункт
        case 11:
            const human_settlement_arr = data_human_settlement_arr.filter((e) => e.human_settlement_id == id_arr[1]);
            dialog_detailed_information.showModal();

            const number_house_arr = data_house_arr.filter((e) => e.house_human_settlement_code == id_arr[1]);

            const number_entrance_arr = data_entrance_arr.filter((e) => e.entrance_human_settlement_code == id_arr[1]);
            street_arr = data_street_arr.filter((e) => e.street_human_settlement_code == id_arr[1]);

            let counter_apartment = 0;
            for (let i = 0; i < number_entrance_arr.length; i++) {
                const arr = data_apartment_arr.filter((e) => e.apartment_entrance_code == number_entrance_arr[i].entrance_id);
                counter_apartment += arr.length;
            }

            const total_number_registered_person =
                human_settlement_arr[0].human_settlement_total_number_registered_men +
                human_settlement_arr[0].human_settlement_total_number_registered_women +
                human_settlement_arr[0].human_settlement_total_number_registered_children_up_14_years +
                human_settlement_arr[0].human_settlement_total_number_registered_children_from_14_to_18_years;
            const human_settlement_total_number_registered_men = `${human_settlement_arr[0].human_settlement_total_number_registered_men} (${Math.trunc(
                ((human_settlement_arr[0].human_settlement_total_number_registered_men / total_number_registered_person) * 100 * 100) / 100
            )}%)`;
            const human_settlement_total_number_registered_women = `${human_settlement_arr[0].human_settlement_total_number_registered_women} (${Math.trunc(
                ((human_settlement_arr[0].human_settlement_total_number_registered_women / total_number_registered_person) * 100 * 100) / 100
            )}%)`;
            const human_settlement_total_number_registered_children_up_14_years = `${human_settlement_arr[0].human_settlement_total_number_registered_children_up_14_years} (${Math.trunc(
                ((human_settlement_arr[0].human_settlement_total_number_registered_children_up_14_years / total_number_registered_person) * 100 * 100) / 100
            )}%)`;
            const human_settlement_total_number_registered_children_from_14_to_18_years = `${
                human_settlement_arr[0].human_settlement_total_number_registered_children_from_14_to_18_years
            } (${Math.trunc(((human_settlement_arr[0].human_settlement_total_number_registered_children_from_14_to_18_years / total_number_registered_person) * 100 * 100) / 100)}%)`;

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про населений пункт</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            <b>Імя населеного пункту: </b> ${human_settlement_arr[0].human_settlement_short_name}<br>
            <b>Індекс: </b> ${human_settlement_arr[0].human_settlement_zip_code}<br>
            <br>
            <b>Загальна кількість будинків: </b> ${number_house_arr.length}<br>            
            <b>Кількість будинків приватного сектору: </b> ${number_house_arr.filter((e) => e.house_multifamily == false).length}<br>
            <b>Кількість багатоквартирних будинків: </b> ${number_house_arr.filter((e) => e.house_multifamily == true).length}<br>
            <b>Кількість вулиць: </b> ${street_arr.length}<br>
            <b>Кількість підїздів: </b> ${number_entrance_arr.length}<br>
            <b>Кількість квартир: </b> ${counter_apartment}<br>
            <br>
            <b>Зареєстровано всього осіб: </b> ${total_number_registered_person}<br>
            <b>Зареєстровано чоловіків (% від загальної кількості): </b> ${human_settlement_total_number_registered_men}<br>
            <b>Зареєстровано жінок (% від загальної кількості): </b> ${human_settlement_total_number_registered_women}<br>
            <b>Зареєстровано дітей до 14 років (% від загальної кількості): </b> ${human_settlement_total_number_registered_children_up_14_years}<br>
            <b>Зареєстровано дітей від 14 до 18 років (% від загальної кількості): </b> ${human_settlement_total_number_registered_children_from_14_to_18_years}<br>
            </div>`;
            break;
        // Об'єкти альтернативної енергетики
        case 12:
            const alternative_energy_facilities_arr = data_alternative_energy_facilities_arr.filter((e) => e.id == id_arr[1]);
            dialog_detailed_information.showModal();

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">Детальна інформація про об'єкт альтернативної енергетики</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
            ${alternative_energy_facilities_arr[0].detailed_information}</div>`;
            break;
        // Архівні фото
        case 13:
            archival_photo_upload_status = false;

            const archival_photos_arr = data_archival_photos_arr.filter((e) => e.id == id_arr[1]);

            dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">${archival_photos_arr[0].name}</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
                <img class="img_archival_photos" src="archival_photos/${archival_photos_arr[0].id}.webp" alt="${archival_photos_arr[0].name}" onload="img_archival_photos_loaded()""> 
            </div>`;

            setTimeout(() => {
                if (!archival_photo_upload_status) {
                    open_circles_preloader();
                }
            }, 300);

            break;
        default:
            return open_dialog_error(error_text_29);
    }
}

function img_archival_photos_loaded() {
    archival_photo_upload_status = true;

    const dialog_detailed_information = document.getElementById("id_dialog_detailed_information");

    id_dialog_circles_preloader.close();
    dialog_detailed_information.showModal();
}

function view_all_archival_photos() {

    // Усуває помилку зміщення контенту підчас завантаження зображення
    let img_width = ((window.innerWidth/100)* 92) - 10;

    // Попередньо завантажує зображення
    data_archival_photos_arr.forEach((el) => {
        let img = new Image(el.width, el.height);

        img.src = `archival_photos/${el.id}.webp`;
    });

    open_circles_preloader(); 

    setTimeout(() => {
        let list_archival_photos = "";

        const dialog_detailed_information = document.getElementById("id_dialog_detailed_information");

        data_archival_photos_arr.forEach((el) => {
            // Усуває помилку зміщення контенту підчас завантаження зображення
            const img_height = el.height/(el.width/img_width);

            list_archival_photos += `
            <div class="block_archival_photos">
                <img class="view_all_img_archival_photos" height="${img_height}" src="archival_photos/${el.id}.webp" alt="${el.name}">

                <div class="block_archival_photos_name">
                    ${el.name}
                </div>
            </div>
            `;
        });

        dialog_detailed_information.innerHTML = `
                <div id="dialog_header">
                    <div id="dialog_detailed_information_header">Галерея архівних фото</div>
                    <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
                </div> 

                <div id="dialog_content">
                    ${list_archival_photos}
                </div>`;

        id_dialog_circles_preloader.close();
        dialog_detailed_information.showModal();
    }, 1000);
}

function view_spadshchyna_photos(id) {
    let list_spadshchyna_photos = "";

    const dialog_detailed_information = document.getElementById("id_dialog_detailed_information");

    const spadshchyna_photos_arr = data_spadshchyna_photos.filter((e) => e.workshop_id == id);

    spadshchyna_photos_arr[0].photos.forEach((el) => {
        if (el.name == '') {
            list_spadshchyna_photos += `
        <div class="block_archival_photos">
            <img class="view_all_img_archival_photos" src="spadshchyna_photos/${id}/${el.id}.webp" alt="${el.name}">
        </div>
        `;
        } else {
            list_spadshchyna_photos += `
        <div class="block_archival_photos">
            <img class="view_all_img_archival_photos" src="spadshchyna_photos/${id}/${el.id}.webp" alt="${el.name}">

            <div class="block_archival_photos_name">
                ${el.name}
            </div>
        </div>
        `;
        }
    });

    dialog_detailed_information.innerHTML = `
            <div id="dialog_header">
                <div id="dialog_detailed_information_header">${spadshchyna_photos_arr[0].workshop_name}</div>
                <img height="16" width="16" id="icon_close_dialog" src="icon/close.png" alt="Закрити" onclick="id_dialog_detailed_information.close()"> 
            </div> 

            <div id="dialog_content">
                ${list_spadshchyna_photos}
            </div>`;

    open_circles_preloader();

    setTimeout(() => {
        id_dialog_circles_preloader.close();
        dialog_detailed_information.showModal();
    }, 1000);
}

