lista=[]
nome=''
cont=0

while nome != '0':
    nome=input("digite um nome: ")
    lista.append(nome)

lista.remove('0')
print(f" a lista {len(lista)}")