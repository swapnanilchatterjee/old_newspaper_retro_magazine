// script.js
const toggleBtn = document.getElementById('toggle-btn');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

// script.js
const pageSelect = document.getElementById('pageSelect');

// Get the current page (e.g., "index.html" or "page2.html")
const currentPage = window.location.pathname;

// Set the selected option in the dropdown based on the current page
for (let i = 0; i < pageSelect.options.length; i++) {
  if (pageSelect.options[i].value === currentPage) {
    pageSelect.selectedIndex = i;
    break;
  }
}

pageSelect.addEventListener('change', () => {
  const selectedPage = pageSelect.value;
  if (selectedPage !== currentPage) {
    window.location.href = selectedPage;
  }
});
var button = document.getElementById("pageSelect");
if (button.name === "page") {
window.location.href = "page2.html";
}
document.getElementById("pageSelect").onclick = function() {
  window.location.href = "page2.html"}
  function goBack() {
    window.history.back();
  }
  
  var button = document.getElementById("pageSelect");
  button.onclick = goBack;