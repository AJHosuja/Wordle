import React from "react";
import "./rows.css";

const Rows = ({ guessRows, word, finalAnswer }) => {
  const columns = [];
  for (let i = 0; i < 5; i++) {
    let cssClass = "tile";
    if (finalAnswer) {
      if (guessRows[i] === word[i]) {
        cssClass += " correct";
      } else if (word.includes(guessRows[i])) {
        cssClass += " almost";
      }
    }

    columns.push(
      <div className={cssClass} key={i}>
        {guessRows[i]}
      </div>
    );
  }

  return <div className="rows__div">{columns}</div>;
};

export default Rows;
