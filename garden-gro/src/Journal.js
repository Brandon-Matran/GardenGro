import { useEffect, useState } from "react";
import "../src/styles/tailwind.css"


export const Journal = () => {
    const [theme, setTheme] = useState('light')

    useEffect(()=> {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

  useEffect(() => {
    async function fetchJournals() {
      try {
        let url = "http://localhost:8081/journals";
        console.log(url)
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
        }


    } catch (err) {
        console.log(err)
    }}


    fetchJournals();
  }, []);

  return (

<div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl" >
  <div>
  <button onClick={handleThemeSwitch}>Dark Mode</button>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
  );
};
