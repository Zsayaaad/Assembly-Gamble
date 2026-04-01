import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageTracker from "./components/LanguageTracker";
import WordDisplay from "./components/WordDisplay";
import NewGameButton from "./components/NewGameButton";
import { languages } from "./languages";

function App() {
  // Correct letter: display the letter in WordDisplay component & change the key color in keyboard
  // Wrong letter: kill a language & change the key color in keyboard
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord] = useState("react");

  // COUNTING EACH WRONG PRESS
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  // GAME STATUS --> playing | won | lost
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessCount >= languages.length - 1 ? true : false;

  const isGameOver = isGameLost || isGameWon;

  // ADDING EACH LETTER THAT USER PRESSED ON KEYBOARD
  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  return (
    <main>
      <Header />
      {<GameStatus gameOver={isGameOver} gameWon={isGameWon} />}
      <LanguageTracker wrongGuessCount={wrongGuessCount} />
      <WordDisplay word={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        addLetter={addGuessedLetter}
        word={currentWord}
        guessedLetters={guessedLetters}
      />
      {isGameOver && <NewGameButton />}
    </main>
  );
}

export default App;
