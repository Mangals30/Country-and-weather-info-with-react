import PartlyCloudy from "../images/partly-cloudy.jpg";
import Clear from "../images/clear.jpg";
import Sunny from "../images/sunny.jpg";
import Overcast from "../images/overcast.jpg";
import Dust from "../images/dust.jpg";
import Rain from "../images/rain.jpg";
import Thunderstorm from "../images/thunderstorm.jpg";
import Haze from "../images/haze.jpg";
import Snow from "../images/snow.jpg";
import Cloudy from "../images/cloudy.jpg";
import Sand from "../images/sand.jpg";

export const getBackgroundImage = (current) => {
  let bgImage = "";
  let color = "black";
  if (
    current.weather_descriptions.toString().toLowerCase() === "partly cloudy"
  ) {
    bgImage = PartlyCloudy;
  }
  if (current.weather_descriptions.toString().toLowerCase() === "clear") {
    bgImage = Clear;
  }
  if (current.weather_descriptions.toString().toLowerCase() === "sunny") {
    bgImage = Sunny;
  }
  if (current.weather_descriptions.toString().toLowerCase() === "overcast") {
    bgImage = Overcast;
    color = "white";
  }
  if (
    current.weather_descriptions.toString().toLowerCase() === "widespread dust"
  ) {
    bgImage = Dust;
  }
  if (
    current.weather_descriptions.toString().toLowerCase().includes("rain") ||
    current.weather_descriptions.toString().toLowerCase().includes("shower") ||
    current.weather_descriptions.toString().toLowerCase().includes("drizzle")
  ) {
    bgImage = Rain;
  }
  if (
    current.weather_descriptions.toString().toLowerCase() === "thunderstorm"
  ) {
    bgImage = Thunderstorm;
    color = "white";
  }
  if (
    current.weather_descriptions.toString().toLowerCase().includes("haze") ||
    current.weather_descriptions.toString().toLowerCase() === "mist"
  ) {
    bgImage = Haze;
  }
  if (current.weather_descriptions.toString().toLowerCase().includes("snow")) {
    bgImage = Snow;
  }
  if (current.weather_descriptions.toString().toLowerCase() === "cloudy") {
    bgImage = Cloudy;
    color = "white";
  }
  if (current.weather_descriptions.toString().toLowerCase() === "sand") {
    bgImage = Sand;
    color = "white";
  }

  return { bgImage, color };
};
