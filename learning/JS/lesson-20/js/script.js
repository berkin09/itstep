// document.addEventListener("DOMContentLoaded", () => {
// Cookie
// let btn = document.querySelector(".button");
// btn.addEventListener("click", () => {
//   // console.log(document.cookie);
//   document.cookie = "user=Alex;max-age=3600";
//   document.cookie = "age=35;max-age=3600";
// });
// console.log(document.cookie);
// let cookie = document.cookie.split(/[=;]/);

// let index = cookie.indexOf("user");
// console.log(cookie, typeof cookie);
// console.log(`Hello ${cookie[index + 1]}`);

// let cookie = document.cookie.split("; ");
// console.log(cookie);

// if (cookie.length) {
//   let cookieCollection = [];
//   for (let i = 0; i < cookie.length; i++) {
//     let cookieCollectionItems = cookie[i].split("=");
//     console.log(cookieCollectionItems);
//     cookieCollection.push(cookieCollectionItems);
//   }
//   console.log(cookieCollection);
//   let cookieObject = Object.fromEntries(cookieCollection);
//   console.log(cookieObject);
//   console.log(`Hello ${cookieObject.user}`);
// }

// LocalStorage | sessionStorage

//   let btn = document.querySelector(".button");
//   let obj = {
//     name: "Book",
//     price: 2500,
//   };

//   btn.addEventListener("click", () => {
//     localStorage.setItem("user", "Alex");
//     localStorage.setItem("age", "35");
//     localStorage.setItem("product", JSON.stringify(obj));
//     console.log(localStorage.length);
//     let product = localStorage.getItem("product");
//     let productObj = JSON.parse(product);
//     console.log(productObj.name);
//     let clearBtn = document.querySelector(".clear");
//     clearBtn.addEventListener("click", () => {
//       localStorage.clear();
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  let textarea = document.getElementById("myTextarea");

  let txt = localStorage.getItem("txt");
  if (txt) {
    textarea.value = txt;
  }

  textarea.addEventListener("input", () => {
    localStorage.setItem("txt", textarea.value);
  });
});
