#Peça ao usuário para fornecer um valor e imprima a contagem regressiva desse valor até zero

num = int(input("Digite um número: "))

for i in range(num, -1, -1):
    print(i) 