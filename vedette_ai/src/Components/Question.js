import React, { useState } from "react";

// Code from https://github.com/ajaymuktha/React-Accordion/tree/main

export default function Question({ title, info }) { // Capitalized "Question"
  const [showDetails, setShowDetails] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? <span className="material-icons">add</span> : <span class="material-icons">remove</span>}
        </button>
      </header>
      {showDetails && <p>{info}</p>}
    </article>
  );
}