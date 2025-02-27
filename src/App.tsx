import React from "react";
import "./App.css";
import Terminal from "./components/Terminal";

const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Hi there!

Type 'help' to view a list of available commands.
`;

const bannerCondensed =                     
"   ______ __     ___    _____  __  __    ____ ____  \n" + 
"  / ____// /    /   |  / ___/ / / / /   /  _// __ \ \n" +
" / /    / /    / /| |  \__ \ / /_/ /    / / / / / / \n" +
"/ /___ / /___ / ___ | ___/ // __  /_  _/ / / /_/ / \n" +
"\____//_____//_/  |_|/____//_/ /_/(_)/___//_____/ \n" + 

"  \u00A9 " +
getYear();

const prompt = ">";

function App() {
  return (
    <Terminal
      welcomeMessage={welcomeMessage}
      banner={bannerCondensed}
      terminalPrompt={prompt}
    />
  );
}

export default App;
