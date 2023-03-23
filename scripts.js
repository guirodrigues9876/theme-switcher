const body = document.querySelector('body')

const checkbox = document.querySelector('input')


checkbox.addEventListener('click', function(){
    body.classList.toggle("dark")
})