const url = "https://api.jolpi.ca/ergast/f1/current/driverStandings.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    document.body.innerHTML += "<h2>It works!</h2>";
  })
  .catch(error => {
    console.error(error);
  });
