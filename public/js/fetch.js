//COMO agregar employees al project?
const newProject = async (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const description = document.querySelector('#description').value.trim();

  if (title && description) {
    //add employee id
    const body = JSON.stringify({ title, description, });
    console.log(body);
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
//COMO CONSIGUES EL ID PARA DELETE, PATCH, ETC?
const deleteProject = async (e) => {
  e.preventDefault();
  const id = document.querySelector('#projectId').value.trim();
  const response = await fetch(`/api/projects/${id}`, {
    method: 'DELETE',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const newTask = async (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const description = document.querySelector('#description').value.trim();
  const state = document.querySelector('#state').value.trim();
  const due_date = document.querySelector('#dueDate').value.trim();
  const employee_id = document.querySelector('#employeeId').value.trim();
  const project_id = document.querySelector('#projectId').value.trim();

  if (title && description && state && due_date && employee_id && project_id) {
    const body = JSON.stringify({
      title,
      description,
      state,
      due_date,
      employee_id,
      project_id,
    });
    console.log(body);
    const response = await fetch(`/api/tasks`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log(`${title}: ${description}`);
    } else {
      alert('Failed to create task');
    }
  }
};

const changeStateOfTask = async (e) => {
  e.preventDefault();
  const id = document.querySelector('#taskId').value.trim();
  const state = document.querySelector('#currentStatus').value.trim();
  if (state) {
    const body = JSON.stringify({ state });
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log(`State of Task modified`);
    } else {
      alert('Failed to update task');
    }
  }
};

const deleteTask = async (e) => {
  e.preventDefault();
  const id = document.querySelector('#taskId').value.trim();
  const response = await fetch(`/api/tasks/${id}`, {
    method: 'DELETE',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
document.querySelector('.test_button').addEventListener('click', newProject);
