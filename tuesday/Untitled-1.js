// 1. Addition

// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.
const number1=[];
for( let a=200; a<=2700; a++){
    if(a%15!==0 && (a%3==0 || a%5==0)){
        number1.push(a)
    }
}
console.log(number1)
console.log('')

// 2. Shift the Values
// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

const b=[2,1,6,4,-7];
number2=[];
for(let c=b.length-1; c>=0; c--){
    let d=b[c];
    number2.push(d);
}
console.log(number2)
console.log('')

// 3. FizzBuzz
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

const number3=[];
for( let e=1; e<=135; e++){
    if(e%15==0){
        let f='FizzBuzz'
        number3.push(f)
    }else if(e%3==0) {
        let g='Fizz'
        number3.push(g)
    }else if(e%5==0){
        let h='Buzz'
        number3.push(h)
    }else{
        number3.push(e)
    }
}
console.log(number3)
console.log('')

// 4. Fibonacci
// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.
// 0 1 1 2 3 5 8 13 21...
const number4=[];
let j=0;
let k=1;
let m=0;
for(let i=0; i<100; i++){
    m=k;
    k=k+j;
    j=m
    number4.push(m)
}
console.log(number4)

// 5. Remove the Negative
// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
const n=[1,-2,4,1];
const number5=[];
for(p=0; p<n.length; p++){
    if(n[p]>0){
        number5.push(n[p])
    }
}
console.log(number5)
console.log('')

// 6. Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice
const r=['Man', 'I','Love','The','Matrix','Program'];
const text =[];
for(s=0; s<=r.length-1; s++){
    if(r[s]=='Program'){
        t='*******git '
        text.push(t)
    }else{
        text.push(r[s])
    }
   
}
console.log(text)