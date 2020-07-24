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
    get_initial_hand(dealer)
    get_initial_hand(sam)


def get_initial_hand(player):
    for i in range(2):
        suit = random.choice(list(deck.keys()))
        val = random.choice(list(deck[suit]))
        deck[suit].remove(val)
        player.append({suit: val})


start_game()
