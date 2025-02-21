import random
sorteio = random.randint(1, 10)
print("### WELCOME THE GAME ###")
print("advinhe o numero secreto de 1 a 10!")
chute = int(input("Digite um número: "))
#TESTE:
print("sorteio", sorteio)
print("chute", chute)

if (chute == sorteio):
    print("Parabens voce é foda")
else:
    print("você errou burro do caralho")
