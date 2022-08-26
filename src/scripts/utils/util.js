import { getImage } from "/scripts/lib/extension-api.js";
export const getTimeStatus = () => {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  let time = "";

  if (hour >= 6 && hour <= 12) {
    time = "morning";
  } else if (hour >= 13 && hour <= 18) {
    time = "afternoon";
  } else if (hour >= 18 && hour <= 19) {
    time = "evening";
  } else if (hour >= 20 || hour <= 5) {
    time = "night";
  }
  return time;
};

export const getWeatherIcon = (condition) => {
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
export const changeBackground = (weather, domElement) => {
  console.log(weather, domElement);
  let backgroundImageUrl = "";
  const timeStatus = getTimeStatus();
  if (!weather) {
    backgroundImageUrl = getImage(`assets/background/${timeStatus}.jpg`);
  } else {
    backgroundImageUrl = getImage(
      `assets/background/${timeStatus}-${weather}.jpg`
    );
  }
  domElement.style.backgroundImage = `url(${backgroundImageUrl})`;
};
