const singupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first-name-form').value.trim();
  const last_name = document.querySelector('#last-name-form').value.trim();
  const role = document.querySelector('#role-form').value.trim();
  const email = document.querySelector('#email-form').value.trim();
  const password = document.querySelector('#password-form').value.trim();

  if (first_name && last_name && role && email && password) {
    const response = await fetch('/api/employees/', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, email, role, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);

    if (response.ok) {
      console.log('signed up');
      document.location.replace('/projects');
    } else {
      alert('Failed to create user');
    }
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', singupFormHandler);
