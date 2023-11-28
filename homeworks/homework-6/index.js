var forms = document.querySelectorAll("form");
var emailField = document.querySelector("#email");
var titleField = document.querySelector("#title");
var textAreaField = document.querySelector("#text");
var chcekBoxField = document.querySelector("#checkbox");
;
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
function validateFormData(data) {
    if (data.email && data.title && data.text && data.checkbox) {
        return true;
    }
    else {
        return false;
    }
}
;
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "user@gmail.com", "admin@gmail.com"];
    if (emails.some(function (e) { return e === email; })) {
        console.log("This email is already exists");
    }
    else {
        console.log("Posting data...");
    }
}
forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
        var _a, _b, _c, _d;
        e.preventDefault();
        formData.email = (_a = emailField === null || emailField === void 0 ? void 0 : emailField.value) !== null && _a !== void 0 ? _a : "";
        formData.title = (_b = titleField === null || titleField === void 0 ? void 0 : titleField.value) !== null && _b !== void 0 ? _b : "";
        formData.text = (_c = textAreaField === null || textAreaField === void 0 ? void 0 : textAreaField.value) !== null && _c !== void 0 ? _c : "";
        formData.checkbox = (_d = chcekBoxField === null || chcekBoxField === void 0 ? void 0 : chcekBoxField.checked) !== null && _d !== void 0 ? _d : false;
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
        else {
            console.log("Please, complete all fields!");
        }
    });
});
