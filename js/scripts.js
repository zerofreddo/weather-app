window.addEventListener('load', ()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDescription = document.querySelector('.location-timezone');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/651d064e3ccfde596fdc3aaa16a09246/${lat},${long}`;
    
      fetch(api)
        .then(response => {
          return response.json();
      })
      .then(data => {
        const { temperature, summary } = data.currently;
        //Set DOM Elements from API
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
      });
    });
  }
});