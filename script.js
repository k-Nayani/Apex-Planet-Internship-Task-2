// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let errors = [];
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) errors.push("Name is required.");
  if (!email || !emailRegex.test(email)) errors.push("Valid email is required.");
  if (!message) errors.push("Message cannot be empty.");

  const errorDiv = document.getElementById('formErrors');
  errorDiv.innerHTML = "";
  if (errors.length > 0) {
    errors.forEach(err => {
      const p = document.createElement('p');
      p.style.color = 'red';
      p.innerText = err;
      errorDiv.appendChild(p);
    });
  } else {
    alert("Form submitted successfully!");
    this.reset();
  }
});

// To-Do List
document.getElementById('addTask').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.innerText = taskText;

  const delBtn = document.createElement('button');
  delBtn.innerText = '✖';
  delBtn.style.marginLeft = '1rem';
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
});
