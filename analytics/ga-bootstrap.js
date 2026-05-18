// Google Analytics bootstrap.
// 测量 ID 只维护这一处；`app/index.html` 和 `website/index.html`
// 只负责引入本文件，避免以后重构入口时把整段埋点代码改丢。
(function bootstrapGoogleAnalytics() {
  var measurementId = "G-CRMTZ5QYV3";

  if (!measurementId || typeof document === "undefined") {
    return;
  }

  if (typeof window !== "undefined" && window.gtag) {
    return;
  }

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
})();
