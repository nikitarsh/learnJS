//Изменение элементов объектов в JavaScript, возвели в квадрат каждый элемент объекта

"use strict"; 
let obj = {x: 1, y: 2, z: 3};
obj.x = Math.pow(1, 2);
obj.y = Math.pow(2, 2);
obj.z = Math.pow(3, 2);
console.log(obj);