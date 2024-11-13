/*
 * container-body-menu-login
 */


$(document).on('click', cfrmLogIn_Email, function () {
    disableErrMsg($(this));
});

$(document).on('click', cfrmLogIn_Password, function () {
    disableErrMsg($(this));
});
