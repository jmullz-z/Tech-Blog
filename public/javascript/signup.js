const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-signup');
    const emailEl = document.querySelector('#email-signup');
    const passwordEl = document.querySelector('#password-signup');
    
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log('success');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);