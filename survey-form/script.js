window.onload = function () {
    initFieldInputs();
};

// TEXT INPUT
function initFieldInputs() {
    var fieldInputs = document.querySelectorAll('.field-input');

    fieldInputs.forEach(function (fieldInput) {
        var fieldClassList = fieldInput.parentElement.classList;

        fieldInput.addEventListener("focus", function () {
            fieldClassList.add("has-label");
            fieldClassList.add("is-focused");
        });

        fieldInput.addEventListener("focusout", function () {
            fieldClassList.remove("is-focused");
            if (fieldInput.value == '') {
                fieldClassList.remove('has-label');
            }
        });

        if (fieldInput.nodeName == "TEXTAREA") {
            fieldInput.addEventListener("keypress", function () {
                if (fieldInput.scrollTop != 0) {
                    fieldInput.style.height = fieldInput.scrollHeight + "px";
                }
            });
        }
    });
}