type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean; // Ensure reveal is controlled by the game logic
};

export const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className="flex  justify-center gap-4 sm:gap-6 md:gap-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span
          className="border-b-black border-b-4 sm:border-b-6 md:border-b-8"
          key={index}
        >
          <span
            style={{
              visibility:
                reveal || guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              color:
                reveal && !guessedLetters.includes(letter) ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
