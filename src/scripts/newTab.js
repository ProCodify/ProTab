// Dynamic Background
const getImage = (path) => {
  return chrome.runtime.getURL(path);
};

const getTimeStatus = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  let time = "";

  if (hour >= 6 && hour <= 12) {
    time = "morning";
  } else if (hour >= 13 && hour <= 18) {
    time = "noon";
  } else if (hour >= 19 || hour <= 5) {
    time = "night";
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

// Update weather
const getWeatherIcon = (condition) => {
  if (!condition) return null;
  const text = condition.toLowerCase();
  // Todo: convert this logic into switch statement
  if (text === "sunny" || text === "clear") return "clear";
  else if (
    text.includes("cloudy") ||
    text.includes("mist") ||
    text.includes("overcast")
  )
    return "cloudy";
  else if (text.includes("rain")) return "rain";
  else {
    console.log(`Unknown weather condition ${text}`);
  }
};

const getWeatherStatus = async (query = "dhaka") => {
  const weatherStatus = {
    icon: getTimeStatus(),
    temp: "--",
  };
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=85675a08620f44ae99833023221208&q=${query}`
    );
    const data = await response.json();
    if (!data) return weatherStatus;
    const {
      current: {
        temp_c,
        condition: { text: condition },
      },
    } = data;

    weatherStatus.temp = temp_c;
    weatherStatus.icon = getWeatherIcon(condition);
    return weatherStatus;
  } catch (error) {
    console.log(error);
    return weatherStatus;
  }
};
const updateWeatherCondition = async () => {
  const condition = await getWeatherStatus();
  const weatherIconPath = getImage(
    `assets/icons/weather/${condition.icon}.png`
  );
  const weatherIconElement = document.getElementById("weather-icon");
  const weatherTempElement = document.getElementById("weather-temp");
  weatherIconElement.src = weatherIconPath;
  weatherTempElement.innerText = `${condition.temp}°C`;
};
updateWeatherCondition();

const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
function updateDateTime() {
  const now = new Date();
  timeElement.innerText = now.toLocaleTimeString({ hourCycle: "h24" });
  dateElement.innerText = now.toLocaleDateString();
}
setInterval(updateDateTime, 1000);

/*

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
