
let form = document.getElementById("entry-form");
let confirmation = document.getElementById("confirm-entry");
function submitEntry() {
    confirmation.classList.add("visible");
    let name = form.name.value;
    confirmation.textContent = `Your entry was submitted, ${name}`;
}

// no need for reimplementing the placeholder attribute
