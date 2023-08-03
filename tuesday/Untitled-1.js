function Factorialize (n){
    let sum = n;
    for ( let i = n-1 ; i>0 ; i--){
        sum = sum*i  ;
    }
   return sum ;
}
console.log(Factorialize(5));

var isPalindrome = function(str) {
    var strchck = str.toLowerCase().replace(/\s/g, '');
    for (var i = 0; i < strchck.length / 2; i++) {
      if (strchck[i] !== strchck[strchck.length - i - 1]) {
        return false;
      }
    }
    return true;
  };
  
  var output = isPalindrome("nazan");
  console.log(output); 