/**
 * This component just for display the letters.
 * just for telling the parent which letter was pressed.
 */
const Keyboard = () => {
  // A component should only have its own state if that data is private
  //  and doesn't affect anything else.

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboard = alphabet.split("").map((key) => {
    return <button key={key}>{key.toUpperCase()}</button>;
  });

  return <section className="keyboard">{keyboard}</section>;
};

export default Keyboard;
