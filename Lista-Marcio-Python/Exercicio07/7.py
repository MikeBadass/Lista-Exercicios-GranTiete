#Peça ao usuário para fornecer três números e imprima o menor deles.

a = int(input("Digite o 1° número: "))
b = int(input("Digite o 2° número: "))
c = int(input("Digite o 3° número: "))

menorNumero = 0

if a < b and a < c:
    menorNumero = a
elif b < a and b < c:
    menorNumero = b
else: 
    menorNumero = c 
       
print(f"O menor número digitado foi: {menorNumero}")    
