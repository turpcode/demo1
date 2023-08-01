// 1. Print 1 - 135
const number = [];

for (let a = 1; a <= 135; a++) {
  number.push(a);
}
console.log(number);
console.log('')

// 2. Print Odd Numbers 1 - 135
const number2 = [];

for (let b = 1; b <= 135; b++) {
   if(b%2 !==0) {
      number2.push(b);
   }
  
}

console.log(number2);
console.log('')

// 3. Sum of Printed Numbers
let d=0;
for (let c=0; c<=135; c++) {
   d=d+c;
   console.log(`Number is ${c} Sum:${d}`);
}
console.log('')

// 4. Print the elements of an array
const number4=[];
const e=[1,4,2,12];
for(let f=0; f<e.length; f++){
let g= e[f];
number4.push(g)
}
console.log(number4)
console.log('')

// 5. Find Max
const h=[1,40,2,12];
let maxNumber=[0];
for(let i=0; i<h.length; i++){
   if (h[i]>maxNumber){
      maxNumber=h[i];
   }
}
console.log(maxNumber)
console.log('')

//6. Get Average
const j=[1,2,3];
let l=(0);
for(let k=0; k<j.length; k++){
    l=l+j[k];
}
let avarage=(l/j.length);
console.log(avarage)
console.log('')

// 7. Eliminate the Negatives
const m=[2,-1,4,-3];
const newnumber7=[];
let o=0;
for(let n=0; n<m.length; n++){
   if (m[n]<0){
     let o=0;
     newnumber7.push(o)
   }else{
     let o=m[n];
     newnumber7.push(o)
   }
}
console.log(newnumber7)
console.log('')

// 8. Number to String
const p=[2,-1,4,-3];
const newnumber8=[];
let r='';
let t=0;
for(let s=0; s<p.length; s++){
   if (p[s]<0){
     let r='N/A';
     newnumber8.push(r)
   }else{
     let t=p[s];
     newnumber8.push(t)
   }
}
console.log(newnumber8)

