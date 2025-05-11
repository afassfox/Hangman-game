const Keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export const Keyboard = ({
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-2">
      {Keys.map((key) => (
        <button
          key={key}
          className={`w-full border-2 border-black aspect-square text-4xl
            uppercase font-bold rounded-md p-4 transition-colors duration-200 cursor-pointer
            ${
              activeLetter.includes(key)
                ? "bg-black text-white" // Correct guess => Black
                : inactiveLetter.includes(key)
                ? "bg-gray-500 text-white" // Incorrect guess => Gray
                : ""
            } ${
            disabled
              ? "opacity-50 cursor-default" // Disable button when game is over
              : "hover:bg-black hover:text-white"
          }`}
          onClick={() => addGuessedLetter(key)}
          disabled={
            activeLetter.includes(key) ||
            inactiveLetter.includes(key) ||
            disabled
          } // Prevent re-clicking guessed keys
        >
          {key}
        </button>
      ))}
    </div>
  );
};
