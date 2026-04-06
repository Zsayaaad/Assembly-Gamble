import { languages } from "../languages";
import { getFarewellText } from "../utils";

const GameStatus = ({
  isGameOver,
  isGameWon,
  wrongGuessCount,
  isLastGuessIncorrect,
}) => {
  function renderGameStatus() {
    /**
     * - if !isGameOver && isLastGuessIncorrect
     * -- call getFarewellText() that take name of the languages[wrongGuessCount - 1]
     */
    if (!isGameOver && isLastGuessIncorrect) {
      return <p>{getFarewellText(languages[wrongGuessCount - 1].name)}</p>;
    } else if (isGameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    } else if (isGameOver && !isGameWon) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
    return null;
  }

  const isFareWell = !isGameOver && isLastGuessIncorrect;
  const className = `game-status ${
    isGameOver ? (isGameWon ? "won" : "lost") : isFareWell ? "farewell" : ""
  }`;

  return (
    <div className={className} aria-live="polite" role="status">
      {renderGameStatus()}
    </div>
  );
};

export default GameStatus;
