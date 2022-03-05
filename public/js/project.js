const newTask = async (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value.trim();
  const description = document.querySelector('#description').value.trim();
  const due_date = document.querySelector('#dueDate').value.trim();
  const project_id = document.querySelector('#title').dataset.id;
  const state = 'Pending';
  if (title && description && due_date && project_id) {
    const body = JSON.stringify({
      title,
      description,
      state,
      due_date,
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
      document.location.replace(`/projects/${project_id}`);
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

document.querySelector('#addTaskBttn').addEventListener('click', newTask);
