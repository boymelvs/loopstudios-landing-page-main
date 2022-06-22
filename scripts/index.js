"use strict";

/* add/remove classes to make element vissible */
const addRemoveClasses = (elem) => {
   if (elem.classList.contains("show")) {
      elem.classList.remove("active");

      setTimeout(() => {
         elem.classList.remove("show");
      }, 300);

      /* add show active classes */
   } else {
      elem.classList.add("show");

      setTimeout(() => {
         elem.classList.add("active");
      }, 0.1);
   }
};

const getBurgerCheck = document.getElementById("burger_checkbox");
const getBurgerContainer = document.querySelector(".burger_container");
const getMenusContainer = document.querySelector(".menus_container");
const getLogo = document.querySelector(".logo");

getBurgerContainer.addEventListener("click", (e) => {
   addRemoveClasses(getMenusContainer);
   addRemoveClasses(getLogo);
});
