import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Journal } from "./Journal";
import { JournalEntry } from "./JournalEntry";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="journals">
            <Route path="" element={<Journal />} />
            <Route path="post" element={<JournalEntry />} />
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
