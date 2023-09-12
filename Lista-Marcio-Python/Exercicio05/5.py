#Peça ao usuário para fornecer um número e determine se ele é par ou ímpar

a = int(input("Digite um número: "))

if a % 2 == 0:
    print(f"{a} é par")
else:
    print(f"{a} é ímpar")