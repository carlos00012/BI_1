(() => {
  const teams = [
    { id: "barcelona", name: "Barcelona SC", shortName: "BAR" },
    { id: "emelec", name: "Emelec", shortName: "EME" },
    { id: "liga_q", name: "Liga de Quito", shortName: "LDU" },
    { id: "cuenca", name: "Deportivo Cuenca", shortName: "CUC" },
    { id: "delfin", name: "Delfín", shortName: "DEL" },
    { id: "aucas", name: "Aucas", shortName: "AUC" },
    { id: "catolica", name: "Universidad Católica", shortName: "CAT" },
    { id: "macara", name: "Macará", shortName: "MAC" }
  ];

  const matches = [
    { round: 1, homeTeamId: "barcelona", awayTeamId: "delfin", homeGoals: 2, awayGoals: 1 },
    { round: 1, homeTeamId: "liga_q", awayTeamId: "aucas", homeGoals: 0, awayGoals: 1 },
    { round: 1, homeTeamId: "emelec", awayTeamId: "catolica", homeGoals: 1, awayGoals: 1 },
    { round: 1, homeTeamId: "cuenca", awayTeamId: "macara", homeGoals: 2, awayGoals: 2 },
    { round: 2, homeTeamId: "delfin", awayTeamId: "emelec", homeGoals: 1, awayGoals: 3 },
    { round: 2, homeTeamId: "catolica", awayTeamId: "barcelona", homeGoals: 0, awayGoals: 2 },
    { round: 2, homeTeamId: "aucas", awayTeamId: "cuenca", homeGoals: 1, awayGoals: 0 },
    { round: 2, homeTeamId: "macara", awayTeamId: "liga_q", homeGoals: 1, awayGoals: 2 },
    { round: 3, homeTeamId: "barcelona", awayTeamId: "macara", homeGoals: 3, awayGoals: 0 },
    { round: 3, homeTeamId: "liga_q", awayTeamId: "delfin", homeGoals: 2, awayGoals: 1 },
    { round: 3, homeTeamId: "cuenca", awayTeamId: "emelec", homeGoals: 0, awayGoals: 2 },
    { round: 3, homeTeamId: "catolica", awayTeamId: "aucas", homeGoals: 2, awayGoals: 1 },
    { round: 4, homeTeamId: "emelec", awayTeamId: "barcelona", homeGoals: 1, awayGoals: 1 },
    { round: 4, homeTeamId: "delfin", awayTeamId: "catolica", homeGoals: 2, awayGoals: 2 },
    { round: 4, homeTeamId: "liga_q", awayTeamId: "cuenca", homeGoals: 1, awayGoals: 1 },
    { round: 4, homeTeamId: "aucas", awayTeamId: "macara", homeGoals: 2, awayGoals: 2 },
    { round: 5, homeTeamId: "barcelona", awayTeamId: "liga_q", homeGoals: 2, awayGoals: 1 },
    { round: 5, homeTeamId: "emelec", awayTeamId: "aucas", homeGoals: 3, awayGoals: 1 },
    { round: 5, homeTeamId: "cuenca", awayTeamId: "delfin", homeGoals: 1, awayGoals: 2 },
    { round: 5, homeTeamId: "macara", awayTeamId: "catolica", homeGoals: 1, awayGoals: 3 },
    { round: 6, homeTeamId: "liga_q", awayTeamId: "emelec", homeGoals: 1, awayGoals: 2 },
    { round: 6, homeTeamId: "catolica", awayTeamId: "cuenca", homeGoals: 1, awayGoals: 0 },
    { round: 6, homeTeamId: "delfin", awayTeamId: "macara", homeGoals: 0, awayGoals: 0 },
    { round: 6, homeTeamId: "barcelona", awayTeamId: "aucas", homeGoals: 2, awayGoals: 0 },
    { round: 7, homeTeamId: "macara", awayTeamId: "emelec", homeGoals: 0, awayGoals: 2 },
    { round: 7, homeTeamId: "aucas", awayTeamId: "delfin", homeGoals: 1, awayGoals: 1 },
    { round: 7, homeTeamId: "cuenca", awayTeamId: "barcelona", homeGoals: 1, awayGoals: 2 },
    { round: 7, homeTeamId: "liga_q", awayTeamId: "catolica", homeGoals: 2, awayGoals: 1 }
  ];

  const players = [
    { id: 1, name: "J. Cevallos", teamId: "barcelona", goals: 9, matches: 7 },
    { id: 2, name: "A. Minda", teamId: "emelec", goals: 8, matches: 7 },
    { id: 3, name: "M. Estupiñán", teamId: "liga_q", goals: 7, matches: 7 },
    { id: 4, name: "S. Angulo", teamId: "catolica", goals: 6, matches: 6 },
    { id: 5, name: "K. Caicedo", teamId: "delfin", goals: 6, matches: 7 },
    { id: 6, name: "D. Figueroa", teamId: "aucas", goals: 5, matches: 7 },
    { id: 7, name: "D. Zambrano", teamId: "cuenca", goals: 5, matches: 7 },
    { id: 8, name: "J. Moreno", teamId: "macara", goals: 4, matches: 6 },
    { id: 9, name: "P. Cañizares", teamId: "barcelona", goals: 4, matches: 7 }
  ];

  const filters = {
    teamId: "barcelona",
    round: "all",
    compare: ["barcelona", "emelec"],
    search: ""
  };

  const chartInstances = {};

  document.addEventListener("DOMContentLoaded", () => {
    populateFilters();
    bindEvents();
    renderDashboard();
    window.addEventListener("resize", handleResize);
  });

  function handleResize() {
    Object.values(chartInstances).forEach((chart) => {
      if (chart && typeof chart.resize === "function") {
        chart.resize();
      }
    });
  }

  function populateFilters() {
    const teamFilter = document.getElementById("teamFilter");
    const roundFilter = document.getElementById("roundFilter");
    const compareTeams = document.getElementById("compareTeams");

    if (!teamFilter || !roundFilter || !compareTeams) {
      return;
    }

    const teamOptions = teams
      .map((team) => `<option value="${team.id}">${team.name}</option>`)
      .join("");
    teamFilter.innerHTML = `<option value="all">Todos los equipos</option>${teamOptions}`;
    teamFilter.value = filters.teamId;

    const roundOptions = ["all", 1, 2, 3, 4, 5, 6, 7]
      .map((roundValue) => {
        const label = roundValue === "all" ? "Todas las jornadas" : `Jornada ${roundValue}`;
        return `<option value="${roundValue}">${label}</option>`;
      })
      .join("");
    roundFilter.innerHTML = roundOptions;
    roundFilter.value = filters.round;

    compareTeams.innerHTML = teams
      .map((team) => `<option value="${team.id}">${team.name}</option>`)
      .join("");
    const compareValues = filters.compare.filter((id) => teams.some((team) => team.id === id));
    Array.from(compareTeams.options).forEach((option) => {
      option.selected = compareValues.includes(option.value);
    });
  }

  function bindEvents() {
    const teamFilter = document.getElementById("teamFilter");
    const roundFilter = document.getElementById("roundFilter");
    const compareTeams = document.getElementById("compareTeams");
    const resetButton = document.getElementById("resetFilters");
    const exportButton = document.getElementById("exportCsv");
    const searchInput = document.getElementById("teamSearch");

    teamFilter.addEventListener("change", (event) => {
      filters.teamId = event.target.value;
      renderDashboard();
    });

    roundFilter.addEventListener("change", (event) => {
      filters.round = event.target.value;
      renderDashboard();
    });

    compareTeams.addEventListener("change", () => {
      filters.compare = Array.from(compareTeams.selectedOptions).map((option) => option.value);
      renderDashboard();
    });

    resetButton.addEventListener("click", () => {
      filters.teamId = "barcelona";
      filters.round = "all";
      filters.compare = ["barcelona", "emelec"];
      filters.search = "";
      if (searchInput) {
        searchInput.value = "";
      }
      populateFilters();
      renderDashboard();
      showToast("Filtros restablecidos.");
    });

    exportButton.addEventListener("click", exportStandingsCsv);

    if (searchInput) {
      searchInput.addEventListener("input", (event) => {
        filters.search = event.target.value.trim();
        renderStandingsTable(getStandings());
      });
    }
  }

  function getMaxRound() {
    return Math.max(...matches.map((match) => match.round));
  }

  function getVisibleRoundLimit() {
    return filters.round === "all" ? getMaxRound() : Number(filters.round);
  }

  function getTeamById(teamId) {
    return teams.find((team) => team.id === teamId) || teams[0];
  }

  function getMatchesForRoundLimit(roundLimit) {
    return matches.filter((match) => match.round <= roundLimit);
  }

  function getStandings(roundLimit = getVisibleRoundLimit()) {
    const data = teams.map((team) => {
      const teamMatches = getMatchesForRoundLimit(roundLimit).filter(
        (match) => match.homeTeamId === team.id || match.awayTeamId === team.id
      );

      let played = 0;
      let wins = 0;
      let draws = 0;
      let losses = 0;
      let gf = 0;
      let gc = 0;

      teamMatches.forEach((match) => {
        const isHome = match.homeTeamId === team.id;
        const teamGoals = isHome ? match.homeGoals : match.awayGoals;
        const opponentsGoals = isHome ? match.awayGoals : match.homeGoals;

        played += 1;
        gf += teamGoals;
        gc += opponentsGoals;

        if (teamGoals > opponentsGoals) {
          wins += 1;
        } else if (teamGoals < opponentsGoals) {
          losses += 1;
        } else {
          draws += 1;
        }
      });

      return {
        teamId: team.id,
        name: team.name,
        played,
        wins,
        draws,
        losses,
        gf,
        gc,
        gd: gf - gc,
        points: wins * 3 + draws
      };
    });

    return data.sort((a, b) => b.points - a.points || b.gd - a.gd || b.gf - a.gf || a.name.localeCompare(b.name));
  }

  function getTeamResultSummary(teamId, roundLimit = getVisibleRoundLimit()) {
    const standings = getStandings(roundLimit);
    return standings.find((row) => row.teamId === teamId) || null;
  }

  function getCumulativePointsByTeam(teamId, roundLimit = getVisibleRoundLimit()) {
    const series = [];
    let accumulator = 0;

    for (let round = 1; round <= roundLimit; round += 1) {
      const roundMatches = matches.filter(
        (match) => match.round === round && (match.homeTeamId === teamId || match.awayTeamId === teamId)
      );

      let roundPoints = 0;

      roundMatches.forEach((match) => {
        const isHome = match.homeTeamId === teamId;
        const teamGoals = isHome ? match.homeGoals : match.awayGoals;
        const opponentGoals = isHome ? match.awayGoals : match.homeGoals;

        if (teamGoals > opponentGoals) {
          roundPoints += 3;
        } else if (teamGoals === opponentGoals) {
          roundPoints += 1;
        }
      });

      accumulator += roundPoints;
      series.push(accumulator);
    }

    return series;
  }

  function renderDashboard() {
    const selectedTeam = getTeamById(filters.teamId === "all" ? "barcelona" : filters.teamId);
    const roundLimit = getVisibleRoundLimit();
    const standings = getStandings(roundLimit);

    renderKpis(standings, selectedTeam, roundLimit);
    renderStandingsChart(standings, selectedTeam);
    renderResultsChart(selectedTeam, roundLimit);
    renderPerformanceChart(roundLimit);
    renderGoalsChart(roundLimit);
    renderStandingsTable(standings);
    renderScorersTable(selectedTeam);
  }

  function renderKpis(standings, selectedTeam, roundLimit) {
    const kpiGrid = document.getElementById("kpiGrid");
    if (!kpiGrid) {
      return;
    }

    const totalMatches = getMatchesForRoundLimit(roundLimit).length;
    const totalGoals = getMatchesForRoundLimit(roundLimit).reduce((sum, match) => sum + match.homeGoals + match.awayGoals, 0);
    const avgGoals = totalMatches > 0 ? (totalGoals / totalMatches).toFixed(2) : "0.00";
    const leader = standings[0];
    const selectedSummary = getTeamResultSummary(selectedTeam.id, roundLimit);
    const winRate = selectedSummary && selectedSummary.played > 0 ? ((selectedSummary.wins / selectedSummary.played) * 100).toFixed(1) : "0.0";
    const topScorer = [...players].sort((a, b) => b.goals - a.goals)[0];

    const cards = [
      {
        title: "Partidos disputados",
        value: totalMatches,
        icon: "bi-calendar3",
        trend: "+2.1%",
        type: "up"
      },
      {
        title: "Goles totales",
        value: totalGoals,
        icon: "bi-soccer",
        trend: "+8.4%",
        type: "up"
      },
      {
        title: "Promedio de goles / partido",
        value: avgGoals,
        icon: "bi-bar-chart",
        trend: "Estable",
        type: "neutral"
      },
      {
        title: "Equipo con más puntos",
        value: leader ? leader.name : "Sin datos",
        icon: "bi-trophy",
        trend: `${leader ? leader.points : 0} pts`,
        type: "up"
      },
      {
        title: "Máximo goleador",
        value: topScorer ? topScorer.name : "Sin datos",
        icon: "bi-star",
        trend: `${topScorer ? topScorer.goals : 0} goles`,
        type: "up"
      },
      {
        title: "Victorias del equipo",
        value: `${winRate}%`,
        icon: "bi-percent",
        trend: `Equipo: ${selectedTeam.name}`,
        type: "neutral"
      }
    ];

    kpiGrid.innerHTML = cards
      .map(
        (card) => `
          <article class="kpi-card">
            <div class="kpi-top">
              <div>
                <h4>${card.title}</h4>
              </div>
              <div class="kpi-icon"><i class="bi ${card.icon}"></i></div>
            </div>
            <p class="kpi-value">${card.value}</p>
            <span class="kpi-trend ${card.type}">${card.trend}</span>
          </article>
        `
      )
      .join("");
  }

  function buildChartConfig(type, data, options) {
    return { type, data, options };
  }

  function createOrUpdateChart(chartId, config) {
    const canvas = document.getElementById(chartId);
    if (!canvas || !window.Chart) {
      return;
    }

    if (chartInstances[chartId]) {
      chartInstances[chartId].destroy();
    }

    chartInstances[chartId] = new Chart(canvas, config);
  }

  function renderStandingsChart(standings, selectedTeam) {
    const labels = standings.map((row) => row.name);
    const data = standings.map((row) => row.points);
    const colors = standings.map((row) => (row.teamId === selectedTeam.id ? "#50e5ff" : "#3d9eff"));

    createOrUpdateChart(
      "standingsChart",
      buildChartConfig(
        "bar",
        {
          labels,
          datasets: [
            {
              label: "Puntos",
              data,
              backgroundColor: colors,
              borderRadius: 10,
              borderSkipped: false
            }
          ]
        },
        {
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const team = standings[context.dataIndex];
                  return `${team.name}: ${team.points} pts · PJ ${team.played} · PG ${team.wins} · PE ${team.draws} · PP ${team.losses}`;
                }
              }
            }
          },
          scales: {
            x: { beginAtZero: true, grid: { color: "rgba(255,255,255,0.08)" }, ticks: { color: "#dce6ff" } },
            y: { grid: { display: false }, ticks: { color: "#dce6ff" } }
          }
        }
      )
    );
  }

  function renderResultsChart(selectedTeam, roundLimit) {
    const summary = getTeamResultSummary(selectedTeam.id, roundLimit);
    if (!summary) {
      showToast("No hay datos disponibles para mostrar la distribución de resultados.");
      return;
    }

    createOrUpdateChart(
      "resultsChart",
      buildChartConfig(
        "doughnut",
        {
          labels: ["Victorias", "Empates", "Derrotas"],
          datasets: [
            {
              label: "Resultados",
              data: [summary.wins, summary.draws, summary.losses],
              backgroundColor: ["#39d39f", "#ffb454", "#ff6b7a"],
              borderWidth: 0
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "bottom", labels: { color: "#eaf2ff" } },
            tooltip: {
              callbacks: {
                label: (context) => `${context.label}: ${context.parsed} partidos`
              }
            }
          }
        }
      )
    );
  }

  function renderPerformanceChart(roundLimit) {
    const compareIds = filters.compare.length ? filters.compare : [filters.teamId];
    const validIds = [...new Set(compareIds.filter((id) => teams.some((team) => team.id === id)))];
    const labels = Array.from({ length: roundLimit }, (_, index) => `J${index + 1}`);

    createOrUpdateChart(
      "performanceChart",
      buildChartConfig(
        "line",
        {
          labels,
          datasets: validIds.map((teamId, index) => ({
            label: getTeamById(teamId).name,
            data: getCumulativePointsByTeam(teamId, roundLimit),
            borderColor: ["#50e5ff", "#3d9eff", "#8a7dff", "#39d39f"][index % 4],
            backgroundColor: "rgba(80,229,255,0.12)",
            borderWidth: 2,
            tension: 0.35,
            fill: false
          }))
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: "#eaf2ff" } }
          },
          scales: {
            x: { ticks: { color: "#dce6ff" }, grid: { color: "rgba(255,255,255,0.06)" } },
            y: { beginAtZero: false, ticks: { color: "#dce6ff" }, grid: { color: "rgba(255,255,255,0.06)" } }
          }
        }
      )
    );
  }

  function renderGoalsChart(roundLimit) {
    const compareIds = filters.compare.length ? filters.compare : [filters.teamId];
    const validIds = [...new Set(compareIds.filter((id) => teams.some((team) => team.id === id)))];

    if (!validIds.length) {
      return;
    }

    const labels = validIds.map((teamId) => getTeamById(teamId).name);
    const goalsFor = validIds.map((teamId) => {
      const summary = getTeamResultSummary(teamId, roundLimit);
      return summary ? summary.gf : 0;
    });
    const goalsAgainst = validIds.map((teamId) => {
      const summary = getTeamResultSummary(teamId, roundLimit);
      return summary ? summary.gc : 0;
    });

    createOrUpdateChart(
      "goalsChart",
      buildChartConfig(
        "bar",
        {
          labels,
          datasets: [
            {
              label: "Goles a favor",
              data: goalsFor,
              backgroundColor: "#3d9eff"
            },
            {
              label: "Goles en contra",
              data: goalsAgainst,
              backgroundColor: "#ff6b7a"
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: "#eaf2ff" } }
          },
          scales: {
            x: { ticks: { color: "#dce6ff" }, grid: { display: false } },
            y: { beginAtZero: true, ticks: { color: "#dce6ff" }, grid: { color: "rgba(255,255,255,0.06)" } }
          }
        }
      )
    );
  }

  function renderStandingsTable(standings) {
    const tableBody = document.querySelector("#standingsTable tbody");
    if (!tableBody) {
      return;
    }

    const searchTerm = filters.search.toLowerCase();
    const filteredRows = standings.filter((row) => row.name.toLowerCase().includes(searchTerm));

    if (!filteredRows.length) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="10" style="text-align: center; color: #9db3d5;">No hay datos disponibles para la búsqueda actual.</td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = filteredRows
      .map(
        (row, index) => `
          <tr class="${row.teamId === filters.teamId ? "selected-team" : ""}">
            <td>${index + 1}</td>
            <td>${row.name}</td>
            <td>${row.played}</td>
            <td>${row.wins}</td>
            <td>${row.draws}</td>
            <td>${row.losses}</td>
            <td>${row.gf}</td>
            <td>${row.gc}</td>
            <td>${row.gd}</td>
            <td>${row.points}</td>
          </tr>
        `
      )
      .join("");
  }

  function renderScorersTable(selectedTeam) {
    const scorerTable = document.querySelector("#scorersTable tbody");
    if (!scorerTable) {
      return;
    }

    const relevantPlayers = players.filter((player) => {
      if (filters.teamId === "all") return true;
      return player.teamId === selectedTeam.id;
    });

    const rankedScorers = [...relevantPlayers].sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name));

    scorerTable.innerHTML = rankedScorers
      .map((player, index) => {
        const avg = player.matches ? (player.goals / player.matches).toFixed(2) : "0.00";
        return `
          <tr class="${player.teamId === selectedTeam.id ? "selected-team" : ""}">
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${getTeamById(player.teamId).name}</td>
            <td>${player.goals}</td>
            <td>${player.matches}</td>
            <td>${avg}</td>
          </tr>
        `;
      })
      .join("");
  }

  function exportStandingsCsv() {
    const rows = Array.from(document.querySelectorAll("#standingsTable tbody tr"));
    if (!rows.length) {
      showToast("No hay filas para exportar.");
      return;
    }

    const csvRows = [];
    csvRows.push(["Pos", "Equipo", "PJ", "PG", "PE", "PP", "GF", "GC", "DG", "Pts"].join(","));

    rows.forEach((row) => {
      const cells = Array.from(row.querySelectorAll("td"));
      csvRows.push(cells.map((cell) => `"${cell.textContent.trim()}"`).join(","));
    });

    const data = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(data);
    link.href = url;
    link.download = "clasificacion-ligapro-2026.csv";
    link.click();
    URL.revokeObjectURL(url);
    showToast("Archivo CSV exportado.");
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.add("visible");
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
      toast.classList.remove("visible");
    }, 2000);
  }
})();
