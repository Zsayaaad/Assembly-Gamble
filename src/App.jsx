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

  // useEffect(() => {
  //   const currWordElements = currentWord.split("");

  //   if(currWordElements.includes(guessedLetters[0])) {

  //   }

  // }, [guessedLetters]);

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }

  return (
    <main>
      <Header />
      <GameStatus />
      <LanguageTracker />
      <WordDisplay word={currentWord} />
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
