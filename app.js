const url = "https://api.jolpi.ca/ergast/f1/current/driverStandings.json";

fetch(url)
  .then(response => response.json())
  .then(data => {

    const leader =
      data.MRData
          .StandingsTable
          .StandingsLists[0]
          .DriverStandings[0];

    document.body.innerHTML += `
      <h2>🏆 Championship Leader</h2>

      <h3>
        ${leader.Driver.givenName}
        ${leader.Driver.familyName}
      </h3>

      <p>Points: ${leader.points}</p>
      <p>Wins: ${leader.wins}</p>

    `;

  });
