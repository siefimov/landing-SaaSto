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
