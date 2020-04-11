import ThemeContext from "./theme/ThemeContext";
import ThemeProvider from "./theme";
import React, { useState } from "react";
import InfoBox from "./components/InfoBox/InfoBox";

export default { title: "./components/InfoBox/InfoBox" };

export const InfoBoxStory = () => {
  const [theme, setTheme] = useState("reply");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider>
        <InfoBox
          title="title will be displayed here"
          value="value will be displayed here"
          icon=" 😎 icon"
        />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
