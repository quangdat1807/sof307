var keyLocalItemGioHang = 'gioHang';
//Tạo ra item giỏ hàng
function taoDoiTuongItemGioHang(idSanPham, soLuong) {
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}

//lấy giỏ hàng từ local
function layDanhSachGioHangTuLocal() {
    var gioHang = new Array();
    var jsonDanhSachGioHang = localStorage.getItem(keyLocalItemGioHang);

    if(jsonDanhSachGioHang != null){
        gioHang = JSON.parse(jsonDanhSachGioHang);
    }   
    return gioHang;
}


function luuDanhSachGioHangVaoLocal(danhSachItemGioHang) {
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    
    localStorage.setItem(keyLocalItemGioHang, jsonDanhSachItemGioHang);
}
function remove (idSanPham) {
    var item = layDanhSachGioHangTuLocal();
    var xoaItem = new Array();
    
    for( var i = 0; i < item.length; i++) {
        var cart = item[i];

        if(cart.idSanPham == idSanPham) {
            xoaItem.push(cart);   
        }
    }
    luuDanhSachGioHangVaoLocal(xoaItem);   
    return xoaItem;
}

function onClickXoa(idSanPham) {
    remove(idSanPham);
    var nodeMessage = document.getElementById('message');
    MessageService().show(nodeMessage,'Xóa sản phẩm thành công');
    
    hienThiGioHang();
}


function chuyenDanhSachItemGioHangSangHTML(danhSachItemGioHang) {
    var htmlTong = '';
    for (var i = 0; i < danhSachItemGioHang.length; i++) {
        var html = chuyenDoiTuongItemGioHangSangHTML(danhSachItemGioHang[i]);
        htmlTong += html;
    }
    return htmlTong;
    
}

function chuyenDoiTuongItemGioHangSangHTML(itemGioHang) {

    var sanPham = laySanPhamTrongLocalTheoID(itemGioHang.idSanPham);

    var tongTien = itemGioHang.soLuong * sanPham.tinhGiaBan();
    
    var html =  '   <div class="itemGioHang">  ' +
        '               <div class="hinhAnh">  ' +
        '                   <img src="' + sanPham.hinhAnh + '">  ' +
        '               </div>  ' +
        '               <p class="ten">' + sanPham.ten + '</p>  ' +
        '               <div class="gia">  ' +
        '                   <span class="giaGoc">' + sanPham.giaGoc + ' đ</span>  ' +
        '                   <span class="giaBan">' + sanPham.tinhGiaBan() + 'đ</span>  ' +
        '               </div>  ' +
        '               <input type="number" class="soLuong" value="' + itemGioHang.soLuong + '">  ' +
        '               <p class="tongTien">' + tongTien + 'đ</p>  ' +
        '               <div class="hanhDong">  ' +
        '                   <i onclick="onClickXoa(' + sanPham.idSanPham + ')" class="far fa-trash-alt"></i>  ' +
        '               </div>  ' +
        '          </div>  '; 
    return html;
}