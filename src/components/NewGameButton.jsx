const NewGameButton = ({ resetGame }) => {
  return (
    <button className="new-game" onClick={resetGame}>
      New Game
    </button>
  );
};

export default NewGameButton;
