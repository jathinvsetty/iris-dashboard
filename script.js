// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("events-container");

  if (!container) {
    console.error("Events container not found!");
    return;
  }

  // Clear any existing content
  container.innerHTML = "";

  // Loop through events and create cards
  events.forEach(ev => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${ev.title}</h3>
      <p><b>Date:</b> ${ev.date}</p>
      <p><b>Venue:</b> ${ev.venue}</p>
      <p>${ev.desc}</p>
    `;

    container.appendChild(card);
  });
});
