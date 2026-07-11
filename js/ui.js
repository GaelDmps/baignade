let currentMealScenario;

const initStaticContent = (config) => {
  document.title = config.title;
  document.getElementById("trip-date").textContent = config.dateLabel;
  document.getElementById("hero-intro").textContent = config.intro;
};

const renderNavigation = (config) => {
  const desktop = document.getElementById("desktop-nav");
  const mobile = document.getElementById("mobile-nav");
  const desktopItems = [
    { id: "programme", label: "Programme" },
    { id: "participants", label: "Participants" },
    { id: "lieu", label: "Lieu" },
    { id: "courses", label: "Courses" },
    { id: "memo", label: "Memo" }
  ];

  desktop.innerHTML = desktopItems
    .map((item) => `<a href="#${item.id}" data-nav-link="${item.id}">${item.label}</a>`)
    .join("");

  mobile.innerHTML = config.navigation
    .map(
      (item) => `
        <a href="#${item.id}" data-nav-link="${item.id}" aria-label="${item.label}">
          ${icon(item.icon)}
          <span>${item.label}</span>
        </a>
      `
    )
    .join("");
};

const renderMealSwitch = (config, onChange) => {
  currentMealScenario = storage.getMealScenario(config.mealScenarioDefault);
  const container = document.getElementById("meal-switch");
  const scenarios = Object.entries(config.mealScenarios);

  container.innerHTML = `
    <fieldset>
      <legend>Scenario repas</legend>
      <div class="segmented-control">
        ${scenarios
          .map(
            ([key, scenario]) => `
              <label>
                <input type="radio" name="meal-scenario" value="${key}" ${key === currentMealScenario ? "checked" : ""}>
                <span>
                  <strong>${scenario.label}</strong>
                  <small>${scenario.description}</small>
                </span>
              </label>
            `
          )
          .join("")}
      </div>
    </fieldset>
  `;

  container.addEventListener("change", (event) => {
    if (event.target.name !== "meal-scenario") return;
    currentMealScenario = event.target.value;
    storage.setMealScenario(currentMealScenario);
    onChange(currentMealScenario);
  });
};

const renderTimeline = (config, scenario = currentMealScenario) => {
  const timeline = document.getElementById("timeline");
  const visibleItems = config.schedule.filter((item) => {
    if (item.dinnerOnly) return scenario === "dinner";
    if (item.picnicOnly) return scenario === "picnic";
    return true;
  });

  timeline.innerHTML = visibleItems
    .map(
      (item) => `
        <article class="timeline__item reveal">
          <div class="timeline__marker">${icon(item.icon)}</div>
          <div class="timeline__content">
            <time>${item.time}</time>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const renderParticipants = (participants) => {
  document.getElementById("participant-grid").innerHTML = participants
    .map(
      (person) => `
        <article class="card participant-card reveal">
          <div class="avatar avatar--${person.avatarColor}" aria-hidden="true">${person.name.charAt(0)}</div>
          <h3>${person.name}</h3>
        </article>
      `
    )
    .join("");
};

const renderLocation = (location) => {
  const { lat, lng } = location.coordinates || {};
  const mapEmbed = lat && lng
    ? `<iframe
        class="map-embed"
        title="Carte du lieu"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.006}%2C${lng + 0.01}%2C${lat + 0.006}&layer=mapnik&marker=${lat}%2C${lng}">
      </iframe>`
    : "";

  document.getElementById("location-card").innerHTML = `
    <div class="location-card__main">
      <div class="card__icon">${icon("pin")}</div>
      <div>
        <h3>${location.name}</h3>
        <p>${location.address}</p>
      </div>
    </div>
    <a class="button button--primary" href="${location.mapsUrl}" target="_blank" rel="noopener">Ouvrir dans Google Maps</a>
    ${mapEmbed}
  `;
};

const renderChecklist = (id, items, storageKey) => {
  const state = storage.getChecklist(storageKey);
  const container = document.getElementById(id);

  container.innerHTML = items
    .map((item) => {
      const itemId = `${storageKey}-${slugify(item)}`;
      return `
        <label class="check-item reveal" for="${itemId}">
          <input id="${itemId}" type="checkbox" ${state[item] ? "checked" : ""}>
          <span class="check-item__box">${icon("check")}</span>
          <span>${item}</span>
        </label>
      `;
    })
    .join("");

  container.addEventListener("change", (event) => {
    if (event.target.type !== "checkbox") return;
    const label = event.target.closest("label");
    const itemName = label?.querySelector("span:last-child")?.textContent;
    if (!itemName) return;
    const nextState = storage.getChecklist(storageKey);
    nextState[itemName] = event.target.checked;
    storage.setChecklist(storageKey, nextState);
  });
};

const renderPlaylist = (playlist) => {
  const embed = playlist.spotifyEmbedUrl
    ? `<iframe
        class="spotify-embed"
        title="${playlist.title}"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        src="${playlist.spotifyEmbedUrl}">
      </iframe>`
    : "";

  document.getElementById("playlist-card").innerHTML = `
    <div class="card__icon">${icon("music")}</div>
    <div>
      <h3>${playlist.title}</h3>
      <p>${playlist.description}</p>
    </div>
    ${embed}
    <a class="button button--ghost" href="${playlist.spotifyUrl}" target="_blank" rel="noopener">${playlist.ctaLabel}</a>
  `;
};

const initCountdown = (dateString) => {
  const container = document.getElementById("countdown");
  const target = new Date(dateString).getTime();

  const render = () => {
    const distance = Math.max(target - Date.now(), 0);
    const days = Math.floor(distance / 86_400_000);
    const hours = Math.floor((distance % 86_400_000) / 3_600_000);
    const minutes = Math.floor((distance % 3_600_000) / 60_000);
    const seconds = Math.floor((distance % 60_000) / 1000);

    container.innerHTML = `
      <span class="countdown__label">Départ dans</span>
      <div>
        <strong>${days}</strong><small>jours</small>
        <strong>${hours}</strong><small>h</small>
        <strong>${minutes}</strong><small>min</small>
        <strong>${seconds}</strong><small>s</small>
      </div>
    `;
  };

  render();
  window.setInterval(render, 1000);
};
