function attachEvents() {
    $('a').on('click', selectItem);

    function selectItem() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(this).addClass('selected');
        }
    }
}


// function attachEvents() {
//     $('a').on('click', selectItem);

//     function selectItem() {
//         $('.selected').removeClass('selected');
//         $(this).addClass('selected');
//     }
// }