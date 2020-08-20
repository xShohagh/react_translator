import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Bengali", value: "bn" },
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
];
const Translate = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState(options[0].value);
  return (
    <div>
      <h1 className="text-center">Shohagh's Translator</h1>
      <div className="form-group mt-3">
        <label htmlFor="InputText">Enter Text in English:</label>
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Dropdown
        label="Select A Language"
        onSelectedChange={setLanguage}
        options={options}
      />
      <Convert text={text} languageCode={language} />
    </div>
  );
};

export default Translate;
