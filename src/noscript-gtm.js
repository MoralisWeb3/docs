if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    var noscript = document.createElement("noscript");
    var iframe = document.createElement("iframe");

    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-WD3V6LS6";
    iframe.height = "0";
    iframe.width = "0";
    iframe.style.display = "none";
    iframe.style.visibility = "hidden";

    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  });
}
