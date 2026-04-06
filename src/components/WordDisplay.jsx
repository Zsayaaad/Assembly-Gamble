const WordDisplay = ({ word, guessedLetters, isGameLost }) => {
  const letterElements = word.split("").map((letter, index) => {
    // if user press on this letter from keyboard ? appear the letter : empty string
    const isCorrect = guessedLetters.includes(letter);
    const shouldReveal = isGameLost && !isCorrect;

    return (
      <span key={index} className={shouldReveal ? "missing" : ""}>
        {isCorrect || shouldReveal ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return <div className="word">{letterElements}</div>;
};

export default WordDisplay;
