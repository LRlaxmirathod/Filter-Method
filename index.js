//Using filter method find odd and aven number

let arr= [1,2,3,4,5,6,7,8,9,10]
let even = arr.filter((val)=>{
    return val % 2 === 0;

})
console.log(even)

//using filter method even number

let array = [1,2,3,4,5,6,7,8,9,10]
let odd = array.filter((val)=>{
    return val % 2 !== 0;
})
console.log(odd)

//using filter method find max number

let arrr= [1,2 , 3,4,5,6,7,8,9,10]
let max = arrr.filter((val)=>{
    return val > 3
})

console.log(max)

//using filter method find min number

let arrr1= [1,2 , 3,4,5,6,7,8,9,10]
let min = arrr.filter((val)=>{
    return val < 3
})

console.log(min)

