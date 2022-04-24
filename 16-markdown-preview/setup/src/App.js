import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  return (
    <main>
      <section className="markdown">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="input"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </main>
  );
}

export default App;
