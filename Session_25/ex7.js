function caplock (letter) {
    if (typeof letter !== "string") {
      return "Dau nhap khong hop!";
    }
    let letterLock = chuoi.split(" ");
    console.log(letterLock);
    for (let i = 0; i < letterLock.length; i++) {
      if (letterLock[i].length > 0) {
        letterLock[i] = letterLock[i][0].toUpperCase() + letterLock[i].slice(1).toLowerCase();
        console.log(letterLock[i]);
      }
    }
    return letterLock.join(", ");
  }
  let input = prompt("Moi nhap vao mot chuoi: ");
  let result = caplock(input);
  console.log(result);