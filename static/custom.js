window.onload = function () {
  // List of sidebar page names where we need a 🔥 emoji
  const pageList = [];
  const referenceList = [
    // For v2.2 Release
    "API Reference",
    "Token API",
    "Get Token PnL",
    "Wallet API",
    "Get Wallet PnL",
  ];

  const paramList = [];

  // Function to update a link with an emoji
  function updatePageLink(link) {
    if (
      pageList.includes(link.textContent) &&
      link.href.includes("web3-data-api/evm") &&
      !link.innerHTML.includes("🔥")
    ) {
      link.innerHTML += " 🔥";
    }
  }
  function updateRefLink(link) {
    if (
      referenceList.includes(link.textContent) &&
      link.href.includes("web3-data-api/evm") &&
      !link.innerHTML.includes("🔥") &&
      link.href.includes("reference")
    ) {
      link.innerHTML += " 🔥";
    }
  }
  function updateParam(link) {
    if (
      paramList.includes(link.textContent) &&
      link.href.includes("web3-data-api/evm") &&
      !link.innerHTML.includes("🔥")
    ) {
      link.innerHTML = "🔥 " + link.innerHTML;
    }
  }

  // MutationObserver to watch for new sidebar items
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        // for page links
        const menuLinks = document.querySelectorAll(".menu__link");
        menuLinks.forEach(updatePageLink);
        menuLinks.forEach(updateRefLink);
        // for params
        const paramLinks = document.querySelectorAll(
          ".paramName_src-components-ApiReference-styles-module, .paramName_Mm0f"
        );
        paramLinks.forEach(updateParam);
      }
    });
  });

  const initialMenuLinks = document.querySelectorAll(".menu__link");
  initialMenuLinks.forEach(updatePageLink);
  initialMenuLinks.forEach(updateRefLink);

  const initialParamLinks = document.querySelectorAll(
    ".paramName_src-components-ApiReference-styles-module, .paramName_Mm0f"
  );
  initialParamLinks.forEach(updateParam);

  observer.observe(document.body, { childList: true, subtree: true });
};
