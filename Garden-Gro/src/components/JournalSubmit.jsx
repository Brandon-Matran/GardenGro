import { useState } from "react";
import supabase from "../lib/supabaseClient";

export const JournalSubmit = (props) => {
  const { onClose } = props;

  const [image, setImage] = useState("");
  const [entry, setEntry] = useState("");
  const [plant, setPlant] = useState("");
  const [maturity, setMaturity] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  async function submitJournal() {
    const { data, error } = await supabase.from("journalentries").insert([
      {
        date: date, // Ensure these column names match your table schema
        imageUrl: image,
        entry: entry,
        plantName: plant,
        daysToMaturity: maturity,
      },
    ]);

    if (error) {
      console.error("Error inserting journal entry:", error);
    } else {
      console.log("Journal entry inserted:", data);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitJournal();

    setPlant("");
    setImage("");
    setEntry("");
    setMaturity(0);
    setDate(new Date().toLocaleDateString()); // Update date to current date for next entry
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-300/60 backdrop-blur-sm z-50">
      <div className="bg-white flex flex-col p-4 h-auto w-full max-w-md items-center rounded-lg shadow-lg z-50">
        <h2 className="text-lg font-semibold mb-4">Make a Journal Entry</h2>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <input
            type="text"
            placeholder="Plant Type"
            value={plant}
            onChange={(e) => setPlant(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Plant Picture"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows={3}
            className="w-full p-2 border rounded"
          ></textarea>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};
