
def start_game():
    grid = create_grid()
    show_grid(grid)

def create_grid():
    grid = []
    for y in range(0, 7):
        row = []
        for x in range(0, 10):
            row.append('.')
        grid.append(row)
    return grid

def show_grid(grid):
    for col in grid:
        print((' ').join(col))

start_game()
