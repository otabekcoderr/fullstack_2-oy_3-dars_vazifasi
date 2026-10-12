// 1
// let a = 1;
// let b = 20;
// for(let i=a;i<=b;i++){
//     console.log(i);

// }

//2
// let a = 1;
// let b = 20;
// for(let i=b;i>=a;i--){
//     console.log(i);

// }

//3
// let a = 1;
// let b = 50;

// for(let i=a;i<=50;i++){
//     if(i%5==0){
//         console.log(i);

//     }
// }

//4
// let a = 1;
// let b = 30;

// for(let i=a;i<=50;i++){
//     if(i%3==0){
//         console.log(i);

//     }
// }

// ///5
// let a = 1;
// let b = 100;

// for(let i=a;i<=b;i++){
//     if(i%10==0){
//         console.log(i);

//     }
// }

///6

// let a = 1;
// let b = 20;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i;
// }
// console.log(sum);

//7
// let a = 1;
// let b = 50;
// let sum = 0;

// for(let i=a;i<=b;i++){
//     if(i%5==0){
//         sum+=i;
//     }

// }
// console.log(sum);

//8
// let a = 1;
// let b = 100;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//   if (i % 3 == 0) {
//     sum += i;
//   }
// }
// console.log(`Natija: ${sum}`);

//9
// let a = 1;
// let b = 20;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 2 == 0) {
//       sum += i;
//     }
// }
// console.log(`Natija: ${sum}`);

//10
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(`Natija: ${sum}`);

// PART 2

// 3. Sonlarni sanash
// 11. 1 dan 200 gacha nechta son 5 ga qoldiqsiz bo‘linishini aniqlang.
// 12. 1 dan 100 gacha nechta son 3 ga ham, 5 ga ham qoldiqsiz bo‘linishini aniqlang.
// 13. 1 dan 100 gacha nechta son 7 ga qoldiqsiz bo‘linishini aniqlang.
// 14. 1 dan 100 gacha juft va toq sonlar yig‘indisi orasidagi farqni toping. Ikkala yig‘indini
// alohida hisoblang, so‘ng farqini chiqaring.
// 15. 1 dan 100 gacha 3 ga bo‘linadigan va bo‘linmaydigan sonlarni sanang. Ikkala guruhni
// alohida hisoblang.

//1

// let count = 0;

// for(let i=1;i<=200;i++){
//     if(i%5==0){
//         count++;
//     }
// }

// console.log(`Natija: ${count}`);

//2

// let count = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     count++;
//   }
// }

// console.log(`Natija: ${count}`);

//3

// let count = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 7 == 0) {
//     count++;
//   }
// }
// console.log(`Natija: ${count}`);

//4

// let toq_sum = 0;
// let juft_sum = 0;
// for(let i = 1;i<=100;i++){
//     if(i%2==0){
//         juft_sum++;
//     }else{
//         toq_sum++;
//     }
// }

// console.log(`Juft sonlar yig'indisi: ${juft_sum}`);
// console.log(`Toq sonlar yig'indisi: ${toq_sum}`);

// 5

// let true_sum = 0;
// let false_sum = 0;
// for(let i =1;i<=100;i++){
//     if(i%3==0){
//         true_sum++;
//     }else{
//         false_sum++;
//     }
// }

// console.log(`3ga bo'linadigan sonlar: ${true_sum}`);
// console.log(`3ga bo'linmaydigan sonlar: ${false_sum}`);

// 4. Foydalanuvchi kiritgan son bilan ishlash
// 16. Foydalanuvchi son kiritadi. Shu sondan 1 gacha bo‘lgan barcha sonlarni kamayish
// tartibida chiqaring.
// 17. Foydalanuvchi son kiritadi. 1 dan shu songacha bo‘lgan barcha juft sonlarni chiqa
//ring.
// 18. Foydalanuvchi son kiritadi. 1 dan shu songacha bo‘lgan barcha toq sonlar yig‘indisini
// hisoblang.
// 19. Foydalanuvchi son kiritadi. Shu sonning ko‘paytirish jadvalini 1 dan 10 gacha
// chiqaring. Masalan, 5 kiritilsa, 5 × 1 = 5 dan 5 × 10 = 50 gacha

//6
// let num = +prompt("Son kiriting");

// for(let i=num;i>=1;i--){
//     console.log(i);

// }

// //7
// let num = +prompt("Son kiriting");

// for (let i = num; i >= 1; i--) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//8

// let num = +prompt("Son kiriting");

// for (let i = num; i >= 1; i--) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// let num = +prompt("Son kiriting");

// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} * ${i} = ${i * num}`);
// }

// 9

// let num = +prompt("son kiriting");
// let tub = true;

// if (num <= 1) {
//   tub = false;
// }

// for (let i = 2; i < num; i++) {
//   if (num %i === 0) {
//     tub = false;
//   }
//   break;
// }
// console.log(tub);

// if (tub !== true) {
//   console.log("Tub son emas!");
// } else {
//   console.log("Tub son!");
// }
