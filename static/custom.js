window.onload = function () {
  // List of sidebar page names where we need a 🔥 emoji
  const pageList = [
    // For Market data API
    "Market Data API",
    // For Wallert API tutorial and reference
    "Wallet API",
    "API Reference",
    "Chain Activity",
    "Get Wallet Details",
    "Wallet Details",
    "Get chain activity by wallet",
  ];

  const paramList = [];

  // Function to update a link with an emoji
  function updateLink(link) {
    if (pageList.includes(link.textContent) && !link.innerHTML.includes("🔥")) {
      link.innerHTML += " 🔥";
    }
  }
  function updateParam(link) {
    if (
      paramList.includes(link.textContent) &&
      !link.innerHTML.includes("🔥")
    ) {
      link.innerHTML = "🔥 " + link.innerHTML;
    }
  }

  // MutationObserver to watch for new sidebar items
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        // for links
        const menuLinks = document.querySelectorAll(".menu__link");
        menuLinks.forEach(updateLink);
        // for params
        const paramLinks = document.querySelectorAll(
          ".paramName_src-components-ApiReference-styles-module, .paramName_Mm0f"
        );
        paramLinks.forEach(updateParam);
      }
    });
  });

  const initialMenuLinks = document.querySelectorAll(".menu__link");
  initialMenuLinks.forEach(updateLink);

  const initialParamLinks = document.querySelectorAll(
    ".paramName_src-components-ApiReference-styles-module, .paramName_Mm0f"
  );
  initialParamLinks.forEach(updateParam);

  observer.observe(document.body, { childList: true, subtree: true });
};
