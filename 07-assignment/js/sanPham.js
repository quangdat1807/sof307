function taoDoiTuongSanPham(hinhAnh, ten, giaGoc, phanTramGiamGia, khuVuc, id) {
    var sanPham = new Object();
    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    sanPham.khuVuc = khuVuc;

    if (id == null) {
        sanPham.id = taoID();
    }else {
        sanPham.id = id;
    }
    

    sanPham.tinhGiaBan = function() {
        var giaBan = this.giaGoc * (1 - this.phanTramGiamGia);
        return giaBan;
    }
    sanPham.toJson = function() {
        var json = JSON.stringify(this);
        return json;
    }
    sanPham.fromJSON = function(json) {
        var doiTuongDayDu = new Object();

        var doiTuong = JSON.parse(json);

        var doiTuongDayDu = taoDoiTuongSanPham(doiTuong.hinhAnh, doiTuong.ten, doiTuong.giaGoc, doiTuong.phanTramGiamGia, doiTuong.khuVuc, doiTuong.id);
        return doiTuongDayDu;
    }

    sanPham.fromJSONs = function (jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

        for (var i=0; i<danhSachSanPham.length; i++) {
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }

    return sanPham;
}

//input là đối tượng sanPham
function chuyenDoiTuongThanhHTML(sanPham) {
    var html = '';
    html += '<div class="item">';
    html += '   <div class="hinhAnh">';
    html += '       <img src=" '+ sanPham.hinhAnh +' ">';
    html += '   </div>';
    html += '   <h1 class="tenSanPham">' + sanPham.ten + '</h1>';
    html += '   <div class="itemGia" >';
    html += '       <span class="giaBan">' + Number(sanPham.tinhGiaBan()).toLocaleString('en') + 'đ</span>';
    html += '       <span class="giaSanPham">' + Number(sanPham.giaGoc).toLocaleString('en') + 'đ</span>';
    html += '   </div>';
    html += '   <div class="txt">';
    html += '       <p class="khuVuc">'+ "Khu vực: " + sanPham.khuVuc + '</p>';
    html += '       <button onclick="onClickThemVaoGioHang(\''+ sanPham.id +'\')" class="btn btn-primary">Mua ngay</button>';
    html += '   </div>';
    html += '</div>';
    return html;
}

//chuyển danh sách đối tượng thành thẻ html
    //input: mảng chứa danh sách sản phẩm
    //output: html -> hiển thị danh sách sản phẩm
function chuyenDanhSachSanPhamHtml(danhSachSanPham) {
    var htmlTong = '<div class="items"> ';
    //html tổng bằng nối các html con lại
    //b1: duyệt từng phẩn tử
    //b2: chuyển đối tượng thành html
    //b3: cộng html vào tml tổng
    for(var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var html = chuyenDoiTuongThanhHTML(sanPham);
        htmlTong = htmlTong + html;
    }
    htmlTong = htmlTong + '</div';
    return htmlTong;
}

function laySanPhamTrongLocalTheoID(idSanPham) {
    var sanPham = new Object();

    var danhSachSanPham = layDanhSachSanPhamTuLocal();
    console.log(danhSachSanPham);
    
    for(var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
        }
    }
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    return sanPham;
}

function laySanPhamTrongLocalTheoGG() {
    var sanPham = new Object();

    var danhSachSanPham = layDanhSachSanPhamTuLocal();
    console.log(danhSachSanPham);
    
    for(var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.phanTramGiamGia >= 0.3) {
            sanPham = Object.assign(sanPhamHienTai);
        }
    }
    sanPham = taoDoiTuongSanPham(sanPham.hinhAnh, sanPham.ten, sanPham.giaGoc, sanPham.phanTramGiamGia, sanPham.khuVuc, sanPham.id);
    return sanPham;
}

function chuyenDoiTuongHotThanhHTML(sanPham) {
    var sanPham = laySanPhamTrongLocalTheoGG();
    var html = '';
    html += '<div class="item">';
    html += '   <div class="khung-giamGia">';
    html += '   <span class="giamGia">' + sanPham.phanTramGiamGia*100 + '%</span>';
    html += '   </div>';
    html += '   <div class="hinhAnh">';
    html += '       <img src=" '+ sanPham.hinhAnh +' ">';
    html += '   </div>';
    html += '   <h1 class="tenSanPham">' + sanPham.ten + '</h1>';
    html += '   <div class="itemGia" >';
    html += '       <span class="giaBan">' + Number(sanPham.tinhGiaBan()).toLocaleString('en') + 'đ</span>';
    html += '       <span class="giaSanPham">' + Number(sanPham.giaGoc).toLocaleString('en') + 'đ</span>';
    html += '   </div>';
    html += '   <div class="txt">';
    html += '       <p class="khuVuc">'+ "Khu vực: " + sanPham.khuVuc + '</p>';
    html += '       <button onclick="onClickThemVaoGioHang(\''+ sanPham.id +'\')" class="btn btn-primary">Mua ngay</button>';
    html += '   </div>';
    html += '</div>';
    return html;
}

function chuyenDanhSachSanPhamHotHtml(danhSachSanPham) {
    var htmlTong = '<div class="items"> ';
    //html tổng bằng nối các html con lại
    //b1: duyệt từng phẩn tử
    //b2: chuyển đối tượng thành html
    //b3: cộng html vào tml tổng
    for(var i = 0; i < danhSachSanPham.length; i++) {
        var sanPham = danhSachSanPham[i];
        var html = chuyenDoiTuongHotThanhHTML(sanPham);
        htmlTong = htmlTong + html;
    }
    htmlTong = htmlTong + '</div';
    return htmlTong;
}

function layDanhSachSanPhamTuLocal() {
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}