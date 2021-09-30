function initStepsHandler() {
    const button = document.querySelectorAll(".button__step");
    if (button.length < 1) {
        return;
    }
    const buttons = [...button];
    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const button = event.target;
            const block = document.querySelector(button.dataset["block"]);
            const isBlockValid = validate(block);

            if (isBlockValid) {
                block2.style.display = "block";
                block1.style.display = "none";
            }
        });
    });
}