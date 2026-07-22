const url = "https://api.jolpi.ca/ergast/f1/current/driverStandings.json";

fetch(url)
  .then(response => response.json())
  .then(data => {

    console.log(data);

  });
