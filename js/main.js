document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initThemeToggle();
  initETLDetails();
  renderBizExampleMetrics();
});

function initThemeToggle() {
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) {
    return;
  }

  let theme = "dark";
  try {
    theme = localStorage.getItem("bi-academy-theme") === "light" ? "light" : "dark";
  } catch (error) {
    console.error("No se pudo leer el tema guardado.", error);
  }

  const applyTheme = (nextTheme) => {
    document.body.dataset.theme = nextTheme;
    const isDark = nextTheme === "dark";
    toggle.innerHTML = `<i class="bi ${isDark ? "bi-sun-fill" : "bi-moon-fill"}" aria-hidden="true"></i><span>Tema ${isDark ? "claro" : "oscuro"}</span>`;
    toggle.setAttribute("aria-label", `Cambiar a tema ${isDark ? "claro" : "oscuro"}`);
    toggle.setAttribute("aria-pressed", String(!isDark));
    window.dispatchEvent(new Event("themechange"));
  };

  applyTheme(theme);
  toggle.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem("bi-academy-theme", theme);
    } catch (error) {
      console.error("No se pudo guardar el tema seleccionado.", error);
    }
  });
}

function initNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
}

function initETLDetails() {
  const toggles = document.querySelectorAll(".etl-toggle");

  toggles.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const detail = document.getElementById(targetId);

      if (!detail) {
        return;
      }

      const isVisible = detail.classList.contains("visible");
      detail.classList.toggle("visible", !isVisible);
      button.textContent = isVisible ? "Mostrar detalle" : "Ocultar detalle";
    });
  });
}

function renderBizExampleMetrics() {
  const container = document.getElementById("biz-example-metrics");

  if (!container) {
    return;
  }

  const monthlySales = [4200, 4680, 5100, 4620, 5300, 6100];
  const products = [
    { name: "Laptops", sales: 148 },
    { name: "Auriculares", sales: 194 },
    { name: "Tabletas", sales: 123 },
    { name: "Smartwatch", sales: 88 },
  ];

  const totalIncome = monthlySales.reduce((sum, value) => sum + value, 0);
  const bestProduct = products.reduce((best, product) =>
    product.sales > best.sales ? product : best,
    products[0]
  );
  const growth = ((monthlySales[monthlySales.length - 1] - monthlySales[0]) / monthlySales[0]) * 100;

  const metrics = [
    { label: "Ingresos totales", value: `$${totalIncome.toLocaleString()}` },
    { label: "Producto con más ventas", value: bestProduct.name },
    { label: "Crecimiento mensual", value: `${growth.toFixed(1)}%` },
  ];

  container.innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <span class="label">${metric.label}</span>
          <strong>${metric.value}</strong>
        </article>
      `
    )
    .join("");
}
