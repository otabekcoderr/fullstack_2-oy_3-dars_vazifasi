//palidrom son
let son = 121;
let teskariSon = son;
let sum = 0;
let count = 1
while (son > 0) {
    let oxirgi_Raqam = son % 10;    
    sum = sum * 10 + oxirgi_Raqam;    
    son = Math.floor(son / 10);
  
}

if (teskariSon === sum) {
  console.log("Palidrom");
} else {
  console.log("Palidrom emas");
}
