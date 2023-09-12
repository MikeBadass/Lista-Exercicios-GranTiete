#Peça ao usuário para fornecer um número e determine se ele é primo

numero = int(input("Digite um número: "))

primo = True

if numero <= 1:
    primo = False
else:
    for divisor in range(2, numero):
        if numero % divisor == 0:
            primo = False
            break


if primo:
    print(f"O número {numero} é primo!")
else:
    print(f"O número {numero} não é primo!")