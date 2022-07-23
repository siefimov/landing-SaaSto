let bodyWidth = document.querySelector("body").offsetWidth;
let bodyHeight = document.querySelector("body").offsetHeight;
console.log(bodyWidth);
console.log(bodyHeight);

// Block pricing

const switchBox = document.querySelector(".switch__input");

switchBox.addEventListener("click", () => {
   if (switchBox.checked) {
      document
         .querySelector(".filter-options__premium")
         .classList.add("active");
      document
         .querySelector(".filter-options__free")
         .classList.remove("active");
   } else {
      document.querySelector(".filter-options__free").classList.add("active");
      document
         .querySelector(".filter-options__premium")
         .classList.remove("active");
   }
   console.log(switchBox.checked);
});

// Header burgerdqs
const burger = document.querySelector(".header__burger");

burger.addEventListener("click", () => {
   document.querySelector(".header__top-auth").classList.toggle("actived");
   document.querySelector(".header__top-nav").classList.toggle("actived");
});

// Clients - slider
const navItem = document.querySelectorAll(".content-navigator__item");

navItem.forEach((elem) => {
   elem.addEventListener("click", () => {
      let itemActive = document.querySelector(".item-active");
      itemActive.classList.remove("item-active");
      elem.classList.toggle("item-active");

      // let wrapperNone = document.querySelector(".bottom-row__wrapper.none");
      // wrapperNone.classList.remove('none');

   });
});
