// let fun = "true";
// console.log("%c this"+"%c is 1" ,'background: yellow; color: red','background: green; color: blue', fun);

// fun = true;
// console.log("this is 2" , fun);



// function processData() {
//     // Local variables in the stack frame
//     let localVar1 = 10;
//     let localVar2 = "Hello";
  
//     // Creating an object in the heap
//     let obj = { name: "John", age: 30 };
  
//     // Adding an element to an array in the heap
//     let arr = [1, 2, 3];
  
//     // Function call within the stack
//     innerFunction();
//   }
  
//   function innerFunction() {
//     // This is another stack frame
//     let innerVar = "World";
//   }
  

var result ="";
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}

console.log(result);