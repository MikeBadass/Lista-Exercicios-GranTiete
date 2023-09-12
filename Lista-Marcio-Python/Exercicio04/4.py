#Peça ao usuário para fornecer dois números e determine se o primeiro é divisível pelo segundo.

a = float(input("Digite o 1° número: "))
b = float(input("Digite o 2° número: "))

if a % b == 0:
    print(f"{a} é divisivel por {b}")
else:
     print(f"{a} não é divisivel por {b}")