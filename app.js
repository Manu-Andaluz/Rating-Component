const body = document.body
// Creating the first page
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
    ratingElement.classList.add('rating_element')

    ratingElement.addEventListener('click', () => {
        ratingElement.classList.add('focus')
    })

    ratingElement.addEventListener('mouseover', () => {
        ratingElement.classList.add('active')
    })

    ratingElement.addEventListener('mouseleave', () => {
        ratingElement.classList.remove('active')
    })

    containerRating.append(ratingElement)
}

const button = document.createElement('button')
button.innerText = 'Submit'
button.classList.add('btn')

gridLayout.append(fristIcon, title, aboutText, containerRating, button)

// Creating second Page

button.addEventListener('click', () => {
    fristIcon.src = 'images/illustration-thank-you.svg'
    title.innerText = 'Thanks you!'
    aboutText.innerText = `We appreciate you taking the time to give a rating, if you ever need more support, don't hesitate to get in touch`
    containerRating.classList.add('remove')
    button.classList.add('remove')
})