function initializeTable() {
    $('#createLink').on('click', createCountry);

    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");

    fixActions();

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        addCountryToTable(country, capital);

        $('#newCountryText').val('');
        $('#newCapitalText').val('');

        fixActions();
    }

    function addCountryToTable(country, capital) {
        let countriesTable = $('#countriesTable');

        let newRow = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>')
                    .on('click', moveUp))
                .append($('<a href="#">[Down]</a>')
                    .on('click', moveDown))
                .append($('<a href="#">[Delete]</a>')
                    .on('click', deleteRow))
            );

        newRow.css('display', 'none');
        countriesTable.append(newRow);

        newRow.fadeIn();
    }

    function moveUp() {
        var row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixActions();
        });
    }

    function moveDown() {
        var row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn();
            fixActions();
        });
    }

    function deleteRow() {
        var row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            fixActions();
        });
    }

    function fixActions() {
        $('#countriesTable a')
            .css('display', 'inline');

        let rows = $('#countriesTable tr');

        $(rows[2]).find('a:contains("Up")').css('display','none');

        $(rows[rows.length - 1]).find('a:contains("Down")').css('display','none');
    }
}
