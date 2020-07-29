
def start_game():
    grid = create_grid()
    show_grid(grid, 1)

def create_grid():
    grid = []
    for y in range(0, 7):
        row = []
        for x in range(0, 10):
            row.append('.')
        grid.append(row)
    return grid

def show_grid(grid, wave):
    print('wave:', wave)
    for col in grid:
        print((' ').join(col))
    print('\n')

start_game()
