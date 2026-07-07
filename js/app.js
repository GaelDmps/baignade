const boot = () => {
  initStaticContent(tripConfig);
  renderNavigation(tripConfig);
  renderMealSwitch(tripConfig, (scenario) => {
    renderTimeline(tripConfig, scenario);
    initRevealAnimations();
  });
  renderTimeline(tripConfig);
  renderParticipants(tripConfig.participants);
  renderLocation(tripConfig.location);
  renderChecklist("shopping-list", tripConfig.shoppingList, "shopping");
  renderChecklist("remember-list", tripConfig.rememberList, "remember");
  renderPlaylist(tripConfig.playlist);
  initCountdown(tripConfig.departureDate);
  initRevealAnimations();
  initActiveNavigation();
};

document.addEventListener("DOMContentLoaded", boot);
