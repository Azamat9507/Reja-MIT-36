// console.log("Jak Ma maslahatlari");

// // Yosh oralig‘iga qarab maslahatlar saqlanadigan massiv (array)
// const list = [
//     "yaxshi talaba boling",                // 0 - 20 yosh
//     "togri boshliq tanlang va koproq hato qiling", // 20 - 30 yosh
//     "ozingizga ishlashingizni boshlang",   // 30 - 40 yosh
//     "siz kuchli bolgan narslarni qiling",  // 40 - 50 yosh
//     "yoshlarga investitsiya qiling",       // 50 - 60 yosh
//     "endi dam oling, foydasi yoq",         // 60+
// ];

// function maslahatlarBering(a, callback) {
//   if(typeof a !== "number") callback("insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if(a > 20 && a <= 30) callback(null, list[1]);
//   else if(a > 30 && a <= 40) callback(null, list[2]);
//   else if(a > 40 && a <= 50) callback(null, list[3]);
//   else if(a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }

// maslahatlarBering(50, (err, data) => {
//   if(err) console.log("ERROR:", err);
//   console.log("javob", data);
// });

// Task B 

// function countDigits(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") {
//       count++;
//     }
//   }

//   return count;
// }


// console.log(countDigits("ad2a54y79wet0sfgb9")); 

// Task - C

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  _getTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }

  qoldiq() {
    console.log(
      `Hozir ${this._getTime()}da ${this.non} ta non, ${this.lagmon} ta lag'mon va ${this.cola} ta cola mavjud`
    );
  }

  sotish(mahsulot, soni) {
    this[mahsulot] -= soni;
    console.log(`${this._getTime()}da ${soni} ta ${mahsulot} sotildi`);
  }

  qabul(mahsulot, soni) {
    this[mahsulot] += soni;
    console.log(`${this._getTime()}da ${soni} ta ${mahsulot} qabul qilindi`);
  }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();
