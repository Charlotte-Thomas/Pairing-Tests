import random
# list of colours
# randomise the colours each turn in a new list
# variables for player and machine money

repeat = True
player_money = 50
machine_money = 1000

while repeat:

    colours = ['black', 'white', 'green', 'yellow']

    def start_game():
        if exchange_money():
            global repeat
            slots = random_slots()
            if check_slots(slots):
                print('jackpot!')
            else:
                print('you loose, try again')
        choice = input(f'player money: {player_money}, try again? (y/n): ').lower()
        if choice == 'n':
            repeat = False

    def exchange_money():
        global repeat, machine_money, player_money
        if player_money < 10:
            print('player does not have enough money to continue')
            return False
        else:
            machine_money += 10
            player_money -= 10
            return True

    def random_slots():
        slots = random.choices(colours, k=4)
        print(slots)
        return slots

    def check_slots(slots):
        return all(x == slots[0] for x in slots)

    start_game()
