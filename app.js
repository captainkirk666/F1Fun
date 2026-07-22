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

table.innerHTML += `
<tr>

    <td>${driver.position}</td>

    <td>
        ${driver.Driver.givenName}
        ${driver.Driver.familyName}
    </td>

    <td>${driver.Driver.nationality}</td>

    <td>${driver.Constructors[0].name}</td>

    <td>${driver.points}</td>

    <td>${driver.wins}</td>

</tr>
`;

});

    })
    .catch(error => {
        console.error(error);
        document.body.innerHTML += "<h2>Something went wrong!</h2>";
    });
