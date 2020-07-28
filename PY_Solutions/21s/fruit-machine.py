import random
# list of colours
# randomise the colours each turn in a new list
# variables for player and machine money

repeat = True
while repeat:

    colours = ['black', 'white', 'green', 'yellow']

    def start_game():
        global repeat
        slots = random_slots()
        if check_slots(slots):
            print('jackpot!')
        else:
            print('you loose, try again')
        choice = input('try again? (y/n): ').lower()
        if choice == 'n':
            repeat = False

    def random_slots():
        slots = random.choices(colours, k=4)
        print(slots)
        return slots

    def check_slots(slots):
        return all(x == slots[0] for x in slots)

    start_game()
