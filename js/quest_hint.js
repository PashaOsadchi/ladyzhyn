function quest_hint(id) {
    // Зчитує дані із локального сховища
    read_quest_obj()

    if (quest_obj.hints_residue == 5) {
        quest_obj.hints_residue--;
        quest_obj.hints_used++;

        // Видаляє поточну кнопку замість якої вставляє підказку
        const arr = data_quests_arboretum_1.filter((e) => e.id == id);

        document.getElementById(`hint_foto_${id}`).innerHTML = `<img width="300" src="quests_photos/arboretum_1/quest_area_in_arboretum_${arr[0].hint}.webp" alt="Місце зйомки фото">`;

        // Добавляє у масив номер використаної підказки
        quest_obj.used_arr = quest_obj.used_arr.concat(id);

        // Зберігає дані у локальному сховищі
        save_quest_obj();
    } else if (quest_obj.hints_residue < 5 && quest_obj.hints_residue > 0) {
        quest_obj.hints_residue--;
        quest_obj.hints_used++;

        // Видаляє поточну кнопку замість якої вставляє підказку
        const arr = data_quests_arboretum_1.filter((e) => e.id == id);

        document.getElementById(`hint_foto_${id}`).innerHTML = `<img width="300" src="quests_photos/arboretum_1/quest_area_in_arboretum_${arr[0].hint}.webp" alt="Місце зйомки фото">`;

        // Добавляє у масив номер використаної підказки
        quest_obj.used_arr = quest_obj.used_arr.concat(id);

        // Зберігає дані у локальному сховищі
        save_quest_obj();
    }

    // Якщо підказок 0 то замінює кнопку на повідомлення про відсутність підказок
    if (quest_obj.hints_residue == 0) {
        data_quests_arboretum_1.forEach((e) => {
            if (!quest_obj.used_arr.includes(e.id)) document.getElementById(`hint_foto_${e.id}`).innerHTML = `Використано всі підказки`
        });
    }

    document.getElementById("quest_hint").innerHTML = `Використано підказок: ${quest_obj.hints_used} із 5`;
}
