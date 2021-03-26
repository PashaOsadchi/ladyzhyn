function search() {
    id_dialog_search.close();

    if (id_input_search.value == '')  return open_dialog_error('Ведіть значення для пошуку!');
    
    determines_type_voice_command(id_input_search.value);
}