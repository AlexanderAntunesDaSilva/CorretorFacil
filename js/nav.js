/* Monta a barra lateral de navegação em qualquer página que tenha
   um elemento <div id="sidebar-mount" data-active="chave"></div> */
(function () {
  const items = [
    { key: "inicio", href: "index.html", label: "Início", num: "0" },
    { key: "imoveis", href: "imoveis.html", label: "Imóveis", num: "1" },
    { key: "agenda", href: "agenda.html", label: "Agenda de Visitas", num: "2" },
    { key: "roteiro", href: "roteiro.html", label: "Roteiro do Dia", num: "3" },
    { key: "ficha", href: "ficha.html", label: "Ficha de Visita", num: "4" },
    { key: "clientes", href: "clientes.html", label: "Histórico de Clientes", num: "5" },
  ];

  function renderSidebar() {
    const mount = document.getElementById("sidebar-mount");
    if (!mount) return;
    const active = mount.getAttribute("data-active");
    const corretor = (window.DB && DB.getCorretor()) || null;

    const navHtml = items.map(it => `
      <a href="${it.href}" class="${it.key === active ? "active" : ""}">
        <span class="num">${it.num}</span>${it.label}
      </a>
    `).join("");

    mount.innerHTML = `
      <div class="brand">CorretorFácil<span class="dot">.</span></div>
      <nav class="nav">${navHtml}</nav>
      <div class="sidebar-footer">
        ${corretor ? `<div class="user-chip">👤 ${corretor.nome}</div>` : ""}
        <div style="margin-top:10px;">MVP — Etapa 1<br>v0.1.0</div>
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", renderSidebar);
})();
