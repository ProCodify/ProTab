// Dynamic Background
const getImage = (path) => {
  return chrome.runtime.getURL(path);
};

const calculateTime = () => {
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

const backgroundImage = getImage(`./assets/background/${calculateTime()}.jpg`);
document.body.style.backgroundImage = `url(${backgroundImage})`;
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

var interval = setInterval(clock, 1000);
fetch(
  "https://newsapi.org/v2/everything?q=tesla&from=2022-07-07&sortBy=publishedAt&apiKey=af79ededa3ae4378ab7c59b4322ea73d"
)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 7; i++) {
      const element = data.articles[i];
      const pDate = document.createElement("h6");
      pDate.innerHTML = "05/07/2022";
      const pNews = document.createElement("p");
      pNews.innerHTML = element.title;
      console.log(element);
      document.getElementById("news").appendChild(pDate);
      document.getElementById("news").appendChild(pNews);
    }
  });

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
