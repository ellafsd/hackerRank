
let counterApple = 0
for (const apple of apples) {
    if (s <= a + apple && a + apple <= t) {
   counterApple++;
}} 
console.log(counterApple);

let counterOrange = 0
for (const orange of oranges) {
    if (s <= b + orange && b + orange <= t) {
   counterOrange++;
}} 
console.log(counterOrange);