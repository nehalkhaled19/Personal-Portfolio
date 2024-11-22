import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(); // تصدير السياق

export default function ThemeProvider(props) {
 
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || 'dark');

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"; // تغيير الثيم
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // حفظ القيمة الجديدة في localStorage
  };

  useEffect(() => {
    // التأكد من عدم تغيير الـ theme بعد أول تحميل
    console.log("Current theme: ", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
