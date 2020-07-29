
def start_game():
    grid = create_grid()
    for col in grid:
        print((' ').join(col))

def create_grid():
    grid = []
    for y in range(0, 6):
        row = []
        for x in range(0, 10):
            row.append('.')
        grid.append(row)
    return grid


start_game()
