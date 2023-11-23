// 1.1
function Person(name1, age1) {
    this.name = name1,
    this.age = age1
    this.getData = function(){
        return this.name + " is " +  this.age + " y.o."
    }
}

const person1 = new Person("Rue", 22)

console.log(person1)
console.log(person1.getData())

// 1.2

function someMath(num1, num2) {
    this.num1 = num1,
    this.num2= num2
    this.isEven = function(){
        if((num1 % 2 === 0) && (num2 % 2 === 0)){
        return true;    
        } else if((num1 % 2 != 0) || (num2 % 2 != 0)){
            return false;
        }
    }
        this.sum = function(){
            let sum = num1 + num2;
            return sum;
      }
    }


const math = new someMath(3, 3)

console.log(math)
console.log(math.sum())
console.log(math.isEven())

// 2.1

function Add(x) {
  return function (y) {
    return x + y;
  };
}

let numb1 = Add(5);
let numb2 = Add(10);

console.log(numb1(2));
console.log(numb2(2)); 

// 2.2

const arr = []

for (let i = 0; i < 7; i++) {
  arr.push(() => {
    console.log(i)
  })
}

for (let j = 0; j < 7; j++) {
  arr[j]()
}

// 2.3

for (let i = 1; i <= 3; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(' прошло сек:'+i)
        }, i * 1000);
    })(i);
}