import { languages } from "../languages";

const LanguageTracker = ({ wrongGuessCount }) => {
  const languageElements = languages.map((lang, index) => {
    // evaluates to true if the current language's index is less than the wrongGuessCount.
    const isLost = index < wrongGuessCount;

    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    return (
      <span
        className={`chip-lang ${isLost ? "lost" : ""}`}
        key={lang.name}
        style={styles}
      >
        {lang.name}
      </span>
    );
  });

  return <div className="languages">{languageElements}</div>;
};

export default LanguageTracker;
