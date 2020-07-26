import random

# user given a number from a selection of cards
# user must guess if the next card will be higher or lower
# 4 correct guesses = winner
# looses if cards run out

repeat = True

# while repeat:

cards = []


def start_game():
    create_cards()
    shuffle_cards()
    get_user_input()


def create_cards():
    for i in range(0, 2):
        for x in range(1, 11):
            cards.append(x)


def shuffle_cards():
    random.shuffle(cards)
    print(cards)


def get_user_input():
    correct = 0
    while len(cards) > 1 and correct != 4:
        print(cards[0])
        choice = input('will the next cards be higher or lower? (h/l): ')
        if choice == 'h' and cards[1] > cards[0]:
            print('correct, it was: ', cards[1])
            correct += 1
        elif choice == 'l' and cards[1] < cards[0]:
            print('correct, it was: ', cards[1])
            correct += 1
        else:
            print('wrong, it was: ', cards[1])
        cards.pop(0)

start_game()
