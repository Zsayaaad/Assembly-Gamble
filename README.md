# Assembly Gamble

A Hangman-style word guessing game built with React and Vite.

## How to Play

1. Click letters on the keyboard to guess the hidden word
2. Each wrong guess eliminates a programming language
3. Guess the word before all languages are gone — or it's Assembly for you 😭

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── App.jsx           # Root component, manages game state
├── languages.js      # Language data with colors
├── utils.js          # Farewell message generator
└── components/
    ├── Header.jsx           # Static title and description
    ├── GameStatus.jsx       # Win/lose/farewell messages
    ├── LanguageTracker.jsx  # Visual language "life" chips
    ├── WordDisplay.jsx      # Reveals correctly guessed letters
    ├── Keyboard.jsx         # Clickable A-Z letter buttons
    └── NewGameButton.jsx    # Appears when game ends
```

## How React Made This Project Easier

### Component-Based Architecture

Each part of the UI is a self-contained component. The keyboard, word display, and language tracker are independent pieces that don't need to know about each other — `App` coordinates them all.

### Declarative UI

The UI describes itself based on state. The keyboard buttons automatically turn green or red depending on whether the guessed letter is in the word. No manual DOM manipulation needed.

```jsx
// Keyboard.jsx — class changes happen automatically
const className = isCorrect ? "correct" : isWrong ? "wrong" : "";
```

### Derived State

Instead of tracking everything separately, some values are calculated from existing state:

```jsx
// wrongGuessCount is derived from guessedLetters
const wrongGuessCount = guessedLetters.filter(
  (letter) => !currentWord.includes(letter),
).length;
```

This guarantees the UI is always consistent — no risk of the counter falling out of sync.

### Conditional Rendering

Components show or hide themselves based on conditions:

```jsx
// Only show New Game button when the game is over
{
  isGameOver && <NewGameButton />;
}
```

```jsx
// Only show farewell text on a wrong guess
{
  !isGameOver && isLastGuessIncorrect && (
    <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
  );
}
```

### State Lifting

All game state lives in `App`. Child components receive data through props and communicate back through callback functions (`addLetter`). This keeps state predictable and easy to reason about.
