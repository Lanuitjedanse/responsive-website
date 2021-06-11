export default function Button({ children, toggleQuestionnaire }) {
  return (
    <>
      <button
        className="bg-geers-green text-white text-xl rounded-lg p-4 font-bold hover:bg-geers-green-hover"
        onClick={toggleQuestionnaire}
      >
        {children}
      </button>
    </>
  );
}
