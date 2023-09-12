#Solicite ao usuário que entre com um número "n" e calcule o fatorial de "n".

num = int(input("Digite um número para ver seu fatorial: "))
fat = 1
contador = 2


while contador <= num:
    fat = fat * contador
    contador = contador + 1

print(f"O fatorial de {num} é : {fat}")