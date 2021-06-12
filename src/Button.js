export default function Button({ children, toggleQuestionnaire, errors }) {
  return (
    <>
      <button
        className={` text-white text-xl rounded-lg p-4 font-bold ${
          errors ? "bg-gray-300 " : "bg-geers-green  hover:bg-geers-green-hover"
        }`}
        onClick={toggleQuestionnaire}
        disabled={errors}
      >
        {children}
      </button>
    </>
  );
}
