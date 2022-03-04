const viewProject = (id) => {
  if (id) {
    document.location.replace(`/projects/${id}`);
  } else {
    window.alert('No project found with the id');
  }
};
const newProject = async (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const description = document.querySelector('#description').value.trim();
  const employeeIds = [];
  if (title && description) {
    const body = JSON.stringify({ title, description, employeeIds });
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log(`${title}: ${description}`);
    } else {
      alert('Failed to create project');
    }
  }
};

document
  .querySelector('#createProjectBttn')
  .addEventListener('click', newProject);
