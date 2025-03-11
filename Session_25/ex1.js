function point (arr){
    let min = arr[0];
    if(arr.length === 0){
     console.log("Mang khong chua phan tu")
    }else if(isNaN(min)){
     console.log("Gia tri khong hop le!")
    }else{
     for(let i = 0; i < arr.length; i++){
         if(arr[i] < min){
             min = arr[i];
         }
     }
     return min
    }
 }
 let arr = [9, 7, 3, 4, 1, 0]
 console.log("Phan tu nho nhat trong mang la: " + point(arr))