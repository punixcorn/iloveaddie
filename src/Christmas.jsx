import { useState } from "react";

function ChristmasPage() {
  const [pick, setPick] = useState("Have an awesome new year's");
  const words = [
    "I love you!",
    "Tastes like chicken",
    "Boobies!",
    "Damn that's crazy",
    "Reverse Woman!",
    "I need to take a shit",
    "Oh, my balls!",
    "fucking fuck fuckiddy fuck fuck",
    "calm down",
    "Fuck them ",
    "shit!",
    "People are stupid",
    "You have a nice ass",
    "I'm gonna cum",
    "Linux!!!~~",
    "I'm tired",
    "Sweet dreams",
    "Addie",
    "Eat!",
    "No",
    "I'm irritated",
    "Stop it",
    "Go home",
    "I sent a snap",
    "I don't have money",
    "I'm gonna be a Dad?",
    "Okay",
    'Console.log("x,y")',
  ];

  const getRandomInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max - 1);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const getRandomElement = () => {
    let size = words.length;
    return getRandomInt(0, size);
  };

  const handlePick = () => {
    let y = getRandomElement();
    let x = words[y];
    setPick(x);
  };

  return (
    <div className="bg-[url('./assets/blue.jpg')] h-[100vh] w-[100vw] lg:[length:100vw_100vh] md:[length:100vw_100vh] bg-[length:100vw_100vh] text-center flex flex-col justify-center items-center">
      {/* header */}

      <div className="w-full text-center py-2 text-[#ffcdc3] font-christmas_font sm:text-xl">
        Merry ChristMas !
      </div>

      {/*body*/}
      <div className="w-80 p-1 mt-5 text-[#ffdadc] text-center ">
        {/*text*/}
        <p className="font-body_font text-white ">
          {/*<p className=" font-body_font text-blue-50 p-6 isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5"> */}
          Hey, I know I don&apos;t do much {/*<br />*/}
          and this is very low effort, but I wanted {/* <br /> */} to let you
          know, it been a wonderful year with you. <br />
          <br />
          We may have had so many ups and downs, but at the end it was just{" "}
          {/* <br /> */}
          <span className="font-semibold">
            Me and you
          </span> against everything {/* <br /> */} And that&apos;s how
          it&apos;s going to be always
          <br />
          <br />
          <span className="text-white text-xl">
            I love you soo soo Much Addie
          </span>
        </p>

        <p className="text-orange-300 font-korean_font font-bold text-[30px]">
          애디, 정말 사랑해. 세상은 우리 손에 달렸어요.
        </p>

        {/*<p className="text-white font-poppins_font text-[1rem]">
           The world is in our hands.
         </p>

        <p className="text-white font-newyear_font text-xl">
          Have an awesome new years
        </p>

        */}
        {/*game*/}
        <div className="m-2 font-bold" onClick={handlePick}>
          {pick}
        </div>
        {/*
        <button
          className="h-16 w-16 mt-4 px-2 py-2 bg-[#ffdadc] text-orange-300 rounded-full hover:bg-white"
          onClick={handlePick}
        >
          Tap
        </button>
        */}
      </div>

      {/*footer end
       */}
      <footer className="w-full text-right py-1 text-white mt-3 mr-10">
        <span className="text-sm font-newyear_font">- from Hyun to Addie</span>
      </footer>
    </div>
  );
}

export default ChristmasPage;
