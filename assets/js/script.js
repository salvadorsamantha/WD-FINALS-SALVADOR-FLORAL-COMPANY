// Create and append a petal to the body
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
  
    // Set a random position on the screen
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    petal.style.left = `${x}px`;
    petal.style.top = `${y}px`;
  
    // Append the petal to the body
    document.body.appendChild(petal);
  
    // Remove the petal after the animation ends
    setTimeout(() => {
      petal.remove();
    }, 3000); // Matches the animation duration
  }
  
  // Generate petals continuously at random intervals
  setInterval(createPetal, 400);
  