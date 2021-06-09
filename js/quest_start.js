function start_quest() {
    document.getElementById("quest_hint").innerHTML = 'Використано підказок: 0 із 5';
    document.getElementById("quest_error").innerHTML = 'Введено помилкових кодів: 0 із 5';
    document.getElementById("quest_find").innerHTML = 'Знайдено місць зйомки фото: 0 із 10';
    document.getElementById("quest_time").innerHTML = 'Час проходження квесту:';
    document.getElementById("quest_date_time_start").innerHTML = 'Квест розпочався:';

    let list_quest_photos = "";

    data_quests_arboretum_1.forEach((el) => {
        // Усуває помилку зміщення контенту підчас завантаження зображення
        const img_height = el.height / (el.width / window.innerWidth);

        list_quest_photos += `
        <div class="photo_quest_block_photos" id="photo_quest_block_photos_${el.id}">
            <img height="${img_height}" src="quests_photos/arboretum_1/${el.id}.webp" alt="${el.name}">

            <div class="hint_foto_block" id="hint_foto_${el.id}">
                <button class="button_hint" onclick="quest_hint(${el.id})">Показати підказку</button>
            </div>

            <div class="photo_quest_block_code">
                Знайди місце зйомки фото та веди трьохзначний код із таблички розміщеної на найближчі ${el.location_code}

                <input class="quest_code" type="tel" name="" id="" maxlength="3" oninput="event_value_validate_quest_code(${el.id}, this.value)">
            </div>
        </div>
        `;
    });

    const photo_gallery_content = document.getElementById("quest_content");

    photo_gallery_content.innerHTML = list_quest_photos;

    document.getElementById("id_page_header").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("id_sidebar").style.display = "none";
    document.getElementById("id_body").style.display = "block";
    document.getElementById("id_body").style.backgroundColor = "rgb(255, 255, 255)";

    document.getElementById("quest").style.display = "block";
}

// Запускає новий квест
function start_new_quest() {
    quest_obj = {
        timer_seconds: 0, // Кількість секунд які прайшли від початку квесту
        timer_start: "", // Дата
        hints_used: 0, // використано підказок
        hints_residue: 5, // залишилося підказок
        used_arr: [], // Перелік відкритих підказок
    
        wrong_code_used: 0, // Ведено помилкових кодів
        wrong_code_residue: 5, // Залишилося спроб вести дійсний код
    
        photo_found_used: 0, // Знайдено фото
        photo_found_residue: 10, // Залишилося знайти фото
        photo_found_arr: [], // Перелік знайдених фото
    };

    start_quest();

    current_date();
    quest_obj.timer_start = date_now.date_time_seconds_format_text;
    document.getElementById("quest_date_time_start").innerHTML = `Квест розпочався: ${quest_obj.timer_start}`;

    // Зберігає дані у локальному сховищі
    save_quest_obj();

    // Запускає таймер
    start_timer();
}


// Закінчити минулий квест
function complete_last_quest() {
    start_quest();

    download_preliminary_quest_results();

    // Виконується якщо знайдено всі фото
    if (quest_obj.photo_found_used == 10) all_photos_found();

    // Виконується якщо закінченно проходження квесту через максимальне ведення помилкових кодів
    if (quest_obj.wrong_code_used == 5) end_quest_due_maximum_maintenance_erroneous_codes();
}

function close_quest() {
    clearTimeout(clock_timer);
    
    document.getElementById("quest").style.display = 'none';

    document.getElementById("id_page_header").style.display = 'block';
    document.getElementById("map").style.display = 'block';
    document.getElementById("id_sidebar").style.display = 'block';
    document.getElementById("id_body").style.display = 'grid';
    document.getElementById("id_body").style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}


