document.addEventListener("DOMContentLoaded", function () {
  const select_menu = document.querySelector(".filter");
  select_menu.addEventListener("change", function (e) {
    const food_type_class = e.target.value;
    const active_items = document.querySelectorAll(".item.active");
    //clear the board
    active_items.forEach(function (item) {
      item.classList.remove("active");
    });
    const food_items = document.querySelectorAll(`.item.${food_type_class}`);
    food_items.forEach(function (item) {
      item.classList.add("active");
    });
  });
});
