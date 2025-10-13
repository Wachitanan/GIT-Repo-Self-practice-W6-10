// higher order function
function multiplier(factor) {
  return function(x) {
    return x * factor
  }
}

const double = multiplier(2)//กำหนดตัวคูณ
console.log(double(5)) //ใส่่เลขที่ต้องการคูณ

const numbers = [1,2,3,4,5,6]
const squares = numbers.map(n => n * n)
console.log(squares) //เอาตัวมันเองคูณกัน

function repeat(n,action){
  for(i=0;i<n;i++){
    action(i)
  }
}
repeat(3, console.log) // ใส่ทำซ้ำ แล้วก็ให้มัน log ออกมา

//recap จากสิ่งที่เรียน nested func
let a = 1;
function doSomething(x) {
  let a = 10
  let greet = "Hello"
  function echo() {
    let a = 555
    let b = "Bob" //function ที่อยู่ในสุดเข้าถึงตัวแปรมันเองและทุกตัวที่อยู่ global scope แต่จะไม่เห็นตัวแแปรที่อยู่ชั้นในกว่า
    console.log(a,b)
  }
  echo()
  return `${greet} , ${x}, a=${a}`
}
console.log(doSomething("guest"))

//Practice-G1 (1)
function idGenerator(){
  let id = 0
  return function() {
    id++
    return id
  }
}
const idGen = idGenerator()
console.log(idGen())
console.log(idGen())
console.log(idGen())

//(2)
function outerFunction(a) {
  return function(b) {
    return a + b
  }
}
const addFive = outerFunction(5)
console.log(addFive(3));