(function () {
  const counterId = 111993984;

  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (let j = 0; j < document.scripts.length; j += 1) {
      if (document.scripts[j].src === r) return;
    }
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = true;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=" + counterId, "ym");

  window.ym(counterId, "init", {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: "dataLayer",
    accurateTrackBounce: true,
    trackLinks: true
  });

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a");
    if (!link) return;
    if (link.classList.contains("partner") || link.href.includes("advt.pro")) {
      window.ym(counterId, "reachGoal", "policy_click");
    }
  });

  function addMetricsNotice() {
    try {
      if (localStorage.getItem("avtopolisMetricsNotice") === "seen") return;
    } catch (error) {
      // The notice still works when local storage is unavailable.
    }

    const notice = document.createElement("div");
    notice.className = "metrikaNotice";
    notice.setAttribute("role", "status");
    notice.innerHTML = '<span>На сайте работает Яндекс Метрика: она собирает технические данные о посещении для статистики. <a href="https://yandex.ru/legal/confidential/" target="_blank" rel="noopener">Политика Яндекса</a></span><button type="button">Понятно</button>';
    document.body.appendChild(notice);

    notice.querySelector("button").addEventListener("click", function () {
      try {
        localStorage.setItem("avtopolisMetricsNotice", "seen");
      } catch (error) {
        // Closing the notice must not depend on local storage.
      }
      notice.remove();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addMetricsNotice);
  } else {
    addMetricsNotice();
  }
})();
