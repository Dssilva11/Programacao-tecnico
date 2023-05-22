function hexa(x: number) {
    let code: Array<number | string> = [];
    while (x >= 1) {
      let rest: number = Math.floor(x % 16);
      if (rest >= 0 && rest <= 9) {
        code.push(rest);
      } else {
        if (rest === 10) {
          code.push("A");
        } else if (rest === 11) {
          code.push("B");
        } else if (rest === 12) {
          code.push("C");
        } else if (rest === 13) {
          code.push("D");
        } else if (rest === 14) {
          code.push("E");
        } else if (rest === 15) {
          code.push("F");
        }
      }
      x = Math.floor(x / 16);
    }
    code.reverse();
    return code;
  }
  
  console.log(hexa(438));
  