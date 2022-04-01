function selectOption(option) {

  const selected = document.querySelector(`.${option.parentElement.className} .selectedOption`);
  const checked = document.querySelector(`.${option.parentElement.className} .checkedOption`)
  if (selected !== null) {
    selected.classList.remove("selectedOption");
    checked.classList.remove("checkedOption");
  }
  
  option.classList.add("selectedOption");
  option.querySelector("ion-icon").classList.add("checkedOption")

  const enabledOrder = document.querySelectorAll(".selectedOption").length === 3
  if (enabledOrder) {
    const activeButton = document.querySelector(".button")
    activeButton.classList.add("activeButton")
    activeButton.innerHTML = "Fechar Pedido"
  }

}

function finalizeOrder() {

  const enabledOrder = document.querySelectorAll(".selectedOption").length === 3
  if (enabledOrder) {

    const selected = document.querySelectorAll(".selectedOption")

    const dishe = selected[0].querySelector("h3").innerHTML
    const dishePrice = Number(selected[0].querySelector("span").innerHTML.replace(",", "."))
    const drink = selected[1].querySelector("h3").innerHTML
    const drinkPrice = Number(selected[1].querySelector("span").innerHTML.replace(",", "."))
    const dessert = selected[2].querySelector("h3").innerHTML
    const dessertPrice = Number(selected[2].querySelector("span").innerHTML.replace(",", "."))

    const totalPrice = (dishePrice + drinkPrice + dessertPrice).toFixed(2)

    const name = prompt("Informe o seu nome:")
    const address = prompt("Informe o seu endereço:")
    
    const link = document.querySelector("a")
    link.href = `https://wa.me/5582996226146?text=${encodeURIComponent("Olá, gostaria de fazer o pedido:")}%0A${encodeURIComponent(`- Prato: ${dishe}`)}%0A${encodeURIComponent(`- Bebida: ${drink}`)}%0A${encodeURIComponent(`- Sobremesa: ${dessert}`)}%0A${encodeURIComponent(`Total: R$ ${totalPrice}`)}%0A%0A${encodeURIComponent(`Nome: ${name}`)}%0A${encodeURIComponent(`Endereço: ${address}`)}`          
  }

}

