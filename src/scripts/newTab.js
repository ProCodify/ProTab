import { changeBackground } from "./utils/util.js";
import getWeatherStatus from "/scripts/API/weather.js";
import { getImage } from "/scripts/lib/extension-api.js";
// DOM References
const weatherIconElement = document.getElementById("weather-icon");
const weatherTempElement = document.getElementById("weather-temp");
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

// Helper functions
const updateWeatherCondition = async (weatherCondition) => {
  const condition = weatherCondition || (await getWeatherStatus());
  const weatherIconPath = getImage(
    `assets/icons/weather/${condition.icon}.png`
  );

  weatherIconElement.src = weatherIconPath;
  weatherTempElement.innerText = `${condition.temp}°C`;
};
function updateDateTime() {
  const now = new Date();
  timeElement.innerText = now.toLocaleTimeString({ hourCycle: "h24" });
  dateElement.innerText = now.toLocaleDateString();
}

// Starting point
window.onload = async () => {
  const weatherStatus = await getWeatherStatus();
  setInterval(updateDateTime, 1000);
  changeBackground(weatherStatus.icon, document.body);
  updateWeatherCondition(weatherStatus);
  // console.log(await getNews());
};

// document.getElementById("addTaskBtn").addEventListener("click", () => {
//   document.getElementById("taskFild").style.display = "block";
//   document.getElementById("addTaskBtn").style.display = "none";
//   document.getElementById("taskValue").value = "";
// });
// let todo = [];
// document.getElementById("SubTask").addEventListener("click", () => {
//   document.getElementById("taskFild").style.display = "none";
//   document.getElementById("addTaskBtn").style.display = "block";
//   const taskValue = document.getElementById("taskValue").value;
//   const Stask = { taskValue: taskValue, activity: false };
//   addTask(Stask);
// });
// function addTask(task) {
//   todo.push(task);
//   console.log(todo);
//   localStorage.setItem("todos", JSON.stringify(todo));
// }

// const tasks = JSON.parse(localStorage.getItem("todos"));

// if (tasks.length) {
//   tasks.map((task) => {
//     const tList = document.createElement("p");
//     tList.id = "TodoList";
//     tList.innerHTML = task.taskValue;
//     document.getElementById("taskItem").appendChild(tList);
//   });
// } else {
//   console.log("No Task");
// }
