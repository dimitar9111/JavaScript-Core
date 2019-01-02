function createBook(selector, title, author, isbn) {
    let id = 1;

    let bookContainer = $('<div>');
    bookContainer.attr('id', `book${id++}`);

    let bookTitle = $('<p>');
    bookTitle.addClass('title');
    bookTitle.text(title);
    bookTitle.appendTo(bookContainer);

    let bookAuthor = $('<p>');
    bookAuthor.addClass('author');
    bookAuthor.text(author);
    bookAuthor.appendTo(bookContainer);

    let bookIsbn = $('<p>');
    bookIsbn.addClass('isbn');
    bookIsbn.text(isbn);
    bookIsbn.appendTo(bookContainer);

    let selectBtn = $('<button>');
    selectBtn.text('Select');
    selectBtn.on('click', function () {
        bookContainer.css('border', '2px solid blue');
    });
    selectBtn.appendTo(bookContainer);

    let deselectBtn = $('<button>');
    deselectBtn.text('Deselect');
    deselectBtn.on('click', function () {
        bookContainer.css('border', 'none');
    });
    deselectBtn.appendTo(bookContainer);

    bookContainer.appendTo(selector);
}
