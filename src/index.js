console.clear()

const box = document.querySelector('.box')
const button = document.querySelector('.button')
button.addEventListener('click', () => {
  box.classList.add('blue')
})

const remove = document.querySelector('.remove')
remove.addEventListener('click', () => {
  box.classList.remove('blue')
})

const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', () => {
  box.classList.toggle('blue')
})
