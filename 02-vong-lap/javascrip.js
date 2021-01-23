
function showMessage(n) {
    var a = "abc "
    var tong = [a];
    for (i = 1; i < n; i++) {
        tong.push(a);
    }
    return tong;
}

function sum(n) {
    var tong = 0;
    for (i = 1; i <= n; i++) {
        tong = tong + i;
        
    }
    return ' Tổng '+1+ ' tới '+n+ ' là: '+ tong;
}

function sumA(a,b) {
    var tong = 0;
    for ( i = a; i <= b; i++) {
        tong = tong + i;
        
    }
    return ' Tổng '+a+ ' tới '+b+ ' là: '+ tong;
}
 function sumOdd(a,b) {
     var sum = 0;
     var odd = 0;
     for (i = a; i <= b; i++) {
         if (i % 2 != 0) {
            sum = sum + i;
         }
     }
     return ' Tổng lẻ từ '+a+ ' tới '+b+ ' là: '+ sum;
 }

 function listOdd(n) {
     var list = [];
     for (i = 0; i <=n; i++) {
        if(i % 2 != 0) {
            list.push(i);
        };  
     }
     return list;
 }

function xuatLe(n){
    var soHienTai = 1;
    var danhSachSoChan = new Array();
    while (danhSachSoChan.length < n) {
        if (laSoLe(soHienTai) == true) {
            danhSachSoChan.push(soHienTai);
        }
        soHienTai = soHienTai + 1;
    }
    return n+' Số lẻ:'+danhSachSoChan;
}

function laSoLe(number) {
    if(number == 0)
        return false;
    for (var i = 2; i < number; i++) {
        if (number % 2 == 0)
            return false;
    }
    return true;
}

function xuatLeN(n, m){
    var soHienTai = m;
    var danhSachSoChan = new Array();
    while (danhSachSoChan.length < n) {
        if (laSoLe(soHienTai) == true) {
            danhSachSoChan.push(soHienTai);
        }
        soHienTai = soHienTai + 1;
    }
    return n+' Số lẻ:'+danhSachSoChan;
}

function laSoLe(number) {
    if(number == 0)
        return false;
    for (var i = 2; i < number; i++) {
        if (number % 2 == 0)
            return false;
    }
    return true;
}

function isPrime(n)
{
    
    var flag = true;
 
    
    if (n < 2){
        flag = false;
    }
    else{
        
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    if (flag == true){
        return n + " là số nguyên tố <br/>";
    }
    else{
        return n + " không phải là số nguyên tố <br/>";
    }
}

function listPrime(n) {
    
    var soHienTai = 2;
    var listPrime = new Array();
    while (listPrime.length < n) {
        
        if (isPrimeA(soHienTai) == true) {
            listPrime.push(soHienTai);
        }
        else {
            
        }

        soHienTai = soHienTai + 1;
    }
    return n+ ' Số nguyên tố nhỏ nhất : '+listPrime;
}

function isPrimeA(number) {
    if (number < 2)
        return false;

    for (var i = 2; i < number; i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}

function listPrimeA(n,m) {
    
    var soHienTai = m;
    var listPrime = new Array();
    while (listPrime.length < n) {
        
        if (isPrimeA(soHienTai) == true) {
            listPrime.push(soHienTai);
        }
        else {
            
        }

        soHienTai = soHienTai + 1;
    }
    return n+ ' Số nguyên tố nhỏ nhất từ '+m+ ' là : '+listPrime;
}

function isPrimeA(number) {
    if (number < 2)
        return false;

    for (var i = 2; i < number; i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}