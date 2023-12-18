const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Eu te amo!",
    "Amo seu senso de humor",
    "Amo o jeitinho que seus olhos ficam quando sorri",
    "Amo conversar com você",
    "Seu carinho me acolhe",
    "Agradeço diariamente ao universo por ter te colocado na minha vida",
    "Você é o meu maior sonho",
    "Te amarei pela etermidade",
    "Você é o maior motivo para continuar acreditando no amor",
    "Minha constelação",
    "Você me completa",
    "I Wanna Be Your",
    "Hey, obrigada por ser minha metade",
    "Sua profundidade é cativante",
    "You are my soulmate",
    "Penso em você 24/7",
    "“Eu realmente acredito que, embora o amor possa ferir ele também seja capaz de curar” —  Nicholas Sparks ",
    
  ]
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})
