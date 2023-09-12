#Solicite uma nota (de 0 a 10) e determine se o aluno está aprovado (nota 7 ou superior), em recuperação (nota entre 5 e 6.9) ou reprovado (nota abaixo de 5).

nota = float(input("Digite a nota do aluno: "))

if nota < 5:
    print("Aluno reprovado!")
elif nota <= 6.9:
    print("Aluno foi para a recuperação!")
else:
    print("Aluno aprovado!")
