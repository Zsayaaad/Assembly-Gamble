const WordDisplay = ({ word }) => {
  const letterElements = word.split("").map((letter, index) => {
    return <span key={index}>{letter.toUpperCase()}</span>;
  });

  return <div className="word">{letterElements}</div>;
};

export default WordDisplay;
