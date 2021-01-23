var a = 5;
var b = 9;
function tong() {
    return a + b;
}

function hieu() {
    return a - b;
}

function tich() {
    return a * b;
}

function thuong() {
    if(b == 0){
        return a+' không chia được cho 0';
    }else{
        return a/b;
    }
}

function binhPhuong() {
    return a*a;
}

function max() {
    if(a>b) {
        return a;
    }else {
        return b;
    }
}

function min() {
    if(a>b) {
        return b;
    }else {
        return a;
    }
}

function giaTriTb() {
    return (a+b)/2;
}

function chiaLayDu(c, d) {
    if(c>d) {
        return c+' chia '+d+ ' dư '+ c%d;
    }else {
        return c+' không chia hết được '+d ;
    }
}

function coChiaHet(c,d) {
    if(c%d == 0) {
        return c+' chia hết cho '+d;
    }else {
        return c+' không chia hết cho '+d;
    }
}

function chuViChuNhat() {
    return (a+b)*2;
}

function dienTichChuNhat() {
    return a*b;
}

var r = 6;
function chuViHinhTron() {
    return r*2*3.14;
}

function dienTichHinhTron() {
    return (r*r)*3.14;
}

var s1 = "Đào Quang ";
var s2 = "Quang Đạt ";
var s3 = "Đào Quang Đạt ";

function noiChuoi() {
    var s = s1 + s2 + s3;
    return s;
}

function inHoa() {
    var s = s1 + s2 + s3;
    var b = s.toUpperCase();
    return b;
}

function coTonTai() {
    if(s1.indexOf(s2)) {
        return "Chuỗi 2 có trong chuỗi 1";
    }else {
        return "Chuỗi 1 có trong chuỗi 2";
    }
}

function  doDoDai() {
    var s = s1 + s2 + s3;
    var a = s.length;
    return a;
}

function catChuoi() {
    var s = s1 + s2 + s3;
    var a = s.substring(1,3);
    return a;
}

function chuoiCon() {

    if(s3.includes(s1)){
        return "s1 có tồn tại trong s3";
    }else if(s3.includes(s2)){
        return "s2 có tồn tại trong s3";
    }else {
        return "Đào Quang Đạt";
    }
}