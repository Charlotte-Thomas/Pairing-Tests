import random
# create a single deck of playing cards
# two players (called Sam and the Dealer) who will play against each other
# each player is given two cards from the top of a shuffled deck of cards

values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']

deck = {
    'Diamonds': values,
    'Clubs': values,
    'Hearts': values,
    'Spades': values
}

dealer = []
sam = []


def start_game():
    for i in range(2):
        get_random_card(dealer)
        get_random_card(sam)
    check_initial_hands()
    print(sam, dealer)


def get_random_card(player):
    suit = random.choice(list(deck.keys()))
    val = random.choice(list(deck[suit]))
    deck[suit].remove(val)
    player.append({'suit': suit, 'value': val})


def check_initial_hands():
    dealer_total = check_hand(dealer)
    sam_total = check_hand(sam)
    if dealer_total == 21:
        print('dealer wins')
    elif dealer_total > 21:
        print('dealer is bust, sam wins')
    elif sam_total == 21:
        print('sam wins')
    elif sam_total > 21:
        print('sam is bust, dealer wins')


def check_hand(player):
    tens = ['Jack', 'Queen', 'King']
    vals = []
    for card in player:
        if tens.__contains__(card['value']):
            vals.append(10)
        elif card['value'] == 'Ace':
            vals.append(11)
        else:
            vals.append(card['value'])
    return sum(vals)


start_game()
