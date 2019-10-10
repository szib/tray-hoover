# Tray Hoover

## Goal

The goal of the program is to take the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the following:

- The final hoover position (X, Y)
- The number of patches of dirt the robot cleaned up

### Input

Program reads `input.txt` in the same folder, its format described below

- the first line holds the room dimensions (X Y), separated by a single space (all coordinates will be presented in this format)
- the second line holds the hoover position
- subsequent lines contain the zero or more positions of patches of dirt (one per line)
- the next line then always contains the driving instructions (at least one)

Example:

```
5 5
1 2
1 0
2 2
2 3
NNESEESWNWW
```

### Output

- The first line of your program output displays the X and Y coordinates marking the position of the hoover after processing all commands.
- The second line of the program output displays the number of patches of dirt the robot cleaned up.

## Usage

1. Clone the repo
2. Run `npm install`
3. Run `npm run build:bin`
4. Switch to `bin` folder with `cd bin`
5. Run `./hoover`

You can edit `input.txt` in `bin` folder in order to feed the hoover with different input.

If `npm run build` fails:

- run `npm run build`
- `cd build`
- copy config file to `build`: `cp ./index.txt ./build`
- run `./hoover`

## Licence

MIT
