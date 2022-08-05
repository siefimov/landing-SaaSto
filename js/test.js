/*
let fruits = ["apple", "mango", "avocado"];

//! +=
//? += оператор Додавання з Присовєнням
// бере правий "операнд", додає його до "змінної"
// результат додавання присвоюється змінній
function rizer() {
   console.log((fruits += ",fruits"));
   console.log(typeof fruits);
}

rizer();

let d = 5;
d += 7;
console.log(d);
*/

// TODO методи масивів
//! ДОДАВАННЯ, ВИДАЛНЕНЯ
let autos = ["BMW", "Mazda", "Ford"];

//1. push - додає елементи з кінця
autos.push("lemon");
console.log(autos);

//2. unshift - додає елементи в по4аток
autos.unshift("Toyota");
console.log(autos);

//3. pop - видалає елементи з кінця масиву
autos.pop();
console.log(autos);

//4. shift - видаляє елементи з по4атку масиву
autos.shift();
console.log(autos);

//5. delete obj.key – це видаляє значення за ключем key
delete autos[2];
console.log(autos);

autos.push("Dodge", "Nissan");

//6. splice: додавати, видаляти і замінювати елементи.
//? splice(start, deleteCount, item1, item2, itemN)
// видалення
autos.splice(2, 1); // з індексу 2 видалимо 1 елемент
console.log(autos);

let arr = ["I", "study", "JavaScript", "right", "now"];
//7. видалимо 3 перших елементи і замінимо їх іншими
arr.splice(0, 3, "Let's", "dance");
console.log(arr); // отримаєм ["Let's", "dance", "right", "now"]

//8. slice - вирізає елементи масиву і повертає новий масив з вирізаними елементами
let arr1 = arr.slice(1, 3);
console.log(arr1);

//9. concat() - створює новий масив
let arrCon = [1, 2, 3];
console.log(arrCon.concat([4, 5], [6, 7]));
let men = ["Mike", "Jhon"];
let women = ["Sahra", "Jessica"];
let menWomen = men.concat(women);
console.log(menWomen);

// ! ПЕРЕБІР
//10. forEach()
let country = ["Ukraine", "Italy", "Spain", "Poland"];
country.forEach(function (elem, index, array) {
   console.log(`${elem} has position ${index} in array ${array}`);
});

// ! ПОШУК В МАСИВІ
//11. indexOf(item, from) - повертає індекс
let price = [100, 200, 100, 300];
console.log(`Price 200 is on position ${price.indexOf(200) + 1}`);

//12.  lastIndexOf
console.log(price.lastIndexOf(100)); //те ж саме, але шукає справа наліво.

//13. includes
// arr.includes(item, from) – шукає item, починаючи з індексу from, і повертає true, якщо пошук успішний.

//14. find()
// arr.find(function(item, index, array) {
// якщо true - повертається поточний елемент і перебір закінчується
// якщо всі ітерації виявилися помилковими, повертається undefined
//  });

let users = [
   { id: 1, name: "John" },
   { id: 2, name: "Pete" },
   { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);
console.log(user);
console.log(`14. ${user.name}`);

//15. findIndex – по суті, те ж саме, але повертає індекс, на якому був знайдений елемент, а не сам елемент, і -1, якщо нічого не знайдено.

// 16. filter(fn)
let results = arr.filter(function (item, index, array) {
   // якщо true - елемент додається до результату, і перебір триває
   // повертається порожній масив в разі, якщо нічого не знайдено
});

let students = [
   { id: 1, name: "John" },
   { id: 2, name: "Pete" },
   { id: 3, name: "Mary" },
];

// повертає масив перших двох користувачів
let someStudents = users.filter((item) => item.id < 3);
console.log(someStudents);
console.log(someStudents.length); // 2

let cats = ["Vasya", "Murka", "Mak"];
console.log(cats[1].length);

let longCatName = cats.filter((item) => {
   return item.length > 3;
});

console.log(longCatName);

//! Перетворення масиву
// 17. map()

// 18. sort()
let arrSort = [1, 2, 15];
arrSort.sort((a, b) => a - b);
console.log(arrSort);

let testSort = ["mars", "terser", "opicantrus", "lok", "wick"];
testSort.sort();
// ['lok', 'mars', 'opicantrus', 'terser', 'wick'] - сортує по алфавіту
let testSort2 = ["mars", "terser", "opicantrus", "lok", "wick"];
testSort2.sort((a, b) => {
   return a.length - b.length;
});
// ['lok', 'mars', 'wick', 'terser', 'opicantrus'] - сортує по довжині слова

// split() - перетворює "строку" на масив, повертає новий масив
let test = "I am a strong man";
let split1 = test.split();
let split2 = test.split(" ");
console.log(split1);
console.log(split2);
console.log(typeof split2);

let str = "Serhii Yefimov";
let strReverse = str.split("").reverse().join("");
console.log(strReverse);

let elem = "f-67150-12".split("-").slice(1, 2);
console.log(elem);
console.log(elem[1]);

// =================================
//todo    ЗАВДАННЯ

// 1. Переведіть текст виду border-left-width в borderLeftWidth
function camelize(str) {
   return str
      .split("-")
      .map((e, i) => (i == 0 ? e : e[0].toUpperCase() + e.slice(1)))
      .join("");
}

camelize("test-new");

function camelize2(str) {
   return str
      .split("-") // розбиваємо 'my-long-word' на масив елементів ['my', 'long', 'word']
      .map(
         // робимо першу літеру велику для всіх елементів масиву, крім першого
         // конвертуємо ['my', 'long', 'word'] в ['my', 'Long', 'Word']
         (word, index) =>
            index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(""); // зʼєднуємо ['my', 'Long', 'Word'] в 'myLongWord'
}

let res = camelize2("font-size");
console.log(res);

// 2. Фільтрація за діапазоном
// Функція повинна повертати новий масив і не змінювати вихідний.
function filterRange(arr, a, b) {
   return arr.filter((elem) => elem >= a && elem <= b);
}

let arrNum = [1, 4, 7, 2, 9, 5];

let resFiltered = filterRange(arrNum, 2, 7);
console.log(resFiltered);

// 3. Фільтрація за діапазоном "на місці"
// Функція повинна **мінювати поточний масив** і **нічого не повертати**.
function filterRangeInPlace(arr, a, b) {
   for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < a || val > b) {
         arr.splice(i, 1);
         i--;
         console.log(i);
      }
   }
}

let arr2 = [2, 9, 3, 7, 4, 6, 1, 5];
filterRangeInPlace(arr2, 4, 8);
console.log(arr2);

// 4. сортувати за спаданням
let arr4 = [5, 2, 1, -10, 8];
console.log(arr4.sort((a, b) => a - b).reverse());
//  або
arr4.sort((a, b) => b - a);

// 5. Скопіювати і впорядкувати масив
let arr5 = ["Java", "Html", "Mokka"];
let copiedArr5 = arr5.slice().sort();

// 6. Трансформувати в масив імен
let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users2 = [ivan, petro, mariya];

let names = users2.map((elem) => elem.name);
console.log(names);

// 7. Трансформувати в обʼєкти
let ivan1 = { name: "Іван", surname: "Іванко", id: 1 };
let petro1 = { name: "Петро", surname: "Сонце", id: 2 };
let mariya1 = { name: "Марія", surname: "Мрійко", id: 3 };
let vasyl1 = { name: "Василь", surname: "Когут", id: 4 };

let users3 = [ivan1, petro1, mariya1, vasyl1];

let usersMapped = users3.map((user) => ({
   fullName: `${user.name} ${user.surname}`,
   id: user.id,
}));

console.log(usersMapped);
//
// let id = document.querySelector(".id");
// let fullName = document.querySelector(".fullname");

// usersMapped.forEach((elem) => {
//    let idDiv = document.createElement("div");
//    idDiv.insertAdjacentText("beforeend", elem.id);
//    id.insertAdjacentElement("beforeend", idDiv);

//    let fullNameDiv = document.createElement("div");
//    fullNameDiv.insertAdjacentText("beforeend", elem.fullName);
//    fullName.insertAdjacentElement("beforeend", fullNameDiv);
// });

// 8. Залишити унікальні елементи масиву
function unique(arr) {
   let arrUnique = [];

   for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);

      if (!arrUnique.includes(arr[i])) {
         arrUnique.push(arr[i]);
      }
   }
   return arrUnique;
}

let strings = [
   "Привіт",
   "Світ",
   "Привіт",
   "Світ",
   "Привіт",
   "Привіт",
   "Світ",
   "Світ",
   ":-O",
];

let resUnique = unique(strings);
console.log(resUnique);

// 9. reduce
// Порахувати загальну вартість продуктів із Корзини
let shoppingCart = [
   {
      product: "phone",
      qty: 1,
      price: 500,
   },
   {
      product: "Screen Protector",
      qty: 1,
      price: 10,
   },
   {
      product: "Memory Card",
      qty: 2,
      price: 20,
   },
];

let total = shoppingCart.reduce((previousValue, currentValue) => {
   return previousValue + currentValue.qty * currentValue.price;
}, 0);
// спо4атку previousValue = 0
console.log(total);

// =1=1=1=1=1=1=1=1=1
let menu = {
   width: 200,
   height: 300,
   title: "Моє меню",
};
function multiplayNumeric(obj) {
   for (let key in obj) {
      if (typeof obj[key] == "number") {
         obj[key] *= 2;
      }
   }
}
multiplayNumeric(menu);

console.log(menu);

let ladder = {
   step: 0,
   up() {
      this.step++;
      return this;
   },
   down() {
      this.step--;
      return this;
   },
   showStep() {
      console.log(this.step);
      return this;
   },
};

ladder.up().up().down().showStep().down().showStep();
