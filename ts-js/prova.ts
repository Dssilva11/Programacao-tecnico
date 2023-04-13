const calcfatorial=(n:number)=>{
    if(n===0){
        return 1;
    }
    for (let i=n-1;i>=1;i--){
        n*=i;
    }
    return n;
}
const n= 4
const factorial=calcfatorial(n);
console.log(`O fatorial de ${n} é ${factorial}`);
