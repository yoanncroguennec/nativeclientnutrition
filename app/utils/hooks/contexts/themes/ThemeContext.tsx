import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ThemeProvider_Props {
  children: ReactNode;
}

const themes = {
  light: {
    background: "#fff",
    text: "#000",
  },
  dark: {
    background: "#000",
    text: "#fff",
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  mode: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProvider_Props) => {
  const systemColorScheme = useColorScheme();
  const [mode, setMode] = useState<"light" | "dark">(
    systemColorScheme || "light"
  );

  useEffect(() => {
    (async () => {
      const storedTheme = await AsyncStorage.getItem("theme");
      if (storedTheme) setMode(storedTheme as "light" | "dark");
    })();
  }, []);

  const toggleTheme = async () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    await AsyncStorage.setItem("theme", newMode);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[mode], mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;

// // context/ThemeContext.tsx
// import React, { createContext, useContext, useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// type ThemeType = "light" | "dark";

// interface ThemeContextProps {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextProps>({
//   theme: "light",
//   toggleTheme: () => {},
// });

// export const useThemeContext = () => useContext(ThemeContext);

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setTheme] = useState<ThemeType>("light");

//   useEffect(() => {
//     (async () => {
//       const storedTheme = await AsyncStorage.getItem("theme");
//       if (storedTheme === "dark" || storedTheme === "light") {
//         setTheme(storedTheme);
//       }
//     })();
//   }, []);

//   const toggleTheme = async () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     await AsyncStorage.setItem("theme", newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
