import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Rows from "./Rows";

let counter = 0;
function App() {
  const [word, setWord] = useState("testi");
  const [guessRows, setGuessRows] = useState(Array(6).fill(null));
  const [typedWord, setTypedWord] = useState("");

  useEffect(() => {
    const keyHandler = (event) => {
      if (event.key === "Enter") {
        if (typedWord.length !== 5) {
          return;
        }

        let newGuesRows = [...guessRows];
        newGuesRows[newGuesRows.findIndex((val) => val == null)] = typedWord;
        setGuessRows(newGuesRows);

        setTypedWord("");
      }

      if (event.key === "Backspace") {
        setTypedWord(typedWord.slice(0, -1));
        return;
      }

      if (typedWord.length >= 5) {
        return;
      }

      setTypedWord((old) => old + event.key);
    };

    window.addEventListener("keydown", keyHandler);
    console.log(guessRows);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [typedWord]);

  return (
    <div className="column__class">
      {guessRows.map((rows, index) => {
        const currentRow = index === guessRows.findIndex((val) => val == null);
        return (
          <Rows
            guessRows={currentRow ? typedWord : rows ?? ""}
            word={word}
            finalAnswer={!currentRow && rows !== null}
          />
        );
      })}
      {typedWord} <br />
      {word}
    </div>
  );
}

export default App;
