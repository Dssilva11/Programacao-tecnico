let mult=1
let num=5
function conta(){
    for(let cont=1;cont<=num;cont++){
        mult=cont*mult
}
return mult
}    
   
console.log(conta())