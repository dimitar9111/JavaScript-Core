function attachEvents() {
    let items = $('ul#items li').on('click', selectItem);

    $('#showTownsButton').on('click', showTowns);

    function selectItem() {
        if ($(this).attr('data-selected')) {
            $(this).removeAttr('data-selected')
            $(this).css('background', '');
        } else {
            $(this).attr('data-selected', 'true')
            $(this).css('background', '#DDD');
        }
    }

    function showTowns() {
        let items = $('ul#items li[data-selected=true]')
            .toArray()
            .map(li => li.textContent)
            .join(', ');

        $('#selectedTowns').text('Selected towns: ' + items);

    }
}
