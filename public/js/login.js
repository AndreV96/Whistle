const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  console.log('hey!');
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/employees/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    // const employeeData = await fetch (`/api/projects/${id}`)
    // const employeeData = await fetch()

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/projects');
      console.log(response);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
