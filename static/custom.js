window.onload = function () {
  // List of sidebar page names where we need a 🔥 emoji
  const pageList = [
    "Market Data API",
    "Wallet API",
    "API Reference",
    "Chain Activity",
    "Get Wallet Details",
    "Wallet Details",
  ];

  // Function to update a link with an emoji
  function updateLink(link) {
    if (pageList.includes(link.textContent) && !link.innerHTML.includes("🔥")) {
      link.innerHTML += " 🔥";
    }
  }

  // MutationObserver to watch for new sidebar items
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        const menuLinks = document.querySelectorAll(".menu__link");
        menuLinks.forEach(updateLink);
      }
    });
  });

  const initialMenuLinks = document.querySelectorAll(".menu__link");
  initialMenuLinks.forEach(updateLink);

  observer.observe(document.body, { childList: true, subtree: true });
};
