const namespace = "water-day";

const read = (key, fallback) => {
  try {
    const stored = localStorage.getItem(`${namespace}:${key}`);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  localStorage.setItem(`${namespace}:${key}`, JSON.stringify(value));
};

const storage = {
  getChecklist(key) {
    return read(`checklist:${key}`, {});
  },
  setChecklist(key, value) {
    write(`checklist:${key}`, value);
  },
  getMealScenario(fallback) {
    return read("meal-scenario", fallback);
  },
  setMealScenario(value) {
    write("meal-scenario", value);
  }
};
