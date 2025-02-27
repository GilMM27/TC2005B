window.onload = () => {
  if (sessionStorage.name) {
    const title = document.getElementById('title');
    title.textContent = `Welcome ${sessionStorage.name}`;
  } else {
    window.location.href = '/login';
  }
};

const logout = () => {
  sessionStorage.removeItem('name');
  window.location.href = '/';
};

const button = document.getElementById('logout');
button.addEventListener('click', logout);

const save = () => {
  const name = document.getElementById('name');
  sessionStorage.setItem('name', name.value);
  window.location.reload();
};

const nameButton = document.getElementById('save');
nameButton.addEventListener('click', save);
