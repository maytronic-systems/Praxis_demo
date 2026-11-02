document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("anamnesis-editor");
  const frame = document.getElementById("anamnesis-frame");
  const title = document.getElementById("anamnesis-editor-title");
  const openLink = document.getElementById("anamnesis-open");
  const downloadLink = document.getElementById("anamnesis-download");
  const close = document.getElementById("anamnesis-close");
  const isSmallScreen = window.matchMedia("(max-width: 767px)");
  const allowed = new Set([
    "assets/anamnese/Anamnese_Erwachsene_Komplett_Julia_Widera-Krieb.pdf",
    "assets/anamnese/Anamnese_Kinder_Julia_Widera-Krieb.pdf",
    "assets/anamnese/Anamnese_Saeuglinge_Julia_Widera-Krieb.pdf"
  ]);
  document.querySelectorAll(".anamnesis-view").forEach(button => button.addEventListener("click", () => {
    const file = button.dataset.file;
    if (!allowed.has(file)) return;
    if (isSmallScreen.matches) {
      window.location.href = file;
      return;
    }
    frame.src = file;
    title.textContent = button.dataset.title || "Online ausfüllen";
    openLink.href = file;
    downloadLink.href = file;
    section.hidden = false;
    section.scrollIntoView({behavior:"smooth",block:"start"});
  }));
  close.addEventListener("click", () => {
    section.hidden = true;
    frame.removeAttribute("src");
  });
});