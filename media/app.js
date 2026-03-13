(function () {
  const vscode = acquireVsCodeApi();
  const container = document.getElementById("commands-container");
  const searchInput = document.getElementById("search");
  const tabs = document.getElementById("tabs");
  const toast = document.getElementById("toast");

  let activeCategory = "all";

  function renderCommands(filter = "") {
    container.innerHTML = "";
    const keyword = filter.toLowerCase();

    COMMANDS.forEach((group) => {
      if (activeCategory !== "all" && group.category !== activeCategory) return;

      const matchingItems = group.items.filter((item) => {
        if (!keyword) return true;
        return (
          item.command.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword) ||
          item.example.toLowerCase().includes(keyword)
        );
      });

      if (matchingItems.length === 0) return;

      const section = document.createElement("section");
      section.className = "command-section";
      section.style.setProperty("--section-color", group.color);
      section.innerHTML = `
        <div class="section-header">
          <span class="section-emoji">${group.emoji}</span>
          <div>
            <h2 class="section-title">${group.title}</h2>
            <p class="section-desc">${group.description}</p>
          </div>
        </div>
      `;

      const grid = document.createElement("div");
      grid.className = "card-grid";

      matchingItems.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${i * 0.05}s`;
        card.innerHTML = `
          <div class="card-top">
            <code class="command-text">${escapeHtml(item.command)}</code>
            <button class="send-btn" aria-label="ターミナルに送信" data-command="${escapeAttr(item.command)}">
              <span class="send-label">RUN &#9654;</span>
            </button>
          </div>
          <p class="card-desc">${escapeHtml(item.description)}</p>
          <p class="card-example">${escapeHtml(item.example)}</p>
        `;
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });

    if (container.children.length === 0) {
      container.innerHTML =
        '<p class="no-results">&#128517; 見つかりませんでした</p>';
    }
  }

  function sendToTerminal(command) {
    vscode.postMessage({ type: "sendToTerminal", command: command });
  }

  function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1500);
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  // Click: send to terminal
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".send-btn");
    if (btn) {
      btn.classList.add("sent");
      btn.querySelector(".send-label").textContent = "SENT!";
      sendToTerminal(btn.dataset.command);
      showToast();
      setTimeout(() => {
        btn.classList.remove("sent");
        btn.querySelector(".send-label").textContent = "RUN \u25B6";
      }, 1200);
    }
  });

  // Search
  searchInput.addEventListener("input", (e) => {
    renderCommands(e.target.value);
  });

  // Tab click
  tabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeCategory = tab.dataset.category;
    renderCommands(searchInput.value);
  });

  renderCommands();
})();
