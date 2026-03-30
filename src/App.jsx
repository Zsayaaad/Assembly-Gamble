import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageTracker from "./components/LanguageTracker";
import WordDisplay from "./components/WordDisplay";

function App() {
  return (
    <main>
      <Header />
      <GameStatus />
      <LanguageTracker />
      <WordDisplay />
      <Keyboard />
    </main>
  );
}

export default App;
