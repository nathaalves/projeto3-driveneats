let enabledOrder = false

function selectOption(option) {

  const selected = document.querySelector(`.${option.parentElement.className} .selectedOption`)
  const checked = document.querySelector(`.${option.parentElement.className} .checkedOption`)
  if (selected !== null) {
    selected.classList.remove("selectedOption")
    checked.classList.remove("checkedOption")
  }
  
  option.classList.add("selectedOption");
  option.querySelector("ion-icon").classList.add("checkedOption")

  enabledOrder = document.querySelectorAll(".selectedOption").length === 3
  if (enabledOrder) {
    const activeButton = document.querySelector(".button")
    activeButton.classList.add("activeButton")
    activeButton.innerHTML = "Fechar Pedido"
  }

}

let dishe = ""
let dishePrice = 0
let drink = ""
let drinkPrice = 0
let dessert = ""
let dessertPrice = 0
let totalPrice = ""

function reviewOrder() {

  if (enabledOrder) {

    const review = document.querySelector(".confirm-order")
    review.classList.add("active-confirm-order")

    const selected = document.querySelectorAll(".selectedOption")

    dishe = selected[0].querySelector("h3").innerHTML
    dishePrice = Number(selected[0].querySelector("span").innerHTML.replace(",", "."))
    drink = selected[1].querySelector("h3").innerHTML
    drinkPrice = Number(selected[1].querySelector("span").innerHTML.replace(",", "."))
    dessert = selected[2].querySelector("h3").innerHTML
    dessertPrice = Number(selected[2].querySelector("span").innerHTML.replace(",", "."))
    totalPrice = (dishePrice + drinkPrice + dessertPrice).toFixed(2).replace(".", ",")

    const orderInformations = document.querySelectorAll(".container-confirm-order span")
    orderInformations[0].innerHTML = dishe
    orderInformations[1].innerHTML = dishePrice.toFixed(2).replace(".", ",")
    orderInformations[2].innerHTML = drink
    orderInformations[3].innerHTML = drinkPrice.toFixed(2).replace(".", ",")
    orderInformations[4].innerHTML = dessert
    orderInformations[5].innerHTML = dessertPrice.toFixed(2).replace(".", ",")
    orderInformations[7].innerHTML = totalPrice

  }

}

function finalizeOrder() {
  
    const name = prompt("Informe o seu nome:")
    const address = prompt("Informe o seu endereço:")
    
    const link = document.querySelector(".container-confirm-order a")
    link.href = `https://wa.me/5582996226146?text=${encodeURIComponent("Olá, gostaria de fazer o pedido:")}%0A${encodeURIComponent(`- Prato: ${dishe}`)}%0A${encodeURIComponent(`- Bebida: ${drink}`)}%0A${encodeURIComponent(`- Sobremesa: ${dessert}`)}%0A${encodeURIComponent(`Total: R$ ${totalPrice}`)}%0A%0A${encodeURIComponent(`Nome: ${name}`)}%0A${encodeURIComponent(`Endereço: ${address}`)}`       
  
  
}

function cancelOrder() {
  
  const review = document.querySelector(".confirm-order")
  review.classList.remove("active-confirm-order")

}