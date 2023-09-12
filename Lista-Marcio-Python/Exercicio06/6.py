#Solicite ao usuário que entre com sua idade e determine se ele pode votar (idade mínima de 18 anos).

idade = int(input("Digite sua idade: "))

if idade >= 18:
    print("Você já pode votar!")
else:
    print("Você ainda não pode votar!")
