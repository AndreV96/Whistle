const viewProject = (id) => {
  if (id) {
    document.location.replace(`/projects/${id}`);
  } else {
    window.alert("No project found with the id");
  }
};
