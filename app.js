const url = "https://api.jolpi.ca/ergast/f1/current/driverStandings.json";

fetch(url)
  .then(response => response.json())
  .then(data => {

    const leader =
      data.MRData
          .StandingsTable
          .StandingsLists[0]
       drivers.forEach(driver => {

    console.log(
        `${driver.position}. ${driver.Driver.givenName} ${driver.Driver.familyName} - ${driver.points} pts`
    );

});

    document.body.innerHTML = `
      <h1>🏎️ Formula One Championship</h1>

      <h2>${leader.Driver.givenName} ${leader.Driver.familyName}</h2>

      <p>Points: ${leader.points}</p>
      <p>Wins: ${leader.wins}</p>
    `;

  })
  .catch(error => console.error(error));
