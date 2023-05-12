let array = [1, 2, 3, 4, 5, 6, 7];
let n = array.map(c => c * 10);
console.log(n);
let a = n.map(p => p - 10);
console.log(a);
let d = a.filter(function(b) {
    if(b > 10) {
     return true;
    }
    else {
        return false;
    }
})
console.log(d);
