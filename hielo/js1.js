const menu = document.getElementById('menu')
const menuToggle = document.getElementById('menu-toggle')
const closeIcon = document.getElementById('close-menu')

menuToggle.onclick = activateToggle;

closeIcon.onclick = diactivateToggle;

function activateToggle() {
    let currentId = this.getAttribute('data-menu')
    let currentIdIcon = this.getAttribute('data-icon')
    let visibleIcon = document.getElementById(`${currentIdIcon}`)
    let visibleBlock = document.getElementById(`${currentId}`)
    visibleIcon.className ='show'
    visibleBlock.className ='menutoggle'
}

function diactivateToggle() {
    let currentId = this.getAttribute('data-menu')
    let currentIdIcon = this.getAttribute('data-icon')
    let visibleIcon = document.getElementById(`${currentIdIcon}`)
    let visibleBlock = document.getElementById(`${currentId}`)
    visibleIcon.className ='hidden'
    visibleBlock.className ='menu'
}

const collapse1 = document.getElementById('collapse-1')
const collapse2 = document.getElementById('collapse-2')
const learnmore1 = document.getElementById('collapse-link-1')
const learnmore2 = document.getElementById('collapse-link-2')

learnmore1.onclick = showmore1;
learnmore2.onclick = showmore2;


function showmore1() {
    let currentId = this.getAttribute('data-toggle')
    let visibleBlock = document.getElementById(`${currentId}`)
    collapse2.className = 'collapse'

    visibleBlock.className = 'uncollapse animated fadeInDown'
}
function showmore2() {
    let currentId = this.getAttribute('data-toggle')
    let visibleBlock = document.getElementById(`${currentId}`)
    collapse1.className = 'collapse'

    visibleBlock.className = 'uncollapse animated fadeInDown'
}

const img1 = document.getElementById('img-1')
const img2 = document.getElementById('img-2')
const img3 = document.getElementById('img-3')
const img4 = document.getElementById('img-4')
const popUp = document.getElementById('popup')
const diactivator = document.getElementById('background')
//console.log(img1.firstElementChild.src)

img1.onclick = showImg
img2.onclick = showImg
img3.onclick = showImg
img4.onclick = showImg

diactivator.onclick = offback

function showImg() {
    let pic = this.firstElementChild.src
    document.getElementById('popup').firstElementChild.src = `${pic}`
    document.body.style.overflow = 'hidden'
   
    diactivator.className = 'background1'
    popUp.className = 'popup1 animated fadeIn'
    
    //popUp.classList.toggle('popup1')
    //diactivator.classList.toggle('background1')

}

function offback() {
    diactivator.className = 'hidden'
    popUp.className = 'hidden'

    document.body.style.overflow = 'visible'

    
    ///popUp.classList.remove('popup1')
    //diactivator.classList.remove('background1')
}