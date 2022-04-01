//function selectedCategori() {
//    selected = document.querySelector(".dishes").querySelector(".option")
//    console.log(selected)
//}





function selectOption(option) {
    selected = document.querySelector(`.${option.parentElement.className} .selectedOption`);
    if (selected !== null) {
      selected.classList.remove("selectedOption");
    }
    option.classList.add("selectedOption");
}