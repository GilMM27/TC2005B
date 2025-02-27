const password = document.getElementById('password');
const email = document.getElementById('email');

const login = () => {
  if (email.value === 'admin@gmail.com' && password.value === 'admin') {
    sessionStorage.setItem('name', email.value);
    window.location.href = '/pages/home.html';
  } else {
    alert('Invalid email or password');
  }
};

const button = document.getElementById('login');
button.addEventListener('click', login);

const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  login();
});
