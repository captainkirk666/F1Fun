const url = "https://api.jolpi.ca/ergast/f1/current/driverStandings.json";

fetch(url)
.then(response => response.json())
.then(data => {

    const leader =
    data.MRData
        .StandingsTable
        .StandingsLists[0]
        .DriverStandings[0];

    document.body.innerHTML = `
        <h1>🏎️ Formula One Championship</h1>

        <h2>${leader.Driver.givenName} ${leader.Driver.familyName}</h2>

        <p><strong>Points:</strong> ${leader.points}</p>
        <p><strong>Wins:</strong> ${leader.wins}</p>
    `;
});
