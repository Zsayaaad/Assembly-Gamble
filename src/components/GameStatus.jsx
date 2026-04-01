const GameStatus = ({ gameOver, gameWon }) => {
  function renderGameStatus() {
    if (!gameOver) {
      return null;
    } else if (gameWon) {
      return (
        <>
          <h2>You Win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    } else {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
  }

  const className = `game-status ${gameOver ? (gameWon ? "won" : "lost") : ""}`;

  return <div className={className}>{renderGameStatus()}</div>;
};

export default GameStatus;
