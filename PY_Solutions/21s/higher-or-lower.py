import random

# user given a number from a selection of cards
# user must guess if the next card will be higher or lower
# 5 correct guesses = winner
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
    while len(cards) > 1:
        print(cards[0])
        choice = input('will the nect cards be higher or lower? (h/l): ')
        if choice == 'h' and cards[1] > cards[0]:
            print('correct')
            cards.pop(0)
        else:
            print('wrong')


start_game()
