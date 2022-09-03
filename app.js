const body = document.body

const container = document.createElement('div')
container.classList.add('container')
body.append(container)

const gridLayout = document.createElement('div')
gridLayout.classList.add('grid_layout')
container.append(gridLayout)

const fristIcon = document.createElement('img')
fristIcon.src = 'images/icon-star.svg'
fristIcon.classList.add('icon_star')

const title = document.createElement('h2')
title.innerText = 'How did we do?'

const aboutText = document.createElement('p')
aboutText.innerText = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve ouroffering!'

const containerRating = document.createElement('div')
containerRating.classList.add('container_rating')

for (let i = 1; i <= 5; i++) {
    const ratingElement = document.createElement('a')
    ratingElement.innerText = i
    containerRating.append(ratingElement)
}

gridLayout.append(fristIcon, title, aboutText, containerRating)

// Rating numbers hover events
// let ratingElement = document.getElementsByClassName('ratingElement')
// console.dir(ratingElement)
// function changeBackgrund() {
//     for (let i = 0; i <= ratingElement.length - 1; i++) {
//         ratingElement[i].addEventListener('mouseover', (e) => {
//             ratingElement[i].classList.add('active')
//         })

//         ratingElement[i].addEventListener('mouseleave', (e) => {
//             ratingElement[i].classList.remove('active')
//         })
//     }
// }

// changeBackgrund()

// // Button submit event

// const button = document.getElementById('Btn')
// button.addEventListener('click', () => {

// })