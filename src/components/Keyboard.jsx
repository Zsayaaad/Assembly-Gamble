/**
 * This component just for display the letters.
 * just for telling the parent which letter was pressed.
 */
const Keyboard = ({ addLetter, word, guessedLetters, isGameOver }) => {
  // A component should only have its own state if that data is private
  //  and doesn't affect anything else.
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboard = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);

    const isCorrect = isGuessed && word.includes(letter);

    const isWrong = isGuessed && !word.includes(letter);

    const className = isCorrect ? "correct" : isWrong ? "wrong" : "";

    return (
      <button
        className={className}
        key={letter}
        disabled={isGuessed || isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        onClick={() => addLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{keyboard}</section>;
};

export default Keyboard;
