const url = "https://api.jolpi.ca/ergast/f1/current/driverStandings.json";

fetch(url)
    .then(response => response.json())
    .then(data => {

        const drivers =
            data.MRData
                .StandingsTable
                .StandingsLists[0]
                .DriverStandings;

        document.body.innerHTML += "<h2>Drivers</h2>";

drivers.forEach(driver => {

    console.log(`
${driver.position}
${driver.Driver.givenName}
${driver.Driver.familyName}

Nationality: ${driver.Driver.nationality}
Team: ${driver.Constructors[0].name}
Points: ${driver.points}
Wins: ${driver.wins}
`);

});

    })
    .catch(error => {
        console.error(error);
        document.body.innerHTML += "<h2>Something went wrong!</h2>";
    });
