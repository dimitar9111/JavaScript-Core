function domSearch(selector, caseSensitive) {
    let container = $(selector);
    container.addClass('items-control');

    // add container
    let addControlsDiv = $('<div>');
    addControlsDiv.addClass('add-controls');

    let enterTextLabel = $('<label>');
    enterTextLabel.text('Enter text: ');
    enterTextLabel.appendTo(addControlsDiv);

    let inputField = $('<input>');
    inputField.appendTo(addControlsDiv);

    let addBtn = $('<a href="#">');
    addBtn.addClass('button');
    addBtn.css('display', 'inline-block');
    addBtn.text('Add');
    addBtn.on('click', addElement);
    addBtn.appendTo(addControlsDiv);

    addControlsDiv.appendTo(container);

    // search container
    let searchControlsDiv = $('<div>');
    searchControlsDiv.addClass('search-controls');

    let searchLabel = $('<label>');
    searchLabel.text('Search:');
    searchLabel.appendTo(searchControlsDiv);

    let searchField = $('<input>');
    searchField.on('change keyup paste cut', searchElements);
    searchField.appendTo(searchControlsDiv);

    searchControlsDiv.appendTo(container);

    // result container
    let resultControlsDiv = $('<div>');
    resultControlsDiv.addClass('result-controls');

    let resultList = $('<ul>');
    resultList.addClass('items-list');

    resultList.appendTo(resultControlsDiv);

    resultControlsDiv.appendTo(container);


    function addElement() {
        let newElement = $('<li>');
        newElement.addClass('list-item');

        deleteButton = $('<a href="#">');
        deleteButton.addClass('button');
        deleteButton.text('X');
        deleteButton.on('click', deleteElement);

        deleteButton.appendTo(newElement);

        elementText = $('<strong>');
        elementText.text($('input').val());
        $('input').val('');
        elementText.appendTo(newElement);

        newElement.appendTo(resultList);

    }

    function deleteElement() {
        $(this).parent().remove();
    }

    function searchElements() {
        let searchTerm = caseSensitive ? $(this).val() : $(this).val().toLowerCase();

        if (searchTerm !== '') {
            let listElements = resultList.children();

            for (let element of listElements) {
                let elementText = caseSensitive ? $(element).text() : $(element).text().toLowerCase();
                if (!elementText.includes(searchTerm)) {
                    $(element).css('display', 'none');
                }
            }
        }
    }
}
