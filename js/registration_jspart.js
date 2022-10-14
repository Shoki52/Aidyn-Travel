function formValidation() {
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uTelNum = document.registration.telnum;
    var uemail = document.registration.email;
    if (allLetter(uname)) {
        if (allnumeric(uTelNum)) {
            if (ValidateEmail(uemail)) {
                if (passid_validation(passid, 8)) {
                }
            }
        }
    }
    return false;

}

function passid_validation(passid, mx) {
    var passid_len = passid.value.length;
    if (passid_len == 0 || passid_len < mx) {
        alert("Password should not be empty / length must be more than " + mx);
        passid.focus();
        return false;
    }
    return true;
}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function allnumeric(uTelNum) {
    var numbers = /^[0-9]+$/;
    if (uTelNum.value.match(numbers)) {
        return true;
    }
    else {
        alert('Phone number must have numeric characters only');
        uTelNum.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
