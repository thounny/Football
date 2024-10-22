const teams = [
  {
    code: "DAL",
    name: "Dallas Cowboys",
    plays: "Arlington, TX",
    imgSrc: "./images/DAL.png",
  },
  {
    code: "DEN",
    name: "Denver Broncos",
    plays: "Denver, CO",
    imgSrc: "./images/DEN.png",
  },
  {
    code: "HOU",
    name: "Houston Texans",
    plays: "Houston, TX",
    imgSrc: "./images/HOU.png",
  },
  {
    code: "KAN",
    name: "Kansas City Chiefs",
    plays: "Kansas City, MO",
    imgSrc: "./images/KAN.png",
  },
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
    const teamParagraph = teamInfo.querySelector("p");
    const teamImage = document.getElementById("teamImage");

    if (selectedCode === "") {
      teamParagraph.textContent = "";
      teamImage.style.display = "none";
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
    const teamParagraph = teamInfo.querySelector("p");
    const teamImage = document.getElementById("teamImage");

    if (selectedCode === "") {
      teamParagraph.textContent = "";
      teamImage.style.display = "none";
    } else if (team) {
      teamParagraph.textContent = `You selected the ${team.name} (${team.code}) who play in ${team.plays}.`;
      teamImage.src = team.imgSrc;
      teamImage.alt = team.name;
      teamImage.style.display = "block";
    } else {
      teamParagraph.textContent =
        "Please select a team to see the information.";
      teamImage.style.display = "none";
    }
  });
