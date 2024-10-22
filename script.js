"use strict";

const teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
  const teamSelect = document.getElementById("teamSelect");
  teams.forEach((team) => {
    const option = document.createElement("option");
    option.value = team.code;
    option.textContent = team.name;

    teamSelect.appendChild(option);
  });
};

document
  .getElementById("showInfoButton")
  .addEventListener("click", function () {
    const selectedCode = document.getElementById("teamSelect").value;
    const team = teams.find((t) => t.code === selectedCode);
    const teamInfo = document.getElementById("teamInfo");
    if (team) {
      teamInfo.textContent = `You selected the ${team.name} (${team.code}) who play in ${team.plays}.`;
    } else {
      teamInfo.textContent = "Please select a team to see the information.";
    }
  });
