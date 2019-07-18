// Get modal element
var modal = document.getElementById('simpleModal');
// Get modal buttton
var modalBtn = document.getElementById('modalBtn')
// Get the close button
var closeBtn = document.querySelector('.closeBtn')

modalBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
document.addEventListener('click', function (e) {
    if (e.target.className === 'modal') {
        modal.style.display = 'none'
    }
})
function openModal() {
    modal.style.display = 'block';
}
function closeModal() {
        modal.style.display = 'none'
}