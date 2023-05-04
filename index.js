
// bài tập 1 tính tông tiền lương của nhân viên 
document.getElementById('btnTinhTienLuong').onclick =function() {
    // input : số ngày làm của nhân viên số number.
    // số tiền lương 1 ngày của nhân viên number.
 const tien1NgayLuong =100000;
 var ngayLam = document.getElementById('soNgayLam').value;
//  var tien1NgayLuong =document.getElementById('tienLuong1Ngay').value;
 console.log(ngayLam);
 console.log(tien1NgayLuong);
 var tongTienLuong =ngayLam*tien1NgayLuong;
 document.getElementById('hienThiTien').innerHTML = tongTienLuong +" VND";
}


// bài tập 2 tính giá trị trung bình 
document.getElementById('btnTrungBinh').onclick =function(){
    console.log(123)
var lanMot = document.getElementById('nhapLanMot').value*1;
var lanHai = document.getElementById('nhapLanHai').value*1;
var lanBa = document.getElementById('nhapLanBa').value*1;
var lanBon = document.getElementById('nhapLanBon').value*1;
var lanNam = document.getElementById('nhapLanNam').value*1;
var trungBinh = (lanMot+lanHai+lanBa+lanBon+lanNam)/5;
document.getElementById('hienThiTrungBinh').innerHTML= trungBinh;
}



// bài tập 3 qui đổi tiền 
document.getElementById('btnQuyDoiTien').onclick= function(){
    // input : + someone type 1 number 
            // some money  number
    const usdQuiDoiVnd= 23500;
    var nhapTien = document.getElementById('nhapSoTien').value;
    var tongTienQuiDoi= usdQuiDoiVnd*nhapTien;
    document.getElementById('hienThiVND').innerHTML =  tongTienQuiDoi + " VND";
}

// bài tập 4 tính tổng diện tính và chu vi của một hình chữ nhật 
/* input 
nhập chiều dài và chiều rộng
xử lí :
1. S = chiều dài x chiều rộng
2. C = (chiều dài + chiều rộng)*2
output:
xuất ra S và C
*/
document.getElementById('btnKetQua').onclick = function(){
    var chieuDai =document.getElementById('nhapChieuDai').value*1;
    var chieuRong =document.getElementById('nhapChieuRong').value*1;
    console.log(chieuDai);
    console.log(chieuRong)
    dienTich =chieuDai*chieuRong;
    chuVi =(chieuDai+chieuRong)*2;
    document.getElementById('hienThiKetQua').innerHTML = "Dien Tich :" + dienTich + "; chu Vi :" + chuVi
}


// bài tập số 5 tính tổng 2 kí số 
// input nhập 1 số có 2 chữ số 
/*
2 xử lí : 
lấy chữ số đầu của 2 chữ cố
lấy chữ số thứ 2 của chữ số
output
xuất ra tổng 2 chữ số
*/

document.getElementById('btnKiSo').onclick =function (){
   var soLieu = document.getElementById('nhapSoLieu').value*1;
   var donVi = soLieu%10;
   var hangChuc= Math.floor (soLieu/10);
   tongHaiKiSo = donVi + hangChuc;
   document.getElementById('hienThiKiSo').innerHTML=tongHaiKiSo
}
    