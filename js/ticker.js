const sponsors_arr = [
    {
        id: 1,
        name: 'депутату Ладижинської МР адвокату Бодачевському Р.',
        phone_text: '097-610-01-20',
        phone: '+380976100120'
    },
    {
        id: 2,
        name: 'Бодачевському К. (ремонт, продаж, обслуговування комп. та офісної техніки)',
        phone_text: '098-544-09-81',
        phone: '+3800985440981'
    },
]

let counter_sponsors = 1;

setInterval(() => {
    if (sponsors_arr.length == counter_sponsors) counter_sponsors = 0;
    document.getElementById('id_page_footer').innerHTML = generate_message_sponsors(counter_sponsors);
    counter_sponsors += 1;
}, 10000);

document.addEventListener("DOMContentLoaded",() => {document.getElementById('id_page_footer').innerHTML = generate_message_sponsors(0);}, true);

function generate_message_sponsors(i) {
    return `Дякуємо за підтримку ${sponsors_arr[i].name} <a href="tel:${sponsors_arr[i].phone}">${sponsors_arr[i].phone_text}</a>`;
}
