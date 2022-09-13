const audio1 = new Audio('https://freesfx.co.uk/sound/15098_1460383406.mp3');
const audio2 = new Audio('https://freesfx.co.uk/sound/14398_1459968887.mp3')
const audio3 = new Audio('https://freesfx.co.uk/sound/14397_1459968886.mp3')
const audio4 = new Audio('https://freesfx.co.uk/sound/17743_1462211975.mp3')
const audio5 = new Audio('https://free-loops.com/data/mp3/30/84/2f917780f7c8644f0c5a60eaebb8.mp3')
const audio6 = new Audio('https://free-loops.com/data/mp3/68/85/fcdf0e0dd0d5a72be6ad45c93be5.mp3')

const button1 = document.querySelector('[data-btn="1"]')
const button2 = document.querySelector('[data-btn="2"]')
const button3 = document.querySelector('[data-btn="3"]')
const button4 = document.querySelector('[data-btn="4"]')
const button5 = document.querySelector('[data-btn="5"]')
const button6 = document.querySelector('[data-btn="6"]')

const stopAllAudio = () => {
  audio1.pause()
  audio2.pause()
  audio3.pause()
  audio4.pause()
  audio5.pause()
  audio6.pause()
}

button1.addEventListener('click', () => {
  stopAllAudio()
  audio1.play()
})
button2.addEventListener('click', () => {
  stopAllAudio()
  audio2.play()
})
button3.addEventListener('click', () => {
  stopAllAudio()
  audio3.play()
})
button4.addEventListener('click', () => {
  stopAllAudio()
  audio4.play()
})
button5.addEventListener('click', () => {
  stopAllAudio()
  audio5.play()
})
button6.addEventListener('click', () => {
  stopAllAudio()
  audio6.play()
})