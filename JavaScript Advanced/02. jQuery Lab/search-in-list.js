function search() {
    let searchText = $('#searchText').val();

    $(`ul#towns li`).css('font-weight', '');

    let result = $(`ul#towns li:contains(${searchText})`)
        .css('font-weight', 'bold');

    $('#result').text(`${result.length} matches found.`);
}