let username = document.querySelector('.user')
let password = document.querySelector('.password')
let btn = document.querySelector('.btn')
btn.onclick = () => {
  if (username.value === 'noname' && password.value === 'nopassword') {
    window.location.href = 'about.html'
  } else {
    alert('Password or Username wrong')
  }
}