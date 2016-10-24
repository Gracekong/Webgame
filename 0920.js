let arr = [1,2,3,4,5]
let obj = {
  'x':1,
  'y':2
} //연관배열(map, table), Dictionary

let str="abc"

console.log(arr)
console.log(obj)
console.log(str)
//
// for (var variable in arr) {
//   if (arr.hasOwnProperty(variable)) {
//     console.log(variable);
//     obj[variable]
//   }
// }

for (var variable in arr) {
  if (obj.hasOwnProperty(variable)) {
    console.log(variable);
  }
}

// for (variable of arr) {
//   console.log(variable);
// }
//
// function varTest()
// {
//     var x = 1
//     if(true){
//       var x = 2
//       console.log(x)
//     }
//     console.log(x);
// }
//
// function letTest()
// {
//     let x = 1
//     if(true){
//       let x = 2
//       console.log(x)
//     }
//     console.log(x);
// }
//
// varTest()
// letTest()
