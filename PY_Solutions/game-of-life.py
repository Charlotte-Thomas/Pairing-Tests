
def start_game():
    grid = create_grid()
    starting_cells = [[0, 1], [0, 2], [0, 3], [0, 4]]
    grid = place_cells(grid, starting_cells)
    show_grid(grid, 1)
    # while len(starting_cells) > 0:
    determine_life(grid)


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


def determine_life(grid):
    row_sides = [0, 6]
    col_sides = [0, 9]
    cell_count = 0
    cells_alive = []
    for y in range(0, 7):
        for x in range(0, 10):
            if y not in row_sides and x not in col_sides:
                cell_count = check_center(grid, y, x)
            elif y == 0 and x not in col_sides:
                cell_count = check_top(grid, y, x)
            else:
                cell_count = check_corner(grid, y, x)
            if not determine_death(grid, y, x, cell_count):
                cells_alive.append([y, x])
    print(cells_alive)
    grid = create_grid()
    grid = place_cells(grid, cells_alive)
    show_grid(grid, 2)


def check_center(grid, y, x):
    directions = [grid[y-1][x-1], grid[y-1][x], grid[y-1][x+1], grid[y][x-1], grid[y][x+1], grid[y+1][x-1], grid[y+1][x], grid[y+1][x+1]]
    cell_count = find_x(directions)
    return cell_count


def check_top(grid, y, x):
    directions = [grid[y][x-1], grid[y][x+1], grid[y+1][x-1], grid[y+1][x], grid[y+1][x+1]]
    cell_count = find_x(directions)
    return cell_count

def check_corner(grid, y, x):
    directions = []
    if y == 0 and x == 0:
        directions = [grid[y][x+1], grid[y+1][x], grid[y+1][x+1]]
    elif y == 0 and x == 9:
        directions = [grid[y][x-1], grid[y+1][x], grid[y+1][x-1]]
    elif y == 6 and x == 0:
        directions = [grid[y-1][x], grid[y-1][x+1], grid[y][x+1]]
    elif y == 6 and x == 9:
        directions = [grid[y-1][x], grid[y-1][x-1], grid[y][x-1]]
    cell_count = find_x(directions)
    return cell_count


def find_x(directions):
    cell_count = 0
    for direction in directions:
        if direction == 'x':
            cell_count += 1
    return cell_count


def determine_death(grid, y, x, cell_count):
    death = True
    if 1 < cell_count < 4 and grid[y][x] == 'x':
        death = False
    elif cell_count == 3 and grid[y][x] == '.':
        death = False
    return death

start_game()
