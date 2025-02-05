const COLORS = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#800000",
    "#008000",
    "#000080",
    "#808000",
    "#800080",
    "#008080",
    "#FFA500",
    "#FFC0CB",
    "#800000",
    "#008000",
    "#000080",
    "#808000",
  ]
  
  let targetColor
  let score = 0
  
  const colorBox = document.getElementById("colorBox")
  const colorOptions = document.getElementById("colorOptions")
  const gameStatus = document.getElementById("gameStatus")
  const scoreElement = document.getElementById("score")
  const newGameButton = document.getElementById("newGameButton")
  
  function generateRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
  }
  
  function generateColorOptions(correctColor) {
    const options = [correctColor]
    while (options.length < 6) {
      const newColor = generateRandomColor()
      if (!options.includes(newColor)) {
        options.push(newColor)
      }
    }
    return options.sort(() => Math.random() - 0.5)
  }
  
  function handleColorGuess(color) {
    if (color === targetColor) {
      gameStatus.textContent = "Correct!"
      score++
      scoreElement.textContent = `Score: ${score}`
      setTimeout(startNewGame, 1000)
    } else {
      gameStatus.textContent = "Wrong, try again!"
    }
  }
  
  function startNewGame() {
    targetColor = generateRandomColor()
    colorBox.style.backgroundColor = targetColor
  
    const options = generateColorOptions(targetColor)
    colorOptions.innerHTML = ""
    options.forEach((color) => {
      const button = document.createElement("button")
      button.className = "color-button"
      button.style.backgroundColor = color
      button.setAttribute("data-testid", "colorOption")
      button.onclick = () => handleColorGuess(color)
      colorOptions.appendChild(button)
    })
  
    gameStatus.textContent = ""
  }
  
  newGameButton.addEventListener("click", startNewGame)
  
  // Start the game
  startNewGame()
  
  