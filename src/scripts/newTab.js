// Dynamic Background
const getImage = (path) => {
  return chrome.runtime.getURL(path);
};

const getTimeStatus = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  let time = "";
  switch (hour) {
    case hour >= 6 && hour <= 12:
      time = "morning";
      break;
    case hour >= 13 && hour <= 18:
      time = "noon";
      break;
    // todo: check night time =>  condition
    default:
      time = "night";
      break;
  }
  return time;
};

const changeBackground = (weather) => {
  let backgroundImageUrl = "";
  const timeStatus = getTimeStatus();
  if (!weather) {
    backgroundImageUrl = getImage(`assets/background/${timeStatus}.jpg`);
  } else {
    backgroundImageUrl = getImage(
      `assets/background/${timeStatus}-${weather}.jpg`
    );
  }
  document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
};
changeBackground();
/*
function clock() {
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var phase = document.getElementById("phase");

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  // var am = "AM";

  if (h > 12) {
    h = h - 12;
    // var am = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  // phase.innerHTML = am;
}

// Weather Update
var interval = setInterval(clock, 1000);


document.getElementById("addTaskBtn").addEventListener("click", () => {
  document.getElementById("taskFild").style.display = "block";
  document.getElementById("addTaskBtn").style.display = "none";
  document.getElementById("taskValue").value = "";
});
let todo = [];
document.getElementById("SubTask").addEventListener("click", () => {
  document.getElementById("taskFild").style.display = "none";
  document.getElementById("addTaskBtn").style.display = "block";
  const taskValue = document.getElementById("taskValue").value;
  const Stask = { taskValue: taskValue, activity: false };
  addTask(Stask);
});
function addTask(task) {
  todo.push(task);
  console.log(todo);
  localStorage.setItem("todos", JSON.stringify(todo));
}

const tasks = JSON.parse(localStorage.getItem("todos"));
tasks.map((task) => {
  const tList = document.createElement("p");
  tList.id = "TodoList";
  tList.innerHTML = task.taskValue;
  document.getElementById("taskItem").appendChild(tList);
});
// function HideNews(){
//     document.getElementById('news').innerHTML = '';
// }

*/
