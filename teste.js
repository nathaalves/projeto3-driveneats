let selected = window.document.querySelectorAll('#dishes .option');

for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener("click", function selectDish() {
        
        teste = document.querySelector(" #dishes .selectedOption")
        if (teste !== null) {
            teste.classList.remove("selectedOption");
        }

        selected[i].classList.add("selectedOption");
        
    })
}



