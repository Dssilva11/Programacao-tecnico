function positivoslista(numeros: number[]): number[] {
    const positivos: number[] = [];
  
    numeros.forEach((number) => {
      if (number > 0) {
        positivos.push(number);
      }
    });
  
    return positivos;
  }
const numeros: number[] = [3,7,2,-4,9,-1,-2];
const positivos: number[] = positivoslista(numeros);
console.log(positivos);