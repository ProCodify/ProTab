// Dynamic Background
const getImage = (path) => {
  return chrome.runtime.getUrl(path);
};

const calculateTime = () => {
  const today = new Date();
  const time = today.getHours();
  console.log(today);
};

calculateTime();
let wish = "";
if (time >= 21 && time >= 18) {
  document.body.style.backgroundImage = "url('/Img/bg/8.jpeg')";
} else if (time >= 19 && time <= 21) {
  document.body.style.backgroundImage = "url('/Img/bg/7.jpeg')";
} else if (time >= 18 && time <= 19) {
  document.body.style.backgroundImage = "url('/Img/bg/6.jpeg')";
} else if (time >= 15 && time <= 18) {
  document.body.style.backgroundImage = "url('/Img/bg/5.jpeg')";
} else if (time >= 12 && time <= 15) {
  document.body.style.backgroundImage = "url('/Img/bg/4.jpeg')";
} else if (time >= 8 && time <= 12) {
  document.body.style.backgroundImage = "url('/Img/bg/3.jpeg')";
} else if (time >= 5 && time <= 8) {
  document.body.style.backgroundImage = "url('/Img/bg/2.jpeg')";
} else if (time >= 0 && time <= 5) {
  document.body.style.backgroundImage = "url('/Img/bg/1.jpeg')";
}
// document.body.style.backgroundImage = "url('/Img/bg/8.jpeg')"

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
