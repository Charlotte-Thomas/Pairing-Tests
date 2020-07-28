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
            check_slots(slots)
        choice = input(
            f' player money: {player_money}, \n machine money: {machine_money} \n try again? (y/n): ').lower()
        if choice == 'n':
            repeat = False

    def exchange_money():
        global repeat, machine_money, player_money
        if player_money < 10:
            print('player does not have enough money to continue')
            return False
        machine_money += 10
        player_money -= 10
        return True

    def random_slots():
        slots = random.choices(colours, k=4)
        print(slots)
        return slots

    def check_slots(slots):
        global repeat, machine_money, player_money
        if all(x == slots[0] for x in slots):
            print('jackpot!')
            player_money += machine_money
            machine_money = 0
        elif all_unique(slots):
            print('all unique!')
            player_money += machine_money / 2
            machine_money = machine_money / 2
        elif check_duplicate(slots):
            print('duplicates found, you win!')
            player_money += 50
            deduct_machine(50)

    def all_unique(x):
        seen = set()
        return not any(i in seen or seen.add(i) for i in x)

    def check_duplicate(slots):
        for slot in enumerate(slots):
            if slot[0] != 3 and slot[1] == slots[slot[0] + 1]:
                return True

    def deduct_machine(total):
        global machine_money
        if machine_money >= total:
            machine_money -= total
        else:
            machine_money = 0

    start_game()
