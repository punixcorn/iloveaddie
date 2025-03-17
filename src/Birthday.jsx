import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { ReactFloatingBalloons } from "react-floating-balloons";

function BirthdayPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [pick, setPick] = useState("I love you");
  const words = [
    "I don't believe in a God, but if he made a mistake putting you through all this",
    "Hon!",
    "Hey, everything I do is for you and you only, that's how much important you are",
    "This day might just be another day for you, but its when my world came into this world",
    "You are very Beautify",
    "It's all gonna be okay, trust me",
    "I love you soo soo Much",
  ];

  useEffect(() => {
    //const hasVisted = localStorage.getItem("visited");
    const hasVisted = false;

    const emojis = [
      "💖",
      "💝",
      "💗",
      "💕",
      "❤️",
      "💜",
      "🎉",
      "🎊",
      "🥳",
      "🎁",
      "🌟",
    ];

    const confettiShapes = emojis.map((emoji) =>
      confetti.shapeFromText({ text: emoji, scalar: 1 }),
    );

    setTimeout(() => {
      if (!hasVisted) {
        confetti({
          particleCount: 1000,
          spread: 100,
          gravity: 0.5,
          origin: { y: 1 },
          scalar: 1,
          shapes: confettiShapes,
        });
      }
      //localStorage.setItem("visited", true);
    }, 1000);
  }, []);
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

  // Function to fetch a random "cat birthday gif" from GIPHY
  const fetchRandomCatBirthdayGif = async () => {
    // const apiKey = "BdZzn86IcbRTPn4fPwyOZa3wsOuAhbQC"; // Replace with your GIPHY API key
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cat+birthday&rating=G`,
      );
      const data = await response.json();

      const mp4Url = data.data.images?.original?.mp4;
      const final = mp4Url || data.data.images?.original?.url;
      console.log(final);
      setVideoUrl(final);
    } catch (error) {
      console.error("Error fetching GIF:", error);
      setVideoUrl("");
    }
  };
  const handlePlayVideo = async () => {
    await fetchRandomCatBirthdayGif();
    setShowVideo(true);
  };

  return (
    <div className="relative bg-[url('./assets/sparkles.jpg')] h-screen w-screen bg-cover bg-center">
      {/* Decorative elements  h-screen w-screen overflow-hidden*
    -- <div className="relative bg-[url('./assets/white.jpg')] h-[100vh] w-[100vw] lg:[length:100vw_100vh] md:[length:100vw_100vh] bg-[length:100vw_100vh]">
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 bg-yellow-300 rounded-full opacity-70 blur-3xl"></div>
      </div>
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-24 h-24 bg-green-300 rounded-full opacity-70 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-24 h-24 bg-blue-300 rounded-full opacity-70 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
        <div className="w-32 h-32 bg-orange-300 rounded-full opacity-70 blur-3xl"></div>
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-12">
        <h2 className="text-3xl text-white opacity-70">Celebrate!</h2>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-12">
        <h2 className="text-3xl text-white opacity-70">ex=elebrate!</h2>
      </div>
*/}
      {/* Balloons overlay 
      <div className="absolute inset-0 w-full h-full flex justify-center items-left pointer-events-none overflow-hidden">
        <ReactFloatingBalloons
          count={25} // More balloons
          msgText="Happy Birthday Addie!"
          colors={["red", "yellow", "purple", "blue"]}
          popVolumeLevel={1}
          style={{ width: "100vw", height: "100vh" }} // Ensures full coverage
        />
      </div>*/}

      {/* Balloons overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: "translateX(-5%)" }}
      >
        <ReactFloatingBalloons
          count={20} // More balloons
          msgText="Happy Birthday Addie!"
          colors={["red", "yellow", "purple", "blue"]}
          popVolumeLevel={0.5}
        />
      </div>
      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-1 text-center">
        <header className="mb-8">
          <h1 className="text-2xl md:text-7xl font-extrabold text-white drop-shadow-lg font-poppins_font">
            Happy Birthday Addie!
          </h1>
        </header>
        <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-2xl">
          <p className="text-white text-md font-serif font-hand_written">
            Today is all about you. Happy Birthday Love, You're the most
            sweetest human I ever got the chance of knowing, everything about
            you is perfect, I wouldn't have gone for anyone else if I had to do
            this a million times over.
          </p>
          <p className="mt-4 text-white text-md font-hand_written">
            Embrace the moment and remember; each day is a gift, maybe not to
            you at this moment, but to everyone's lives you have made such a
            huge impact on, and I cannot stress enough, how much you're loved.
          </p>
          <p
            className="mt-6 text-sm font-bold text-yellow-200 cursor-pointer font-body_font"
            onClick={handlePick}
          >
            {pick}
          </p>
          <button
            onClick={handlePlayVideo}
            className="mt-6 px-4 py-2 font-poppins_font text-white rounded  hover:text-xl transition"
          >
            Press Me!
          </button>
        </div>
        <footer className="absolute bottom-4 right-4 text-white text-sm font-hand_written">
          <span className="italic">- With love, from Hon</span>
        </footer>
      </div>

      {/* Modal Popup for Video */}
      <AnimatePresence>
        {showVideo && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
            ></motion.div>
            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-2xl w-full mx-4">
                <video
                  controls
                  autoPlay
                  className="mx-auto w-full h-auto rounded-lg"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={() => setShowVideo(false)}
                  className="mt-4 px-4 py-2 text-white rounded hover:text-xl transition"
                >
                  Close Video
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BirthdayPage;
