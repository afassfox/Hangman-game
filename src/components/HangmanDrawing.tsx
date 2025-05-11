const Head = (
  <div className="h-14 w-14 border-8 border-black rounded-full absolute top-[46px] -right-[23px]"></div>
);
const Body = (
  <div className="w-[10px] h-[100px] bg-black absolute right-0 top-[100px]"></div>
);
const RightArm = (
  <div
    className="w-[100px] h-[10px] absolute bg-black top-[130px] -right-[100px] 
	-rotate-[30deg] origin-bottom-left "
  ></div>
);
const LeftArm = (
  <div
    className="w-[100px] h-[10px] absolute bg-black top-[130px] right-[10px] 
	rotate-[30deg] origin-bottom-right "
  ></div>
);
const RightLeg = (
  <div
    className="w-[100px] h-[10px] absolute bg-black top-[190px] -right-[90px] 
	rotate-[60deg] origin-bottom-left "
  ></div>
);
const LeftLeg = (
  <div
    className="w-[100px] h-[10px] absolute bg-black top-[190px] right-0 
	-rotate-[60deg] origin-bottom-right "
  ></div>
);

const BodyPart = [Head, Body, RightArm, LeftArm, LeftLeg, RightLeg];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative">
      {BodyPart.slice(0, numberOfGuesses)}
      <div className=" h-12 w-2.5 absolute bg-black top-0 right-0"></div>
      <div className="h-2.5 w-52 bg-black ml-32"></div>
      <div className="h-[400px] w-2.5 bg-black ml-32"></div>
      <div className="h-2.5 w-3xs bg-black"></div>
    </div>
  );
};
