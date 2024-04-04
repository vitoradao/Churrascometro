  // CHURRASCÔMETRO
  const calcular = document.getElementById("calcular")
  calcular.addEventListener("click", function calcularCarne() {

  const qtdAdulto = document.getElementById("qtdadulto").value
  const qtdCrianca = document.getElementById("qtdcrianca").value  // OBTENDO VALORES DOS INPUTS
  const qtdDuracao = document.getElementById("qtdduracao").value

  let carneAdulto = 400    // POR HORA CADA ADULTO CONSUMIRÁ 400G DE CARNE 
  let bebidaAdulto = 1200  // POR HORA CADA ADULTO CONSUMIRÁ 1L 200ML DE CERVEJA
  let carneCrianca = 200   // POR HORA CADA CRIANÇA CONSUMIRÁ 200G DE CARNE 
  let bebidaCrianca = 500  // POR HORA CADA CRIANÇA CONSUMIRÁ 500ML DE REFRIGERANTE
  let carneFormatada;
  let bebidaFormatada;  
  let refriFormatado;
  let refriLata;
    
    if (qtdDuracao > 6) {
      carneAdulto = 650    
      bebidaAdulto = 2000  // CASO O CHURRASCO ULTRAPASSAR DE 6 HORAS
      carneCrianca = 450     // AUMENTARÁ OS RECURSOS 
      bebidaCrianca = 1000 
   }
  
    let totalCarne = ((qtdAdulto * carneAdulto) + (qtdCrianca * carneCrianca))  // TOTAL CARNE
    let totalCerveja = (qtdAdulto * bebidaAdulto) // TOTAL CERVEJA
    let totalRefri = (qtdCrianca * bebidaCrianca) // TOTAL REFRIGERANTE



    if (totalCarne >= 1000 || totalCerveja >= 350) { 
      carneFormatada = (totalCarne / 1000)
      bebidaFormatada = (totalCerveja / 350) // FORMATADO
      document.getElementById("p1").textContent = `Carne necessária: ${carneFormatada.toFixed(1)} KG`
      document.getElementById("p2").textContent = `Latas de Cerveja: ${parseInt(bebidaFormatada)} `
      document.getElementById("p4").textContent = `OBS: Necessário para fazer um churrasco!`
      document.getElementById("p4").style.color = "red"

    } if (totalRefri >= 2000) {
      refriFormatado = (totalRefri / 2000)
      document.getElementById("p1").textContent = `Carne necessária: ${carneFormatada.toFixed(1)} KG`
      document.getElementById("p2").textContent = `Latas de Cerveja: ${parseInt(bebidaFormatada)} `
      document.getElementById("p3").textContent = `Garrafa 2L de refrigerante: ${parseInt(refriFormatado)} `
      document.getElementById("p4").textContent = `OBS: Necessário para fazer um churrasco!`
      document.getElementById("p4").style.color = "red"
     
    } else {
      refriLata = (totalRefri / 350)
      document.getElementById("p1").textContent = `Carne necessária: ${carneFormatada.toFixed(1)} KG`
      document.getElementById("p2").textContent = `Latas de Cerveja: ${parseInt(bebidaFormatada)} `
      document.getElementById("p3").textContent = `Latas de refri: ${parseInt(refriLata)} `
      document.getElementById("p4").textContent = `OBS: Necessário para fazer um churrasco!`
      document.getElementById("p4").style.color = "red"                         
    }

 })


