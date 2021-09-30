function validate(block) {
    let isValid = true;

    const input = block.querySelectorAll("[data-required='Y']");
    const inputs = [...input];
    inputs.forEach(function (input) {
        input.classList.remove("error");
        if (input.value.trim().length === 0) {
            input.classList.add("error");
            isValid = false;
        }
    });
    return isValid;
}
