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
        <h2>Championship Leader</h2>

        <p>
        ${leader.Driver.givenName}
        ${leader.Driver.familyName}
        </p>

        <p>${leader.points} points</p>
    `;

  });
