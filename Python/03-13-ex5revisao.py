lista=[]
lmaior=['n',0]
maiorv=0
cont=0
qvendedores=int(input("digite a quantidade de vendedores a serem lidos: "))
while cont<qvendedores:
    dicio={}
    nome=input('digite o nome de funcionario: ')
    dicio['nome']=nome
    #numloja=int(input("digite o numero da loja: "))
    #dicio['loja']=(numloja)
    valorv=float(input("digite o valor vendido no mes: "))
    dicio['valor']=(valorv)
    if valorv>maiorv:
        maiorv=valorv
        lmaior[0]=nome
        lmaior[1]=valorv
    lista.append(dicio)
    cont += 1
    comi=(valorv/100)*8
    dicio['comisao']=(comi)
    comm=((lmaior[1]/100)*8)+300
print(lista)
print(lmaior[0],' foi o vendedor que mais vendeu ',' com um valor de ',lmaior[1], ' em vendas, e deverá receber um adiconal de 300 em sua comissao, totalizando ', comm ,'de comissão')



