
document.addEventListener("DOMContentLoaded", function () {
  const members = {
    jerome: {
        name: "Jerome Rosales",
        contribution: 250,
        payout: "Dec 14, 2025"
      },
      jaja: {
        name: "Jaja",
        contribution: 250,
        payout: "Dec 14, 2025"
      },
      lina: {
        name: "Lina",
        contribution: 500,
        payout: "Dec 14, 2025"
      },
      linda: {
        name: "Lina",
        contribution: 500,
        payout: "Dec 14, 2025"
      },
      dennis: {
        name: "Dennis",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      jane: {
        name: "Jane",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      christian: {
        name: "Christian",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      shai: {
        name: "Shai",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      apyang: {
        name: "Apyang",
        contribution: 500,
        payout: "Dec 14, 2025"
      },
      richardPan: {
        name: "Richard Pantoja",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      casie: {
        name: "Casie",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      raymond: {
        name: "Raymond",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      ryan: {
        name: "Ryan",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      pie: {
        name: "Pie",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      richardSan: {
        name: "Richard Santos",
        contribution: 500,
        payout: "Dec 14, 2025"
      },
      felma: {
        name: "Felma",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      cresing: {
        name: "Cresing",
        contribution: 0,
        payout: "Dec 14, 2025"
      },
      ynna: {
        name: "Ynna",
        contribution: 0,
        payout: "Dec 14, 2025"
      }
  };

  // Expose functions globally so onclick works
  window.showDetails = function (id) {
    const member = members[id];
    if (member) {
      document.getElementById("name").innerText = member.name;
      document.getElementById("contribution").innerText = member.contribution;
      document.getElementById("payout").innerText = member.payout;
      document.getElementById("details-modal").style.display = "block";
    }
  };

  window.closeModal = function () {
    document.getElementById("details-modal").style.display = "none";
  };

  // Optional: close if clicked outside modal
  window.onclick = function (event) {
    const modal = document.getElementById("details-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

      
