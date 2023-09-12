#Imprima todos os números ímpares entre 1 e 50.
import time

contador = 0

while contador < 50:
    if contador % 2 != 0:
        time.sleep(0.2)
        print(f"[{contador}]")
        contador = contador + 1
    contador = contador + 1    