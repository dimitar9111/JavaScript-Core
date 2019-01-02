function increment(selector) {
    let rootElement = $(selector);
    let counter = 0;

    let textArea = $('<textarea>');
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', 'true');
    textArea.appendTo(rootElement);

    let incrementBtn = $('<button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    incrementBtn.text('Increment');

    $(incrementBtn).on('click', function () {
        textArea.val(Number(textArea.val()) + 1);
    });

    incrementBtn.appendTo(rootElement);

    let addBtn = $('<button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    addBtn.text('Add');

    $(addBtn).on('click', function () {
        $(`<li>${textArea.val()}</li>`).appendTo(list);
    });

    addBtn.appendTo(rootElement);


    let list = $('<ul>');
    list.addClass('results');

    list.appendTo(rootElement);
}
