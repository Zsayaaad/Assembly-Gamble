import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageTracker from "./components/LanguageTracker";
import WordDisplay from "./components/WordDisplay";
import NewGameButton from "./components/NewGameButton";

function App() {
  const [guessedLetters, setGuessedLetters] = useState();

  return (
    <main>
      <Header />
      <GameStatus />
      <LanguageTracker />
      <WordDisplay />
      <Keyboard />
      <NewGameButton />
    </main>
  );
}

export default App;
