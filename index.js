let CURRENT_COLOR = 'black'
let DEFAULT_COLOR = 'white'
let FILL_MODE = false

let field = document.querySelector('.field')
for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id',`cell${i}`)
    field.appendChild(cell)
    

}
let IS_CLICKED = false 

document.addEventListener('mousedown',function(){
    IS_CLICKED = true
})

document.addEventListener('mouseup',function(){
    IS_CLICKED = false
})

let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    
    cell.addEventListener('mouseover', function(){
        if (IS_CLICKED){
        cell.style.backgroundColor = CURRENT_COLOR
        }
    })
    cell.addEventListener('mousedown',function(){
        if (FILL_MODE){
            cells.forEach(cell => {
                cell.style.backgroundColor = CURRENT_COLOR
                })
        } else 
        cell.style.backgroundColor = CURRENT_COLOR
    })
})


let palette = document.querySelectorAll('.palette')

let blue = document.querySelector('.blue')
blue.addEventListener('click',function(){
    CURRENT_COLOR = 'blue'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    blue.classList.add('selected')
})
let red = document.querySelector('.red')
red.addEventListener('click',function(){
    CURRENT_COLOR = 'red'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    red.classList.add('selected')
})
let black = document.querySelector('.black')
black.addEventListener('click',function(){
    CURRENT_COLOR = 'black'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    black.classList.add('selected')
})
let purple = document.querySelector('.purple')
purple.addEventListener('click',function(){
    CURRENT_COLOR = 'purple'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    purple.classList.add('selected')
})
let green = document.querySelector('.green')
green.addEventListener('click',function(){
    CURRENT_COLOR = 'green'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    green.classList.add('selected')
})



let nav_item1 = document.querySelector('.nav_item1')
nav_item1.addEventListener('click',function(){
    CURRENT_COLOR = 'white'
    let selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    nav_item1.classList.add('selected')    
})
let savebtn = document.querySelector('.nav-item3')
savebtn.addEventListener('click',function(){
    domtoimage.toJpeg(field, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
})

document.querySelector('.nav-item').addEventListener('click',function(){

    FILL_MODE = !FILL_MODE
})


let vot1 = document.querySelector('.vot')
let clover = document.querySelector('.fon')
let field_container = document.querySelector('.field-container')
vot1.addEventListener('click',function(){
    clover.style.display = 'none'
    field_container.style.display = 'flex'
})
