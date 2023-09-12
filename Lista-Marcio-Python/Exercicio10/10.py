#Solicite ao usuário um número e imprima sua tabuada.

num = int(input("Digite um número para ver sua tabuada: "))

contador = 0
while contador < 11:   
    result = num * contador 
    print(f"{num} x {contador} = {result}")
    contador = contador + 1
