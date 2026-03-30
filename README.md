Project Planning

    Questions to ask myself before writing any code:

        - What r the main container of elements I need in this app?
            1- Header for the static info at the top
            2- The bar for win or lose
            3- list of languages
            4- The word that we're trying to guess
            5- keyboard section that is clickable by user
            6- Finally the button of starting a new game, It only appears at the end of the game.

        - What values needs to be saved in states vs. what values can be derived from the existing state?
            STORE IN STATE:
            - secretWord
            - languagesLife(wrongGuesses)
            - guessedLetters
            - attemptsRemaining -- Counter down
            - gameStatus -- playing | won | lost


        - How will the user interact with my app? What events do I need to handle?
            - Keyboard is the main point for interact with the user
            - listen to buttons on keyboard if it green or yellow or red
            - button of new game to restart the game when the game is over
