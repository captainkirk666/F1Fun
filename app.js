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

    document.body.innerHTML += `
        <p>
            <strong>${driver.position}.</strong>
            ${driver.Driver.givenName}
            ${driver.Driver.familyName}<br>

            Nationality: ${driver.Driver.nationality}<br>
            Team: ${driver.Constructors[0].name}<br>
            Points: ${driver.points}<br>
            Wins: ${driver.wins}
        </p>
    `;

});

    })
    .catch(error => {
        console.error(error);
        document.body.innerHTML += "<h2>Something went wrong!</h2>";
    });
