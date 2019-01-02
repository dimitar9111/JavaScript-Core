function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let company = $('#company');
    let companyNumber = $('#companyNumber');

    company.on('change', function () {
        let companyInfo = $('#companyInfo');
        if (companyInfo.css('display') === 'none') {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });


    let isFormValid = true;

    let submitBtn = $('#submit');

    submitBtn.on('click', function (event) {
        event.preventDefault();
        validateInput(username, /^[a-zA-Z0-9]{3,20}$/);
        validateInput(email, /^.*?@.*?\..*?$/);

        if (password.val() === confirmPassword.val()) {
            validateInput(password, /^\w{5,15}$/);
            validateInput(confirmPassword, /^\w{5,15}$/);
        }

        if (Number(companyNumber.val()) < 1000 || Number(companyNumber.val()) > 9999) {
            isFormValid = false;
            companyNumber.css('border-color', 'red');
        }

        if (isFormValid) {
            $('#valid').css('display', 'block');
        }

    });

    function validateInput(field, pattern) {
        if (!pattern.test(field.val())) {
            isFormValid = false;
            field.css('border-color', 'red');
        }
    };
}
