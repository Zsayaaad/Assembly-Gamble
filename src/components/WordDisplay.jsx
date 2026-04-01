const WordDisplay = ({ word, guessedLetters }) => {
  const letterElements = word.split("").map((letter, index) => {
    // if user press on this letter from keyboard ? appear the letter : empty string
    const isCorrect = guessedLetters.includes(letter);

    return <span key={index}>{isCorrect ? letter.toUpperCase() : ""}</span>;
  });

  return <div className="word">{letterElements}</div>;
};

export default WordDisplay;
