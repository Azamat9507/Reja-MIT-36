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

function maslahatlarBering(a, callback) {
  if(typeof a !== "number") callback("insert number", null);
  else if (a <= 20) callback(null, list[0]);
  else if(a > 20 && a <= 30) callback(null, list[1]);
  else if(a > 30 && a <= 40) callback(null, list[2]);
  else if(a > 40 && a <= 50) callback(null, list[3]);
  else if(a > 50 && a <= 60) callback(null, list[4]);
  else {
    callback(null, list[5]);
  }
}

maslahatlarBering(50, (err, data) => {
  if(err) console.log("ERROR:", err);
  console.log("javob", data);
});