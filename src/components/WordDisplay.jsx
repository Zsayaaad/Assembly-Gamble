import { useState } from "react";

const WordDisplay = () => {
  const [currentWord, setCurrentWord] = useState("react");

  const letterElements = currentWord.split("").map((letter, index) => {
    return <span key={index}>{letter.toUpperCase()}</span>;
  });

  return <div className="word">{letterElements}</div>;
};

export default WordDisplay;
