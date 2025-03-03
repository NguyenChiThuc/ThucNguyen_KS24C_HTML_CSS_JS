let month = +prompt("Nhap thang");
if( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month ==10 || month == 12 ){
    alert("Thang co 31 ngay");
}else if( month == 4 || month == 6 || month == 9 || month == 11){
    alert("Thang co 30 ngay");
}else if( month == 2){
    alert("28 ngay vao nam thuong, 29 ngay vao nam nhuan");
}else{
    alert("Thang khong ton tai");
}
    
