console.log('In home.js');

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("open-btn").style.display="none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("open-btn").style.display="block";
}