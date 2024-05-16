//input: int, output: string
function fizzbuzz(number) {
    for(let i = 3; i <= number; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizz buzz', i)
        } else if (i % 5 ===0) {
            console.log("buzz", i);
        } else if (i % 3 === 0){
            console.log("fizz", i);
        } else {
            console.log(i);
        }
    }
}

console.log(fizzbuzz(100));

input: int; num output; prime
function fizzbuzz()
et a number an add up all the numbers till you reach the end


 function count(numb){
     let sum = 0

for(let i = 0; i<=numb; i++){
     sum = sum + i
 }

 return sum

 }

 console.log(count(10))

let x = 10;
let y = 5;

{
     let z = x + y;
     console.log(z)
 }

let x = 50;
 et y = 50;

 let title = x + y;
console.log(title)

 {
    var x = 1;
    {
      var x = 2;  // same variable!
      console.log(x);  // 2
   }
     console.log(x);  // 2
  }

 {
     let x = 1;
     {
       let x = 2;  // different variable
       console.log(x);  // 2
     }
   }
 let x = 5;

if (x > 0)
 	console.log('Positive!');
 else
 	console.log('Negative.');

 let x = 5;

 if (x > 0) {
 	console.log('Positive!');
 }

 x++;

{
 	console.log('Negative.');
 }

 x--;

