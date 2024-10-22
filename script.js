const teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
  const teamSelect = document.getElementById("teamSelect");
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a team";
  teamSelect.appendChild(defaultOption);

  teams.forEach(function (team) {
    const option = document.createElement("option");
    option.value = team.code;
    option.textContent = team.name;
    teamSelect.appendChild(option);
  });

  teamSelect.addEventListener("change", function () {
    const selectedCode = teamSelect.value;
    const teamInfo = document.getElementById("teamInfo");

    if (selectedCode === "") {
      teamInfo.textContent = "";
    } else {
      teamInfo.textContent = "";
    }
  });
};

document
  .getElementById("teamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedCode = document.getElementById("teamSelect").value;
    const team = teams.find(function (t) {
      return t.code === selectedCode;
    });
    const teamInfo = document.getElementById("teamInfo");

    if (selectedCode === "") {
      teamInfo.textContent = "";
    } else if (team) {
      teamInfo.textContent = `You selected the ${team.name} (${team.code}) who play in ${team.plays}.`;
    } else {
      teamInfo.textContent = "Please select a team to see the information.";
    }
  });
