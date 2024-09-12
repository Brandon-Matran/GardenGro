import { useState } from "react";
import initialJournal from "../initial-journal";
import JournalEntry from "./JournalEntry"; // Ensure this matches the file name

export const JournalSubmit = (props) => {
  const {onClose} = props;
  const [journal, setJournal] = useState(initialJournal);
  const [image, setImage] = useState("");
  const [entry, setEntry] = useState("");
  const [plant, setPlant] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());

  // const journalItems = journal.map((j, idx) => (
  //   <JournalEntry key={idx} journal={j} />
  // ));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      date: date, // Use the date state here
      imageUrl: image,
      entry: entry,
    };
    setJournal([...journal, newEntry]);
    setPlant("");
    setImage("");
    setEntry("");
    setDate(new Date().toLocaleDateString()); // Update date to current date for next entry
  };

  return (
    <>
      <div className="flex justify-center items-center fixed bg-gray-300/60 backdrop-blur-sm h-full w-full top-0">
        <div className="border-white-800 bg-white flex flex-col h-80 w-80 items-center justify-center rounded-lg">
          <div>Make a Journal Entry</div>

          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="Plant Type"
                value={plant}
                onChange={(e) => setPlant(e.target.value)}
              />
              <input
                placeholder="Plant Picture"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                rows={3} // Fixed typo here
                className="w-full"
              ></textarea>
            </div>
            <div className="border border-red-200 items-center flex justify-between px-6">
              <button type="submit">Submit</button>
              <button onClick={onClose}>Close</button>
            </div>
          </form>
        </div>
        {/* <div>{journalItems}</div> */}
      </div>
    </>
  );
};
