function arr(a) {
    
var arr = new Array();
for (i = 1; i <= a; i++) {
    arr.push(i);
    console.log(arr);
}
return arr;
}

var a = 'chơi';
var b = 'chơi nữa';
var c = 'chơi mãi';
function soThich() {
    var arr = new Array();
    arr.push(a,b,c);
    console.log(arr);
    return arr;
}

function getLessThan(n) {
    var arr = new Array();
    for (var i = 0; i < n; i++) {
        arr.push(i);
        console.log(arr);
    }
    return arr;
}

function getOddLessThan(n) {
    var arr = new Array();
    for(i = 0; i < n; i++) {
        if(i % 2 != 0) {
            arr.push(i);
        }
        console.log(arr);
    }
    return arr;
}