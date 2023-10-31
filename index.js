const $password = document.querySelector('#password');
const $passwordConfirm = document.querySelector('#password-confirm');
const $messageError = document.querySelector('.password-error');

function validation() {
    if($password.value === $passwordConfirm.value) {
        $password.classList.remove('error');
        $passwordConfirm.classList.remove('error');
        $messageError.style.visibility = 'hidden'
    } else {
        $password.classList.add('error')
        $passwordConfirm.classList.add('error')
        if($messageError.style.visibility === 'hidden') {
            $messageError.style.visibility = 'visible'
        }
    }
}
$password.addEventListener('input', validation)
$passwordConfirm.addEventListener('input', validation)

$form = document.querySelector('form');
$form.addEventListener('submit', (event) => {
    if($password.className === 'error') {
        event.preventDefault();
        return false;
    }
})