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
  const id = document.querySelector('#createProjectBttn').dataset.id;
  const employeeIds = [id];
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
      document.location.replace(`/projects/`);
    } else {
      alert('Failed to create project');
    }
  }
};

const deleteProject = async (id) => {
  if (id) {
    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace(`/projects/`);
    } else {
      alert('Failed to delete task');
    }
  }
};

document
  .querySelector('#createProjectBttn')
  .addEventListener('click', newProject);

