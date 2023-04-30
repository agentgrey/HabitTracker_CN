console.log('In home.js');

// function to open the form to add new habit
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("open-btn").style.display="none";
}
// function to close the form to add new habit
function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("open-btn").style.display="block";
}

// open/close edit form
document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('fa-pencil')) {
    const parent = target.parentNode;
    const id = `myEditForm_${parent.id}`;
    document.getElementById(id).style.display = 'flex';
  }

  if (target.classList.contains('closeIt')) {
    const id = target.parentNode.parentNode.id;
    document.getElementById(id).style.display = 'none';
  }
})

// function to toggle between daily/weekly view
function changeView() {
  let weekly = document.querySelectorAll(".weekly-view");
  let daily = document.querySelectorAll(".daily-view");
  let button = document.getElementById("change-view");

  if(button.innerHTML == 'Show Weekly') {
    for(let d of daily) 
      d.style.display = 'none';
    for(let w of weekly)
      w.style.display = 'flex';

    button.innerHTML = "Show Daily";
    view = weekly;
  } else {
    for(let d of daily) 
      d.style.display = 'flex';
    for(let w of weekly)
      w.style.display = 'none';

    button.innerHTML = "Show Weekly";
    view = daily;
  }
}


