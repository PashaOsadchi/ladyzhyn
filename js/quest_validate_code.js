/* function generates_hash() {
    const arr = [142, 773, 231, 385, 255, 316, 659, 891, 567, 638];

    arr.forEach((el) => {
        console.log(calculate_hash(el));
    });
}
generates_hash(); */

// Розраховує хеш суму із веденого коду
function calculate_hash(code) {
    let hash = 0;
    const str = String(code);

    if (str.length == 0) return hash;

    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function event_value_validate_quest_code(id, text) {

    if (text.length == 3) {
       //console.log(id)
       //console.log(text)

       // Розраховує хеш суму із веденого коду
       const hash = calculate_hash(text);
       const arr = data_quests_arboretum_1.filter( (e) => e.hash_sum_code == hash);

       // Виконується якщо код не знайдено
       if (arr.length == 0) {

            if (quest_obj.wrong_code_residue == 5) {
                quest_obj.wrong_code_residue--;
                quest_obj.wrong_code_used++;
            
                // Зберігає дані у локальному сховищі
                save_quest_obj();

            } else if (quest_obj.wrong_code_residue < 5 && quest_obj.wrong_code_residue > 0) {
                quest_obj.wrong_code_residue--;
                quest_obj.wrong_code_used++;
            
                // Зберігає дані у локальному сховищі
                save_quest_obj();
            }

            document.getElementById("quest_error").innerHTML = `Введено помилкових кодів: ${quest_obj.wrong_code_used} із 5`;

            // Повідомлення про закінчення проходження квесту через максимальне ведення помилкових кодів
            if (quest_obj.wrong_code_used == 5) {
                return end_quest_due_maximum_maintenance_erroneous_codes();
            } else {
                return open_dialog_error(error_text_42);
            }
        }

        // Виконується якщо код знайдено
        // Видаляє поточний блок із фотографією
        document.getElementById(`photo_quest_block_photos_${id}`).remove();

        if (quest_obj.photo_found_residue == 10) {
            quest_obj.photo_found_residue--;
            quest_obj.photo_found_used++;
        
            // Добавляє у масив номер знайденого фото
            quest_obj.photo_found_arr = quest_obj.photo_found_arr.concat(id);
        
            // Зберігає дані у локальному сховищі
            save_quest_obj();

        } else if (quest_obj.photo_found_residue < 10 && quest_obj.photo_found_residue > 0) {
            quest_obj.photo_found_residue--;
            quest_obj.photo_found_used++;
        
            // Добавляє у масив номер знайденого фото
            quest_obj.photo_found_arr = quest_obj.photo_found_arr.concat(id);
        
            // Зберігає дані у локальному сховищі
            save_quest_obj();
        }

        // Виконується якщо знайдено всі фото
        if (quest_obj.photo_found_used == 10) all_photos_found();
        
        document.getElementById("quest_find").innerHTML = `Знайдено місць зйомки фото: ${quest_obj.photo_found_used} із 10`;
    } 
};

// Виконується якщо знайдено всі фото
function all_photos_found() {
    // Зупиняє таймер
    clearTimeout(clock_timer);

    // Виводить повідомлення про успішне закінчення квесту
    document.getElementById("quest_content").innerHTML = `
    <div id="title_message_about_successful_completion_quest">ВІТАЄМО</div>
    <div id="text_message_about_successful_completion_quest">ви успішно завершили проходження квесту</div>
    <div id="text_copy_clipboard_message_about_successful_completion_quest">(результат скопійовано до буферу обміну)</div>
    `;

    const quest_str = `
Квест №1
Локація: Дендрологічний парк Ладижинський гай
Використано підказок: ${quest_obj.hints_used} із 5
Введено помилкових кодів: ${quest_obj.wrong_code_used} із 5
Знайдено місць зйомки фото: ${quest_obj.photo_found_used} із 10
Час проходження квесту: ${formatting_seconds_days_hours_min_seconds(quest_obj.timer_seconds)}
Квест розпочався: ${quest_obj.timer_start}
`;

    copy_clipboard(quest_str, 'результат проходження квесту');
    
}

// Повідомлення про закінчення проходження квесту через максимальне ведення помилкових кодів
function end_quest_due_maximum_maintenance_erroneous_codes() {
    // Зупиняє таймер
    clearTimeout(clock_timer);

    // Виводить повідомлення про закінчення проходження квесту через максимальне ведення помилкових кодів
    document.getElementById("quest_content").innerHTML = `
    <div id="title_message_end_quest_due_maximum_maintenance_erroneous_codes">КВЕСТ ЗАВЕРШЕНО</div>
    <div id="text_message_about_successful_completion_quest">введено максимальну кількість помилкових кодів</div>
    <div id="text_copy_clipboard_message_about_successful_completion_quest">(результат скопійовано до буферу обміну)</div>
    `;

    const quest_str = `
Квест №1
Локація: Дендрологічний парк Ладижинський гай
Використано підказок: ${quest_obj.hints_used} із 5
Введено помилкових кодів: ${quest_obj.wrong_code_used} із 5
Знайдено місць зйомки фото: ${quest_obj.photo_found_used} із 10
Час проходження квесту: ${formatting_seconds_days_hours_min_seconds(quest_obj.timer_seconds)}
Квест розпочався: ${quest_obj.timer_start}
`;

    copy_clipboard(quest_str, 'результат проходження квесту');
}

