# Assembly Gamble

A hangman-style word guessing game built with React. Guess letters to reveal the hidden word before you run out of lives — each wrong guess costs you a programming language!

## Project Overview

**Assembly Gamble** is a React-based word guessing game where players attempt to guess a hidden word one letter at a time. The twist: each incorrect guess "kills" a programming language from your collection, displayed as colorful chips. Guess all letters correctly to win, or lose all your languages and it's game over.

### Features

- **Word Display**: Hidden letters revealed as you guess correctly
- **Interactive Keyboard**: On-screen keyboard with color-coded feedback (green = correct, red = wrong)
- **Language Tracker**: Visual chips representing programming languages that get eliminated on wrong guesses
- **Game Status**: Real-time win/lose/farewell messages
- **Confetti Effects**: Celebration confetti on win, "anti-confetti" on loss
- **New Game**: Reset and play again with a random word

### Game Mechanics

- 9 programming languages serve as your "lives" (HTML, CSS, JavaScript, React, TypeScript, Node.js, Python, Ruby, Assembly)
- Each wrong guess eliminates one language
- Game is won when all letters in the word are guessed
- Game is lost when only one language remains

## Project Structure

```
assembly-gamble/
├── src/
│   ├── components/
│   │   ├── AntiConfetti.jsx      # Custom falling skull effect on loss
│   │   ├── GameStatus.jsx        # Win/lose/farewell status display
│   │   ├── Header.jsx            # Game title and subtitle
│   │   ├── Keyboard.jsx          # Interactive letter keyboard
│   │   ├── LanguageTracker.jsx   # Language chip display
│   │   ├── NewGameButton.jsx     # Reset game button
│   │   └── WordDisplay.jsx       # Letter-by-letter word reveal
│   ├── App.jsx                   # Main app component & game logic
│   ├── index.css                 # Global styles
│   ├── languages.js              # Language data (names, colors)
│   ├── utils.js                  # Utility functions (random word, farewell text)
│   ├── words.js                  # Word bank (~480 words)
│   └── main.jsx                  # React entry point
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── package.json                  # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

## Tools & Technologies Used

### Core

| Tool      | Version | Purpose                                            |
| --------- | ------- | -------------------------------------------------- |
| **React** | 19.2.4  | UI library for building component-based interfaces |
| **Vite**  | 8.0.1   | Next-gen frontend build tool with fast HMR         |

### Libraries

| Tool               | Version | Purpose                                      |
| ------------------ | ------- | -------------------------------------------- |
| **react-confetti** | 6.4.0   | Particle confetti effect for win celebration |

### Key React Concepts Demonstrated

- **useState** — Managing game state (guessed letters, current word)
- **Derived State** — Computing win/lose status from existing state rather than storing it
- **Component Composition** — Breaking UI into focused, reusable components
- **Props Drilling** — Passing data and callbacks down the component tree
- **Conditional Rendering** — Showing/hiding UI based on game state
- **Event Handling** — Keyboard button clicks triggering state updates
- **List Rendering** — Mapping over languages, letters, and keyboard keys
- **CSS-in-JS Patterns** — Inline styles for dynamic language chip colors

## 🙌 Acknowledgments

- Built as part of the [Scrimba React Course](https://scrimba.com/learn/learnreact)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Zsayaaad">Zsayaaad</a>
</p>
