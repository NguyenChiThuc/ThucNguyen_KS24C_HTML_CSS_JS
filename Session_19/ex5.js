let string = prompt("Moi nhap mot chuoi: ")
if(string > 0){
    alert("Chuoi khong hop le!")
}else if(string.includes(" ")){
    alert("Chuoi co chua dau cach")
}else{
    alert("Chuoi khong chua dau cach")
}