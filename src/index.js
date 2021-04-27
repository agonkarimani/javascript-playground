console.clear()

const box = document.querySelector('.box')
const toggleRotation = document.querySelector('.rotation')
toggleRotation.addEventListener('click', () => {
  box.classList.toggle('toggle-rotation')
})

const toggleBackground = document.querySelector('.background')
toggleBackground.addEventListener('click', () => {
  box.classList.toggle('toggle-background')
})

const toggleRadius = document.querySelector('.radius')
toggleRadius.addEventListener('click', () => {
  box.classList.toggle('toggle-radius')
})
