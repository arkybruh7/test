const image = document.getElementById('image')
const left = document.getElementById('left')
const right = document.getElementById('right')
const text = document.getElementById('text')
const body = document.body
const header = document.getElementById('header')
const products = 2

left.addEventListener('click',change)
right.addEventListener('click',changeRight)

function changeRight(event){

header.classList.replace('appleHeader','grapesHeader')


image.style.filter=  'drop-shadow(7px 7px 11px #cacbeb)' 
image.style.animation = 'none'
void image.offsetWidth;
image.src = 'assets/FigJam basics.png'
image.style.animation= 'vanishin 0.4s 1'

text.textContent = 'Grapes'
text.style.animation = 'none'
void text.offsetWidth
text.style.animation= 'vanishinOP 0.4s 1' 
text.classList.replace("appleMaintxt",'grapesMaintxt')
body.style.background = 'radial-gradient( circle 1151px, #F1E2F7, #8385C8 )'
}

function change(event){

header.classList.add('appleHeader')


image.classList.remove('grapesFilter')
image.classList.replace('grapes','apple')
image.style.filter = 'drop-shadow(7px 7px 11px #df9999ff)' 
image.style.animation = 'none'
void image.offsetWidth;
image.src = 'assets/Frame 1.png'
image.style.animation= 'vanishin 0.4s 1'

text.textContent = 'Apples'
text.classList.replace('grapesMaintxt','appleMaintxt')
text.style.animation = 'none'
void text.offsetWidth
text.style.animation= 'vanishinOP 0.3s 1' 
body.style.background = "radial-gradient( circle 1151px, #CCC1C1, #d95f5fff )"
}
