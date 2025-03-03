let alpha = prompt("Nhap bat ky tu ban muon: ")
if(alpha.length > 1 && alpha.length < 2){
    if("a" <= alpha && alpha <= "z" ||
        "A" <= alpha && alpha <= "Z"){
        alert(`Ky tu ${alpha} la chu cai`)
    }else{
        alert(`Ky tu ${alpha} khong phai la chu cai`)
    }
}else{
    alert("Day khong phai la ky tu!")
}