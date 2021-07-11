function clears_div(id) {
    const elementChildrens = document.querySelector(`#${id}`).children;

    for (let i = 0, child; child = elementChildrens[i]; i++) {
        switch (child.type) {
            case 'text': child.value = "";
            case 'textarea': child.value = "";
            case 'date': child.value = "";
            case 'time': child.value = "";
            case 'number': child.value = "";
            case 'checkbox': child.checked = false;
        }
    }
}