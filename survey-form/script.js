window.onload = function() {
    var fieldInputs = document.querySelectorAll('.field-input');

    fieldInputs.forEach(fieldInput => {
        var fieldClassList = fieldInput.parentElement.classList;

        fieldInput.addEventListener("focus", function() {
            fieldClassList.add("has-label");
            fieldClassList.add("is-focused");
        });
    
        fieldInput.addEventListener("focusout", function() {
            fieldClassList.remove("is-focused");
            if (fieldInput.value == '') {
                fieldClassList.remove('has-label');
            }
        });
        
        if(fieldInput.nodeName == "TEXTAREA") {
            fieldInput.addEventListener("keypress", function() {
                if(fieldInput.scrollTop != 0){
                    fieldInput.style.height = fieldInput.scrollHeight + "px";
                }
            });
        }
    });
};