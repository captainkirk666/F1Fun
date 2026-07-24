const url = "https://api.jolpi.ca/ergast/f1/current/constructorStandings.json";

fetch(url)
    .then(response => response.json())
    .then(data => {

const constructors =
    data.MRData
        .StandingsTable
        .StandingsLists[0]
        .ConstructorStandings;

const container =
    document.querySelector("#table") ||
    document.querySelector("#drivers");

        // Clear the sample card from the HTML
        container.innerHTML = "";

        drivers.forEach(driver => {

            container.innerHTML += `

             <div class="card driver-card">

                    <div class="position">
                        ${driver.position}
                    </div>

                    <div class="driver-name">
                        ${driver.Driver.givenName}
                        ${driver.Driver.familyName}
                    </div>

                    <div class="nationality">
                        ${driver.Driver.nationality}
                    </div>

                    <div class="team">
                        ${driver.Constructors[0].name}
                    </div>

                    <div class="points">
                        ${driver.points}
                    </div>

                    <div class="wins">
                        ${driver.wins}
                    </div>

                </div>

            `;

        });

    })
    .catch(error => {

        console.error(error);

    });
