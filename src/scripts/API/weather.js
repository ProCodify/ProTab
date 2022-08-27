import { getTimeStatus, getWeatherIcon } from "/scripts/utils/util.js";
export default async function getWeatherStatus(query = "dhaka") {
  const weatherStatus = {
    icon: getTimeStatus(),
    temp: "--",
  };
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=9e4938bb7dd54a07805155725221105&q=${query}`
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
    weatherStatus.icon = "offline";
    console.log(error);
    return weatherStatus;
  }
}
