import WhiteSpace from "../components/WhiteSpace";
import { useState, useEffect } from "react";

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="font-sans bg-mauve min-h-[100vh] w-full">
      <WhiteSpace isLoaded={isLoaded} />
      <div className={`min-h-[55vh] flex justify-center items-end mb-12`}>
        <div className="flex flex-col justify-center items-center text-center pt-12 gap-12">
          <h1
            className={`text-light text-bold text-8xl p-8 rounded-xl relative ${
              isLoaded ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            Chase Jenkins
            <span className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-light"></span>
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-light"></span>
          </h1>
          <div
            className={`max-w-[35vw] text-black bg-light text-bold rounded-xl flex-col p-4 gap-2 ${
              isLoaded ? "animate-fadeInTwo" : "opacity-0"
            }`}
          >
            <p className="text-xl underline pb-4">Software Engineer</p>
            <p className="text-lg">
              Hello, I am a software engineer with a passion for creating
              innovative, reliable, and useful software. Feel free to reach out
              via any of the listed methods and thank you for stopping by!
            </p>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-center ${
          isLoaded ? "animate-fadeInThree" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-5 w-[75vw] px-36 gap-8 pt-12 text-light text-lg place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="128px"
            viewBox="0 -960 960 960"
            width="128px"
            fill="#DDC8C4"
          >
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z" />
          </svg>
          <span
            className="border-t-2 border-light w-full"
            style={{ maxWidth: "128px" }}
          ></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="128px"
            viewBox="0 -960 960 960"
            width="128px"
            fill="#DDC8C4"
          >
            <path d="M0-240v-53q0-38.57 41.5-62.78Q83-380 150.38-380q12.16 0 23.39.5t22.23 2.15q-8 17.35-12 35.17-4 17.81-4 37.18v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.86-3.5-37.43T765-377.27q11-1.73 22.17-2.23 11.17-.5 22.83-.5 67.5 0 108.75 23.77T960-293v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480-390q-79 0-129.5 23.5T300-305v5ZM149.57-410q-28.57 0-49.07-20.56Q80-451.13 80-480q0-29 20.56-49.5Q121.13-550 150-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T149.57-410Zm660 0q-28.57 0-49.07-20.56Q740-451.13 740-480q0-29 20.56-49.5Q781.13-550 810-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T809.57-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.35-60Q506-540 523-557.35t17-43Q540-626 522.85-643t-42.5-17q-25.35 0-42.85 17.15t-17.5 42.5q0 25.35 17.35 42.85t43 17.5ZM480-300Zm0-300Z" />
          </svg>
          <span
            className="border-t-2 border-light w-full"
            style={{ maxWidth: "128px" }}
          ></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="128px"
            viewBox="0 -960 960 960"
            width="128px"
            fill="#DDC8C4"
          >
            <path d="M480-375 375-480l105-105 105 105-105 105Zm-85-294-83-83 168-168 168 168-83 83-85-85-85 85ZM208-312 40-480l168-168 83 83-85 85 85 85-83 83Zm544 0-83-83 85-85-85-85 83-83 168 168-168 168ZM480-40 312-208l83-83 85 85 85-85 83 83L480-40Z" />
          </svg>
          <p className="text-center col-start-1 col-end-2 text-xl">Developer</p>
          <p className="text-center col-start-3 col-end-4 text-xl">
            Collaborator
          </p>
          <p className="text-center col-start-5 col-end-6 text-xl">Architect</p>
        </div>
      </div>

      <div>
        <p>Changes Again</p>
      </div>
    </div>
  );
}

export default Home;
