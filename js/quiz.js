const quizQuestions = [
  {
    question: "¿Cuál es la principal función de Business Intelligence?",
    options: [
      "Generar software sin analizar datos",
      "Convertir datos en información útil para la toma de decisiones",
      "Reemplazar la estrategia de la empresa",
      "Aumentar el número de empleados"
    ],
    correctIndex: 1,
    explanation: "BI reúne, procesa y visualiza datos para convertirlos en información útil que apoye decisiones basadas en evidencia.",
    category: "fundamentos"
  },
  {
    question: "¿Qué etapa del ETL se encarga de limpiar y normalizar datos?",
    options: [
      "Extraction",
      "Transformation",
      "Loading",
      "Reporting"
    ],
    correctIndex: 1,
    explanation: "La transformación limpia, valida y prepara los datos para su análisis final.",
    category: "etl"
  },
  {
    question: "¿Cuál de estas opciones representa mejor un KPI?",
    options: [
      "La fecha de creación de la empresa",
      "El porcentaje de conversión de ventas",
      "Una lista de proveedores",
      "El nombre del departamento"
    ],
    correctIndex: 1,
    explanation: "Un KPI es una métrica que mide rendimiento respecto a un objetivo, como la tasa de conversión o la retención.",
    category: "kpi"
  },
  {
    question: "¿Qué es un data warehouse?",
    options: [
      "Un sistema operativo para ventas",
      "Un repositorio analítico centralizado para datos estructurados",
      "Un correo interno",
      "Un modelo de marketing"
    ],
    correctIndex: 1,
    explanation: "Un data warehouse centraliza datos preparados para análisis y consultas de negocio.",
    category: "warehouse"
  },
  {
    question: "¿Qué beneficio aporta una buena visualización en BI?",
    options: [
      "Aumenta la complejidad del análisis",
      "Facilita detectar tendencias y anomalías",
      "Elimina la necesidad de interpretar datos",
      "Sustituye al equipo de ventas"
    ],
    correctIndex: 1,
    explanation: "Las visualizaciones ayudan a comunicar hallazgos de manera rápida y comprensible para decidir mejor.",
    category: "visualizacion"
  },
  {
    question: "¿Qué tipo de decisión está más relacionada con acciones a corto plazo y operación diaria?",
    options: [
      "Estratégica",
      "Táctica",
      "Operativa",
      "Financiera"
    ],
    correctIndex: 2,
    explanation: "Las decisiones operativas resuelven aspectos del trabajo diario y la ejecución del negocio.",
    category: "decision"
  },
  {
    question: "¿Cuál es el problema principal de tener datos de baja calidad?",
    options: [
      "Pueden hacer que las decisiones sean menos ágiles",
      "Pueden llevar a conclusiones engañosas y decisiones incorrectas",
      "Aumentan automáticamente las ventas",
      "Eliminarán la necesidad de KPI"
    ],
    correctIndex: 1,
    explanation: "Cuando los datos tienen errores, duplicados o faltantes, la información puede ser poco confiable y engañosa.",
    category: "calidad"
  },
  {
    question: "¿Qué significa ETL?",
    options: [
      "Evaluar, transformar, listar",
      "Extract, transform, load",
      "Estimar, traducir, localizar",
      "Explorar, tabular, liderar"
    ],
    correctIndex: 1,
    explanation: "ETL es el flujo clásico de extracción, transformación y carga de datos para análisis.",
    category: "etl"
  },
  {
    question: "¿Cuál de estos ejemplos es un dato y no una información útil?",
    options: [
      "La tasa de cumplimiento semanal es del 82%",
      "Se vendieron 240 unidades en mayo",
      "La empresa tuvo 12 devoluciones",
      "El 30% de las ventas se concentra en la provincia del Azuay"
    ],
    correctIndex: 2,
    explanation: "Un dato bruto como '12 devoluciones' no ofrece aún contexto ni interpretación; la información se construye al relacionarlo con indicadores y contexto.",
    category: "datos"
  },
  {
    question: "¿Qué diferencia principal existe entre BI y análisis de datos?",
    options: [
      "BI siempre requiere inteligencia artificial",
      "BI se orienta más al uso operativo y gestión del negocio, mientras el análisis de datos busca patrones y hallazgos",
      "No hay diferencia",
      "El análisis de datos reemplaza los dashboard"
    ],
    correctIndex: 1,
    explanation: "BI se centra en la entrega de información para decisiones, mientras el análisis de datos profundiza en patrones, causalidad y tendencias.",
    category: "fundamentos"
  },
  {
    question: "¿Qué acción es típica después de detectar un problema en BI?",
    options: [
      "Ignorar el problema",
      "Recopilar y analizar datos relacionados",
      "Cambiar la misión de la empresa",
      "Eliminar todos los reportes"
    ],
    correctIndex: 1,
    explanation: "La detección de una anomalía debe ir acompañada de revisión de datos, análisis de causas y decisiones basadas en evidencia.",
    category: "decision"
  },
  {
    question: "¿Qué técnica ayuda a unir información de distintas fuentes?",
    options: [
      "Normalización",
      "Integración de datos",
      "Desnormalización aleatoria",
      "Fijación de reportes"
    ],
    correctIndex: 1,
    explanation: "La integración de datos permite combinar información de múltiples fuentes antes de preparar la analítica.",
    category: "warehouse"
  },
  {
    question: "¿Cuál de estas prácticas mejora la calidad de los datos?",
    options: [
      "Duplicar registros sin control",
      "Eliminar valores nulos y validar formatos",
      "Usar nombres inconsistentes",
      "No documentar el origen de los datos"
    ],
    correctIndex: 1,
    explanation: "Validar formatos, limpiar valores nulos y estandarizar nombres mejora la fiabilidad del análisis.",
    category: "calidad"
  },
  {
    question: "¿Qué representa un dashboard BI?",
    options: [
      "Un calendario de tareas",
      "Una vista consolidada de indicadores y métricas clave",
      "Un manual de procedimientos",
      "Un archivo de backup"
    ],
    correctIndex: 1,
    explanation: "Los dashboards resumen indicadores clave para seguimiento rápido, comparación y toma de decisiones.",
    category: "visualizacion"
  },
  {
    question: "¿Cuál de estas afirmaciones sobre KPI es correcta?",
    options: [
      "Los KPI no se comparan con metas",
      "Los KPI deben ser medibles y alineados a objetivos",
      "Un KPI siempre es un dato cualitativo",
      "Los KPI solo sirven para marketing"
    ],
    correctIndex: 1,
    explanation: "Los KPI deben medir resultados concretos y compararse contra metas para acompañar la gestión.",
    category: "kpi"
  },
  {
    question: "¿Qué ocurre si la interpretación de los datos es incorrecta?",
    options: [
      "La decisión siempre mejora",
      "Se puede tomar una decisión nociva aunque los datos sean abundantes",
      "El negocio deja de usar BI",
      "Los dashboards se vuelven automáticos"
    ],
    correctIndex: 1,
    explanation: "La calidad de la información y la interpretación humana influyen directamente en la validez de las decisiones.",
    category: "decision"
  }
];

const STORAGE_KEY = "biQuizBestScore";

const quizState = {
  currentIndex: 0,
  score: 0,
  correct: 0,
  incorrect: 0,
  streak: 0,
  answered: false,
  bestScore: loadBestScore(),
};

function loadBestScore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? Number(raw) || 0 : 0;
  } catch (error) {
    console.warn("No se pudo leer localStorage para la mejor puntuación:", error);
    return 0;
  }
}

function saveBestScore(value) {
  try {
    localStorage.setItem(STORAGE_KEY, String(value));
  } catch (error) {
    console.warn("No se pudo guardar la mejor puntuación:", error);
  }
}

function getLevel(percent) {
  if (percent >= 75) return "Maestro de datos";
  if (percent >= 50) return "Analista BI";
  return "Explorador de datos";
}

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  const progress = document.getElementById("quiz-progress");
  const scoreNode = document.getElementById("quiz-score");

  if (!container || !progress || !scoreNode) {
    return;
  }

  const currentQuestion = quizQuestions[quizState.currentIndex];
  const percentage = ((quizState.currentIndex + (quizState.answered ? 1 : 0)) / quizQuestions.length) * 100;

  progress.style.width = `${Math.min(percentage, 100)}%`;
  scoreNode.textContent = String(quizState.score);

  if (quizState.currentIndex >= quizQuestions.length) {
    renderResults();
    return;
  }

  const questionHtml = `
    <div class="quiz-question">
      <span class="eyebrow">Pregunta ${quizState.currentIndex + 1} / ${quizQuestions.length}</span>
      <h3>${currentQuestion.question}</h3>
      <div class="answer-list">
        ${currentQuestion.options
          .map(
            (option, index) => `
              <button
                class="answer-option"
                type="button"
                data-index="${index}"
                ${quizState.answered ? "disabled" : ""}
              >
                ${option}
              </button>
            `
          )
          .join("")}
      </div>
      ${quizState.answered ? `<div class="quiz-feedback"></div>` : ""}
      <div class="quiz-actions">
        <button type="button" class="btn btn-primary" id="next-question" ${quizState.answered ? "" : "disabled"}>Siguiente</button>
      </div>
    </div>
  `;

  container.innerHTML = questionHtml;

  const buttons = container.querySelectorAll(".answer-option");
  buttons.forEach((button) => {
    button.addEventListener("click", () => handleAnswer(Number(button.dataset.index)));
  });

  const next = document.getElementById("next-question");
  if (next) {
    next.addEventListener("click", () => {
      quizState.currentIndex += 1;
      quizState.answered = false;
      renderQuiz();
    });
  }
}

function renderQuizScore() {
  const scoreNode = document.getElementById("quiz-score");
  if (scoreNode) {
    scoreNode.textContent = String(quizState.score);
  }
}

function renderResults() {
  const container = document.getElementById("quiz-container");
  if (!container) {
    return;
  }

  const totalQuestions = quizQuestions.length;
  const percentage = (quizState.correct / totalQuestions) * 100;
  const level = getLevel(percentage);
  const resultMessage =
    percentage >= 80
      ? "¡Excelente! Dominas los conceptos clave de BI y toma decisiones basadas en evidencia."
      : percentage >= 60
        ? "¡Muy bien! Tienes una base sólida, pero aún puedes reforzar algunos temas para consolidar tu enfoque analítico."
        : "Aún tienes espacio para mejorar. Revisa los fundamentos y vuelve a intentarlo con más confianza.";

  const bestScore = Math.max(quizState.bestScore, quizState.score);
  quizState.bestScore = bestScore;
  saveBestScore(bestScore);

  const recommendations = quizQuestions
    .filter((question) => {
      const answerIndex = getUserAnswerForQuestion(question.question);
      return answerIndex !== question.correctIndex;
    })
    .slice(0, 3)
    .map((question) => question.category)
    .join(", ");

  container.innerHTML = `
    <div class="quiz-results">
      <span class="badge-win"><i class="bi bi-trophy"></i> Resultado final</span>
      <h3>${level}</h3>
      <p>${resultMessage}</p>
      <div class="result-stats">
        <div class="result-stat">
          <small>Puntuación total</small>
          <strong>${quizState.score}</strong>
        </div>
        <div class="result-stat">
          <small>Correctas</small>
          <strong>${quizState.correct}</strong>
        </div>
        <div class="result-stat">
          <small>Incorrectas</small>
          <strong>${quizState.incorrect}</strong>
        </div>
        <div class="result-stat">
          <small>% aciertos</small>
          <strong>${percentage.toFixed(0)}%</strong>
        </div>
      </div>
      <div class="quiz-overview">
        <p><strong>Mejor puntuación:</strong> ${bestScore} puntos</p>
        <p><strong>Nivel alcanzado:</strong> ${level}</p>
        <p><strong>Temas para repasar:</strong> ${recommendations || "Ninguno"}</p>
      </div>
      <div class="quiz-actions">
        <button type="button" class="btn btn-secondary" id="restart-quiz">Volver a intentar</button>
      </div>
    </div>
  `;

  const restartButton = document.getElementById("restart-quiz");
  if (restartButton) {
    restartButton.addEventListener("click", resetQuiz);
  }
}

function getUserAnswerForQuestion(questionText) {
  const stored = JSON.parse(sessionStorage.getItem("biQuizAnswers") || "{}");
  return stored[questionText];
}

function storeUserAnswer(questionText, selectedIndex) {
  const stored = JSON.parse(sessionStorage.getItem("biQuizAnswers") || "{}");
  stored[questionText] = selectedIndex;
  sessionStorage.setItem("biQuizAnswers", JSON.stringify(stored));
}

function resetQuiz() {
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.correct = 0;
  quizState.incorrect = 0;
  quizState.streak = 0;
  quizState.answered = false;
  sessionStorage.removeItem("biQuizAnswers");
  renderQuiz();
}

window.addEventListener("DOMContentLoaded", () => {
  const scoreNode = document.getElementById("quiz-score");
  if (scoreNode) {
    scoreNode.textContent = String(quizState.score);
  }

  const progressNode = document.getElementById("quiz-progress");
  if (progressNode) {
    progressNode.style.width = "0%";
  }

  renderQuiz();
});

window.addEventListener("beforeunload", () => {
  try {
    sessionStorage.removeItem("biQuizAnswers");
  } catch (error) {
    // no-op para evitar fallos si el navegador bloquea storage
  }
});

function handleAnswer(selectedIndex) {
  const currentQuestion = quizQuestions[quizState.currentIndex];
  const options = document.querySelectorAll(".answer-option");
  const feedback = document.querySelector(".quiz-feedback");

  if (quizState.answered || !currentQuestion) {
    return;
  }

  quizState.answered = true;
  const isCorrect = selectedIndex === currentQuestion.correctIndex;
  storeUserAnswer(currentQuestion.question, selectedIndex);

  options.forEach((button, index) => {
    button.disabled = true;
    if (index === currentQuestion.correctIndex) {
      button.classList.add("correct");
    }
    if (index === selectedIndex && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    quizState.score += 100;
    quizState.correct += 1;
    quizState.streak += 1;
  } else {
    quizState.incorrect += 1;
    quizState.streak = 0;
  }

  if (feedback) {
    feedback.innerHTML = `
      <strong>${isCorrect ? "Correcto." : "Incorrecto."}</strong>
      ${currentQuestion.explanation}
    `;
  }

  const nextButton = document.getElementById("next-question");
  if (nextButton) {
    nextButton.disabled = false;
  }

  renderQuizScore();
}
