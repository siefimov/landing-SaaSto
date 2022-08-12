// offsetHeight - показує висоту об'єкта, вклю4аю4и padding and border
// innerHeight - показує висоту вікна

const animItems = document.querySelectorAll("._anim-items");
console.log(animItems);

if (animItems.length > 0) {
   window.addEventListener("scroll", animOnScroll);

   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight; // визна4аємо висоту обєкта
         const animItemOffset = offset(animItem).top; // позиція обєкта від верха або лівого боку сторінки
         const animStart = 4; // коеф-т, що регулює момент старту анімації

         let aminItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            aminItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if (
            scrollY > animItemOffset - aminItemPoint &&
            scrollY < animItemOffset + animItemHeight
         ) {
            animItem.classList.add("_active");
         } else {
            if (!animItem.classList.contains("_anim-no-hide")) {
               animItem.classList.remove("_active");
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
         scrollTop = window.scrollY || document.scrollingElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }

   setTimeout(() => {
      animOnScroll();
   }, 300);
}

//
