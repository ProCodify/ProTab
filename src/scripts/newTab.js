import generateId from "./lib/randomId.js";
import { getItem, saveItem } from "./utils/store.js";
import { changeBackground } from "./utils/util.js";
import getNews from "/scripts/API/news.js";
import getWeatherStatus from "/scripts/API/weather.js";
import { getImage } from "/scripts/lib/extension-api.js";
// DOM References
const weatherIconElement = document.getElementById("weather-icon");
const weatherTempElement = document.getElementById("weather-temp");
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const newsContainer = document.getElementById("news");

const todoInputArea = document.getElementById("taskFild");
const addTaskBtn = document.getElementById("addTaskBtn");

const submitAddTaskBtn = document.getElementById("SubTask");
// Global Variables
let todoList = getItem("todoList") || [];

// Event Handlers
const handleAddTask = () => {
  addTaskBtn.style.display = "none";
  todoInputArea.style.display = "block";
};

const handleAddTodo = () => {
  const todoFiled = document.getElementById("taskValue");
  const todoValue = todoFiled.value;
  if (!todoValue) return;
  addTodo(todoValue);
};
// handling events
submitAddTaskBtn.addEventListener("click", handleAddTodo);
addTaskBtn.addEventListener("click", handleAddTask);

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
function updateNews(data, length = data.length) {
  for (let i = 0; i < length; i++) {
    const result = data[i];
    if (!result) break;
    const news = document.createElement("div");
    const nDate = document.createElement("p");
    var tNews = document.createElement("a");
    tNews.setAttribute("href", `${result.link}`);
    tNews.innerText = "link text";
    nDate.innerText = result.pubDate.slice(0, 10);
    tNews.innerText = result.title;
    news.appendChild(nDate);
    news.appendChild(tNews);
    newsContainer.appendChild(news);
  }
}
function addTodo(task) {
  const todo = { text: task, id: generateId() };
  todoList.push(todo);
  saveItem("todoList", todoList);
  renderTodoList();
}
function deleteTodo(id) {
  let todoList = getItem("todoList") || [];
  todoList = todoList.filter((todo) => todo.id !== id);
  saveItem("todoList", todoList);
  renderTodoList();
}
function renderTodoList() {
  let todoList = getItem("todoList") || [];
  const todoContainer = document.getElementById("taskItem");
  todoContainer.innerHTML = null;
  todoList.forEach((todo) => {
    const d = document.createElement("div");
    d.className = "task";
    const p = document.createElement("p");
    const b = document.createElement("button");
    p.innerText = todo.text;
    b.innerHTML = `<i class="fa-regular fa-square-check"></i>`;
    b.addEventListener("click", () => deleteTodo(todo.id));
    d.appendChild(p);
    d.appendChild(b);

    todoContainer.appendChild(d);
  });
}
// Starting point
window.onload = async () => {
  renderTodoList();
  const weatherStatus = await getWeatherStatus();
  setInterval(updateDateTime, 1000);
  changeBackground(weatherStatus.icon, document.body);
  updateWeatherCondition(weatherStatus);
  const news = await getNews();
  updateNews(news, 5);
};
