import { createContext } from "react";

const LanguageContext = createContext({
  language: "pt",
  setLanguage: () => {},
});

export default LanguageContext;
