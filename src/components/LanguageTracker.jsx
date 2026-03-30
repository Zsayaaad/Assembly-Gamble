import { languages } from "../languages";

const LanguageTracker = () => {
  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    return (
      <span className="chip-lang" key={lang.name} style={styles}>
        {lang.name}
      </span>
    );
  });

  return <div className="languages">{languageElements}</div>;
};

export default LanguageTracker;
