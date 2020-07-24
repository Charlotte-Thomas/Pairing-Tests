  if check_hand(sam) <= 21:
        while check_hand(sam) <= 17:
            get_random_card(sam)
            if check_hand(sam) > 21:
                print('sam is bust')
                return