#Imprima os primeiros 10 termos da sequência de Fibonacci.

termo1 = 0
termo2 = 1

print("10 Primeiros termos da sequencia fibonacci: ")

for i in range(10):
    print(termo1)
    proximo_termo = termo1 + termo2
    termo1, termo2 = termo2, proximo_termo