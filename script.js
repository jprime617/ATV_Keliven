document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'usuario_teste' && password === 'senha_teste') {
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('errorMessage').classList.remove('hidden');
    }
  });
  