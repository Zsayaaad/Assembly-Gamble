# Assembly Gamble

Assembly Gamble is a fun, developer-themed spin on the classic Hangman game. Instead of drawing a stick figure, you start with a set of popular programming languages. Every time you guess an incorrect letter, one programming language gets eliminated (or "dies"). Your goal is to guess the word before your entire tech stack is wiped out!

## Why React?

React was instrumental in building this project simply and efficiently. Here are the core strengths of React utilized in this game:

- **Component-Based Architecture:** The UI is split into small, reusable building blocks (like `Keyboard`, `WordDisplay`, and `LanguageTracker`). This isolated approach keeps the code clean and manageable.
- **Effortless State Management:** Using React's `useState` hook, handling the game's core logic (such as tracking `guessedLetters` and calculating `wrongGuessCount`) became incredibly intuitive. The user interface automatically stays in sync with these state variables.
- **Declarative UI Engine:** React's declarative nature made it simple to conditionally render elements. Whether it's showing a "You Won!" message, displaying farewell text for a lost language, or disabling the keyboard when the game is over, the UI naturally reacts to the active game state without manually touching the DOM.
- **Clear Data Flow:** Passing state data and updater functions (like recording a keyboard click) down to child components via `props` ensured that the logic stayed centralized in the `App` component while keeping the child components focused purely on presentation.

## Setup Instructions

Want to try the game locally?
1. Clone this repository.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm run dev`.
