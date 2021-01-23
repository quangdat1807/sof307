function taoID() {
    var thoiGianHienTai = new Date().getTime();
    var id = Math.random().toString().substr(2, 10) + (thoiGianHienTai);
    return id;
}