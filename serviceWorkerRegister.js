if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then((reg) => console.log("Service Worker kayıt edildi!", reg))
      .catch((err) => console.log("Service Worker kaydı başarısız!", err));
  });
}
