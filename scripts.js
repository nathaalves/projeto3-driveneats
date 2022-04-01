function selectOption(option) {

    selected = document.querySelector(`.${option.parentElement.className} .selectedOption`);
    checked = document.querySelector(`.${option.parentElement.className} .checkedOption`)
    if (selected !== null) {
      selected.classList.remove("selectedOption");
      checked.classList.remove("checkedOption");
    }
    
    option.classList.add("selectedOption");
    option.querySelector("ion-icon").classList.add("checkedOption")
}

