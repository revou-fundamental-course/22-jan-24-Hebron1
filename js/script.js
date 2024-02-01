const inputName = document.getElementsByName('input-name');
const inputEmail = document.getElementsByName('input-email');

const button = document.getElementById('send');

button.addEventListener('click', function() {

    let nama = inputName.value;
    let email = inputEmail.value;

    if (!nama) {

        const nameError = document.getElementById('name-error')
        nameError.innerText = 'Nama wajib diisi!';
        
        setTimeout(function() {
            document.getElementsByTagName('p')[6].remove()
        }, 2000)
    } 

    if (!email) {
        
        const emailError = document.getElementById('email-error');
        emailError.innerText = 'email wajib diisi!';

        setTimeout(function() {
            document.getElementsByTagName('p')[7].remove()
        }, 2000)
    } 
})



