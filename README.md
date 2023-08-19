# Anagrams

Anagrams is a word game played with Banagrams letter tiles. As you flip the tiles, you look for words you can make from the letters revealed (4 letter minimum). Once you've made a word, you can then change it by adding tiles from the middle to create a new word. Anagrams is my favorite game, so I decided to build myself an online version! 

## Usage 

1. Run the game at the URL https://anagrams-2bd36.web.app
2. Choose any username to play with
3. Follow the instructions and enjoy!

## Features

- Randomizes a letter tile every time you flip a letter, simulates an actual Bananagrams set: same probability of flipping any given letter, same letter count, same amount of tiles
- Validates words via dictionary API
- If a player uses tiles from the middle to change a word on their board, validates that the root of the word has been changed via chatGpt playground API
