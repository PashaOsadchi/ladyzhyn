// Змінює колір кнопки
function change_color_show_hide_button(id) {
    if (id.style.backgroundColor == 'rgba(255, 0, 0, 0.9)') return id.style.backgroundColor = 'rgba(102, 255, 0, 0.6)';
    id.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
}