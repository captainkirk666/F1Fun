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

constructors.forEach(constructor => {

            container.innerHTML += `

<div class="card table-row">

                    <div class="position">
                        ${constructor.position}
                    </div>


                    <div class="team">
                        ${constructor.Constructors[0].name}
                    </div>

                    <div class="points">
                        ${ constructor.points}
                    </div>

                    <div class="wins">
                        ${constructor.wins}
                    </div>

                </div>

            `;

        });

    })
    .catch(error => {

        console.error(error);

    });
