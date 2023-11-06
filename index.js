// 1

let nums = [100, 150, 200, 250];
let numsResult = [];

console.log(nums)
for(let i = 0; i<nums.length; i++){
    let rub = nums[i] + " р";
    numsResult.push(rub);
}

console.log(numsResult)

// 2 as objects

let peopleObj = [ 
    {name: "alex", age: 32}, 
    {name: "tomas", age: 17},
    {name: "olga", age: 14},
    {name: "andre", age: 24}
    ];
let isFilterNeeded = (man) => {
        if( man.age >= 18){
        return true;
    } else {
        return false;
    }
}
let filteredObj = peopleObj.filter(isFilterNeeded);

console.log(filteredObj);

// 2 as arrays

let people = [ ["alex", 32], ["tomas", 17], ["olga", 14], ["andre", 24] ];
let filtered = people.filter((man) => {
    if(man[1] > 18){
        return man[1];
    }
});
console.log(filtered)

// 3

let goods = [ 
    { title: "пицца", price: 200 },
    { title: "баранина", price: 300 },
    { title: "креветки", price: 400 }
]

const sumPrices = goods.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
}, 0);
// }
console.log(sumPrices);