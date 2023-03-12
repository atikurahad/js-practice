
// function greeting(firstName) {
//    function store(secondName) {
//     console.log(`hi ,${firstName} ${secondName}`)
//    }
//    return store;
// }
// const fullName = greeting("Abdullah")
// fullName("jaber")


// function practice1 (...rest){
//   console.log('Arguents',arguments, arguments[1]+ arguments[2]);
// }
// practice1(1,2,5)
// // video 9

// function timeNow() {
//   console.log(Date.now());
// }
// timeNow();


const calculation =(num, fn)=>{
let result = 0;
for (let index = 0; index < num; index++) {
const temp = fn(index)
result = result + temp;
}
return result;
}

const sum = calculation  (10,(x)=>{
return x+x;
})
console.log(sum)
 const multiply = calculation(5 ,(m)=>{
  return m*m;
 })
 console.log(multiply)

const handleClick =  ()=>{
  console.log(" Clicked");
}

function myFunction() {
  let a = 4;
  return a * a;
}
