# _Minesweeper_

#### By _**Ian Bravo**, **Paul LeTourneau**, **Richard Barbour**, **Seth Gonzales**_

#### Collaborative Project Recreating Classic Minesweeper

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _npm v9.6.7_
* _node v18.17.1_


## Description

This project is a student recreation of the classic 1990s Microsoft logic puzzle "Minesweeper". The player can left click on a tile to reveal its contents. If the player clicks on a mine, the game is over. If the player clicks on a tile with no surrounding mines, the tile itself and all surrounding tiles without mines are revealed. The player wins when all tiles without mines have been revealed. To play the game after it's completed, simply refresh the page.

## Setup/Installation Requirements

1. Navigate to the project via [GitHub Pages](https://sethgonzales.github.io/Minesweeper/)
2. Navigate to https://github.com/ian-bravo/Minesweeper in an internet browser.
3. Click on the green “<> Code” button on the far right-hand side of the page's main column.
4. On the “Local” tab of the mini-window that opens underneath the “<>Code” button, copy the HTTPS link in the gray bar to your clipboard.
5. In GitBash (or a terminal shell of your choice), navigate to the directory where you wish to download the project and enter the following prompt (replacing the italicized word with the appropriate link): git clone *url-of-the-repository-copied-in-the-previous-step*
6. Your chosen directory will now contain a folder titled "Minesweeper".
7. Navigate into the folder. This is the project's root directory.
8. After ensuring you have the JavaScript runtime environment Node.js installed on your computer, run the following command from your terminal in the project's root directory: npm install
9. Node.js' (18.17.1) packet manager, (9.6.7) npm, will fetch the packages listed in the project's package.json file and any dependencies (including webpack) and install all of the source code in a "node_modules" directory which it creates in the project's root directory. The "scripts" key in the package.json file contains the various actions you can perform with the project's files.
10. To build the project in development mode with webpack, run the following command from your terminal in the project's root directory (and webpack will create a new directory called "dist" in your root directory and populate it with a JS file called "bundle.js" and HTML file called "index.html"): npm run build
11. To build project and then open the webpack development server, which will launch a browser and live re-bundle and reload the project when changes are made to the code in the "src" directory, run the following command from your terminal in the project's root directory: npm run start


## Known Bugs

The "You Win" text appears in the DOM multiple times when the win condition is met on the first click of the game.


## License

MIT License  

Copyright (c) 2023 Ian Bravo, Paul LeTourneau, Richard Barbour, Seth Gonzales 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



_For questions or concerns, please email bravo.ian@gmail.com_
