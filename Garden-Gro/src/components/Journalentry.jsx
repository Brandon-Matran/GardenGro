import { JournalSubmit } from "./JournalSubmit";

const JournalEntry = (props) => {
  const { journal } = props;
  if (!journal) {
    return <div>Loading...</div>; // Or any fallback UI
  }

  return (
    <>
      <div className="m-16 flex justify-center items-center flex-col rounded-lg w-80 ">
        <div className="m-4 border border-white"></div>
        <div className="border border-yellow-400">
          <div className="border border-white">
            <img
              className="border border-white object-cover"
              src={journal.imageUrl}
            ></img>
          </div>
          <div className="flex justify-center">{journal.date}</div>
          <div className="p-4 text-sm">{journal.entry}</div>
        </div>
      </div>
    </>
  );
};

export default JournalEntry;
