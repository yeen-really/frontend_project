// 1
let nums: number[] = [100, 150, 200, 250];
let numsResult : string[] = [];

console.log(nums)
for(let i = 0; i<nums.length; i++){
    let str: string = ' р'
    let numberAsString: string = String(nums[i]);
    let rub= numberAsString + " р";
    numsResult.push(rub);
}

console.log(numsResult)

// 2

interface TGoods {
    price: number;
    title: string;
  }

let goods: TGoods[] = [ 
    { title: "пицца", price: 200 },
    { title: "баранина", price: 300 },
    { title: "креветки", price: 400 }
]

const sumPrices = goods.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
}, 0);

console.log(sumPrices);

// 3
function Person(this: any, name1:string, age1:number) {
    this.name = name1,
    this.age = age1
    this.getData = function(){
        return this.name + " is " +  this.age + " y.o."
    }
}

const person1 = new (Person as any)("Rue", 22)

console.log(person1)
console.log(person1.getData())
export {};

// 4
function someMath(this: any, num1:number, num2:number) {
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


const math = new (someMath as any)(3, 3)

console.log(math)
console.log(math.sum())
console.log(math.isEven())

// 5
function Add(x:number) {
    return function (y:number) {
      return x + y;
    };
  }
  
  let numb1 = Add(5);
  let numb2 = Add(10);
  
  console.log(numb1(2));
  console.log(numb2(2)); 

//   6

const arr:any = []

for (let i = 0; i < 7; i++) {
  arr.push(() => {
    console.log(i)
  })
}

for (let j = 0; j < 7; j++) {
  arr[j]()
}

// 7

for (let i = 1; i <= 3; i++) {
    (function (i:number) {
        setTimeout(function () {
            console.log(' прошло сек:'+i)
        }, i * 1000);
    })(i);
}