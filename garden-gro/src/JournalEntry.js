import { useState } from "react";

export const JournalEntry = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function createEntry(event) {
    event.preventDefault();
    const data = { title, content };
    let url = "http://localhost:8081/journals";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const newEvent = await response.json();
      console.log(newEvent);
      setTitle("");
      setContent("");
    }
  }

  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={createEntry}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="input-title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="input-title"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              type="text"
              placeholder="My Planting Thoughts"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="entry"
            >
              Entry
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="entry"
              type="text"
              placeholder="Warm and sunny day, 80 degrees Farenheit..."
              value={content}
              onChange={(e)=> setContent(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"

            >
              Create Entry
            </button>
            <button>Clear</button>
          </div>
        </form>
      </div>
    </>
  );
};
