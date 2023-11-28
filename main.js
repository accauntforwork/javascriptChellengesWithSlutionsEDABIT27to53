"use strict";

//global execution context;
//hoisting -->o'zgaruvchi va funksiyalarni tepaga olib chiqilishi

let car = {
  doors: 4,
  maxSpeed: 180,
  color: "Black",
  price: 50000,
  model: "id.4",
};
car.color = "white";
console.log(car); //{doors: 4,maxSpeed: 180,color: 'white',price: 50000,model: 'id.4'}
console.log(car.color); //white
console.log(car["maxSpeed"]); //180

let obj1 = {
  color: "white",
};
let obj2 = obj1;
obj2.color = "black";

console.log(obj1.color, obj2.color); //black black

let user = {
  firstName: "Muhammadqodir",
  lastName: "Baxtiyorov",
  age: 21,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`; //this ota obyektni qaytaradi
  },
};
const fullName = user.getFullName();
console.log(fullName);
