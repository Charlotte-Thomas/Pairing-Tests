
def start_game():
    grid = create_grid()
    starting_cells = [[0, 1], [0, 2], [0, 3], [0, 4]]
    grid = place_cells(grid, starting_cells)
    show_grid(grid, 1)


def create_grid():
    grid = []
    for y in range(0, 7):
        row = []
        for x in range(0, 10):
            row.append('.')
        grid.append(row)
    return grid


def place_cells(grid, starting_cells):
    for cell in starting_cells:
        grid[cell[0]][cell[1]] = 'x'
    return grid

def show_grid(grid, wave):
    print('wave:', wave)
    for col in grid:
        print((' ').join(col))
    print('\n')


start_game()
