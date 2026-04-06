import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageTracker from "./components/LanguageTracker";
import WordDisplay from "./components/WordDisplay";
import NewGameButton from "./components/NewGameButton";
import { languages } from "./languages";
import { chooseRandomWord } from "./utils";
import Confetti from "react-confetti";
import AntiConfetti from "./components/AntiConfetti";

function App() {
  // Correct letter: display the letter in WordDisplay component & change the key color in keyboard
  // Wrong letter: kill a language & change the key color in keyboard
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState(() => chooseRandomWord());

  // COUNTING EACH WRONG PRESS
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  // GAME STATUS --> playing | won | lost
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1; // 9 - 1
  const isGameOver = isGameLost || isGameWon;

  // FAREWELL TEXT
  /**
   * I need to create thing that when user press incorrect letter, render farewell text on screen on the name
   * of this language that affected by this incorrect letter
   * =========================================== SCRATCH THE PROCESS
   * - Get from `guessedLetters` `lastGuessedLetter`
   * - and from currentWord, we know if this guess is correct or incorrect
   *
   * - if !isGameOver && isLastGuessIncorrect
   * -- call getFarewellText() that take name of the languages[wrongGuessCount - 1]
   */
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  // ADDING EACH LETTER THAT USER PRESSED ON KEYBOARD
  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  function resetGame() {
    setGuessedLetters([]);
    setCurrentWord(chooseRandomWord());
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      {isGameLost && <AntiConfetti numberOfPieces={200} />}
      <Header />
      {
        <GameStatus
          isGameOver={isGameOver}
          isGameWon={isGameWon}
          wrongGuessCount={wrongGuessCount}
          isLastGuessIncorrect={isLastGuessIncorrect}
        />
      }
      <LanguageTracker wrongGuessCount={wrongGuessCount} />
      <WordDisplay
        word={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        isGameOver={isGameOver}
        addLetter={addGuessedLetter}
        word={currentWord}
        guessedLetters={guessedLetters}
      />
      {isGameOver && <NewGameButton resetGame={resetGame} />}
    </main>
  );
}

export default App;
