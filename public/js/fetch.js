
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


