// Rating numbers hover events
let ratingElement = document.getElementsByClassName('ratingElement')
console.dir(ratingElement)
function changeBackgrund() {
    for (let i = 0; i <= ratingElement.length - 1; i++) {
        ratingElement[i].addEventListener('mouseover', (e) => {
            ratingElement[i].classList.add('active')
        })

        ratingElement[i].addEventListener('mouseleave', (e) => {
            ratingElement[i].classList.remove('active')
        })
    }
}

changeBackgrund()

// Button submit event

const button = document.getElementById('Btn')
button.addEventListener('click', () => {

})