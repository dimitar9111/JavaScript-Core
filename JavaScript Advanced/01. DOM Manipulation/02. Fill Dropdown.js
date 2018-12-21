function addItem() {
    let textValue = document.getElementById('newItemText');
    let itemValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = textValue.value;
    option.value = itemValue.value;

    let menu = document.getElementById('menu');
    menu.appendChild(option);

    textValue.value = '';
    itemValue.value = '';
}
