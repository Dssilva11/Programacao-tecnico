function raiznumero(numero:number){
     const Raiz=Math.sqrt(numero);
     const resultado=Math.round(Raiz);
     return resultado;
}

const numero=4;
const resultado=raiznumero(numero);
console.log(resultado);    