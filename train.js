console.log("Jak Ma maslahatlari");

// Yosh oralig‘iga qarab maslahatlar saqlanadigan massiv (array)
const list = [
    "yaxshi talaba boling",                // 0 - 20 yosh
    "togri boshliq tanlang va koproq hato qiling", // 20 - 30 yosh
    "ozingizga ishlashingizni boshlang",   // 30 - 40 yosh
    "siz kuchli bolgan narslarni qiling",  // 40 - 50 yosh
    "yoshlarga investitsiya qiling",       // 50 - 60 yosh
    "endi dam oling, foydasi yoq",         // 60+
];

// // Asosiy funksiya creat qilamiz
// // a -> yosh
// // callback -> natijani qaytarish uchun funksiya (err, data)
// function maslahatBering(a, callback) {

//     // Agar a number bo‘lmasa — xato qaytaramiz
//     if (typeof a !== 'number') {
//         callback("insert a number", null);
//     }

//     // 20 yoshgacha bo‘lsa
//     else if (a <= 20) {
//         callback(null, list[0]);
//     }

//     // 20–30 oralig‘i
//     else if (a > 20 && a <= 30) {
//         callback(null, list[1]);
//     }

//     // 30–40 oralig‘i
//     else if (a > 30 && a <= 40) {
//         callback(null, list[2]);
//     }

//     // 40–50 oralig‘i
//     else if (a > 40 && a <= 50) {
//         callback(null, list[3]);
//     }

//     // 50–60 oralig‘i
//     else if (a > 50 && a <= 60) {
//         callback(null, list[4]);
//     }

//     // 60 yoshdan katta bo‘lsa
//     else {
//         // 3 soniya kutib keyin javob qaytariladi (ASYNC holat)
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 3000);
//     }
// }

// // Bu sinxron ishlaydi, darrov chiqadi
// console.log("passed here 0");

// // Funksiyani chaqiramiz
// // 65 yosh yuboryapmiz
// maslahatBering(65, (err, data) => {

//     // Agar xato bo‘lsa
//     if (err) {
//         console.log("ERROR", err);
//     }
//     // Agar xato bo‘lmasa
//     else {
//         console.log("javob:", data);
//     }
// });

// // Bu ham darrov chiqadi (setTimeoutni kutmaydi)
// console.log("passed here 1");



// ASYNC function (doim Promise qaytaradi)
// async function maslahatBering(a) {
//   if (typeof a !== "number") {
//     throw new Error("insert a number");
//   }

//   if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];

//   // 60+ yosh uchun kechikib javob
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(list[5]);
//     }, 3000);
//   });
// }

// console.log("passed here 0");

// // THEN / CATCH bilan ishlatish
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err.message);
//   });

// console.log("passed here 1");

// setTimeout(function () {
//   return list[5];
// }, 5000);

//CALLBACK FUNCTIONS

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {

//         return list[5];
//         // setTimeout(function() {
//         // callback(null, list[5]);
//         //     }, 3000);
//     }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR", err);
//     else {
//         console.log("javob:",data);
//     }
// });

// console.log("passed here 1");

// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// async function maslahatBering(a, callback) {
//     if(typeof a !== 'number') throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {

//         return list[5];
//         // setTimeout(function() {
//         // callback(null, list[5]);
//         //     }, 3000);
//     }
// }
// //then catch
// console.log("passed here 0");

// maslahatBering(30)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

// setIntervall uchun yozilgan mantiq

//CALLBACK FUNCTIONS
function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("Insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    const timer = setInterval(function () {
      callback(null, list[5]);
      clearInterval(timer); // muhim: intervalni to‘xtatadi
    }, 1000);
  }
}

console.log("passed here 0");

maslahatBering(30, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log(data);
  }
});

console.log("passed here 1");