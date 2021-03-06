const tabsHandlerElems = document.querySelectorAll("[data-tabs-handler]");
const tabsContentElems = document.querySelectorAll("[data-tabs-field]");

for (let btn of tabsHandlerElems) {
  btn.addEventListener("click", () => {
    tabsHandlerElems.forEach((item) =>
      item.classList.remove("design-list__item_active")
    );
    btn.classList.add("design-list__item_active");

    tabsContentElems.forEach((element) => {
      if (element.dataset.tabsField === btn.dataset.tabsHandler) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  });
}
