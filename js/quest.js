let quest_obj = {
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

// Зберігає дані у локальному сховищі
function save_quest_obj() {
    localStorage.clear();
    const quest_str = JSON.stringify(quest_obj);
    localStorage.setItem("quest_obj", quest_str);
}

// Зчитує дані із локального сховища
function read_quest_obj() {
    const quest_str = localStorage.getItem("quest_obj");
    const obj = JSON.parse(quest_str);
    quest_obj = Object.assign(quest_obj, obj);
}

// Завантажити попередні результати квесту
function download_preliminary_quest_results() {
    // Зчитує дані із локального сховища
    read_quest_obj();

    // Завантажує інформацію про використані підказки
    document.getElementById("quest_hint").innerHTML = `Використано підказок: ${quest_obj.hints_used} із ${quest_obj.hints_residue}`;

    // Вставляє використані підказки
    quest_obj.used_arr.forEach((el) => {
        const arr = data_quests_arboretum_1.filter((e) => e.id == el);
        document.getElementById(`hint_foto_${el}`).innerHTML = `<img width="300" src="quests_photos/arboretum_1/quest_area_in_arboretum_${arr[0].hint}.webp" alt="Місце зйомки фото">`;
    });

    // Якщо підказок 0 то замінює кнопку на повідомлення про відсутність підказок
    if (quest_obj.hints_residue == 0) {
        data_quests_arboretum_1.forEach((e) => {
            if (!quest_obj.used_arr.includes(e.id)) document.getElementById(`hint_foto_${e.id}`).innerHTML = `Використано всі підказки`
        });
    }

    // Завантажує інформацію про кількість ведених помилкових кодів
    document.getElementById("quest_error").innerHTML = `Введено помилкових кодів: ${quest_obj.wrong_code_used} із ${quest_obj.wrong_code_residue}`;

    // Завантажує інформацію про кількість знайдених місць зйомки фото
    document.getElementById("quest_find").innerHTML = `Знайдено місць зйомки фото: ${quest_obj.photo_found_used} із ${quest_obj.photo_found_residue}`;

    // Видаляє знайдені фото
    quest_obj.photo_found_arr.forEach((el) => {
        document.getElementById(`photo_quest_block_photos_${el}`).remove();
    });

    // Завантажує інформацію про час початку проходження квесту
    document.getElementById("quest_date_time_start").innerHTML = `Квест розпочався: ${quest_obj.timer_start}`;

    // Запускає таймер
    start_timer();
}
