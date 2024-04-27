import React, { useState } from "react";

// Code from https://github.com/ajaymuktha/React-Accordion/tree/main

export default function Question({ title, info }) { // Capitalized "Question"
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article className="question" onClick={() => setShowDetails(!showDetails)}>
      <header>
        <h4>{title}</h4>
        <button className="btn">
          {showDetails ? <span class="material-icons">remove</span> : <span className="material-icons">add</span>}
        </button>
      </header>
      {showDetails && <p>{info}</p>}
    </article>
  );
}