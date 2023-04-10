num=int(input("digite o numero"))
if num%2 == 1:
    print("estranho")
elif num%2==0 and num>=2 and num <=5:
    print("não é estranho")
elif num%2==0 and num>=6 and num <=20:
    print("estranho")
elif num%2==0 and num>20:
    print("não é estranho")