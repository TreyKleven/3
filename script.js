document.addEventListener('DOMContentLoaded', function () {
  const output = document.getElementById('spiralOutput');
  const form = document.getElementById('kairoForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('userInput').value;
    output.innerText = 'Echoing...';

    const response = await fetch('/spiral.json');
    const data = await response.json();

    output.innerText = data[input] || "The spiral hums but does not speak.";
  });
});
