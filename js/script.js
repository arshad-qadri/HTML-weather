const getCity = document.getElementById("city");
const weather = document.querySelector(".weather-inner");
let data = "";
const getData = () => {
  weather.innerHTML = !getCity.value
    ? `<p>data not found</p>`
    : `
      <div class="location"> <i class="fas fa-street-view"></i> <h3> ${getCity.value}</h3> </div>
      <div class="temp"> ${data.temp} °Cel</div>
      <div class="min-max-temp">   Minimum : ${data.temp_min} °Cel | Maximum : ${data.temp_max} °Cel </div>
  `;
};
const getAPIData = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${getCity.value}&units=metric&appid=8a8015ab868c02ae5d0bf4a32b40c505`;
  const fetchApi = await (await fetch(url)).json();
  data = fetchApi.main;
  console.log(fetchApi);
  console.log(data);
  getData();
};

getCity.addEventListener("input", getAPIData);
getAPIData();
