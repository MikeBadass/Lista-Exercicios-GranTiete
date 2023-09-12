#Solicite três números e imprima o maior deles.

a = int(input("Digite o 1° número: "))
b = int(input("Digite o 2° número: "))
c = int(input("Digite o 3° número: "))

maiorNumero = 0

if a > b and a > c:
    maiorNumero = a
elif b > a and b > c:
    maiorNumero = b
else: 
    maiorNumero = c 
       
print(f"O maior número digitado foi: {maiorNumero}")    
