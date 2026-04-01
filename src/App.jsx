import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageTracker from "./components/LanguageTracker";
import WordDisplay from "./components/WordDisplay";
import NewGameButton from "./components/NewGameButton";

function App() {
  // Correct letter: display the letter in WordDisplay component & change the key color in keyboard
  // Wrong letter: kill a language & change the key color in keyboard
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState("react");

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  return (
    <main>
      <Header />
      <GameStatus />
      <LanguageTracker wrongGuessCount={wrongGuessCount} />
      <WordDisplay word={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        addLetter={addGuessedLetter}
        word={currentWord}
        guessedLetters={guessedLetters}
      />
      <NewGameButton />
    </main>
  );
}

export default App;
