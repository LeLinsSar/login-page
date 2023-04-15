const sigInButton  = document.getElementById('signIn')
const sigUpButton = document.getElementById('signUp')
const container = document.getElementById('container')

sigUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active')

})

sigInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
})