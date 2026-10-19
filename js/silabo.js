document.addEventListener("DOMContentLoaded", () => {
  initUnitAccordion();
  initSkillCards();
  initReadingProgress();
  initPrintButton();
  initBackToTop();
});

function initUnitAccordion() {
  const toggles = document.querySelectorAll("[data-unit-toggle]");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const target = document.getElementById(toggle.dataset.unitToggle);
      if (!target) {
        return;
      }

      const shouldOpen = toggle.getAttribute("aria-expanded") !== "true";
      toggles.forEach((otherToggle) => {
        const otherTarget = document.getElementById(otherToggle.dataset.unitToggle);
        otherToggle.setAttribute("aria-expanded", "false");
        otherToggle.querySelector("span").textContent = "Explorar unidad";
        if (otherTarget) {
          otherTarget.hidden = true;
        }
      });

      if (shouldOpen) {
        toggle.setAttribute("aria-expanded", "true");
        toggle.querySelector("span").textContent = "Cerrar unidad";
        target.hidden = false;
      }
    });
  });
}

function initSkillCards() {
  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("click", () => {
      const selected = card.getAttribute("aria-pressed") === "true";
      card.setAttribute("aria-pressed", String(!selected));
    });
  });
}

function initReadingProgress() {
  const progress = document.getElementById("readingProgress");
  if (!progress) {
    return;
  }

  const updateProgress = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

function initPrintButton() {
  const printButton = document.getElementById("printSyllabus");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }
}

function initBackToTop() {
  const button = document.getElementById("backToTop");
  if (!button) {
    return;
  }

  const updateVisibility = () => {
    button.classList.toggle("visible", window.scrollY > 500);
  };

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
