import WhiteSpace from "../components/WhiteSpace"
import { useState, useEffect } from "react";

function Home(){
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="font-sans bg-mauve min-h-[100vh] w-full">
            <WhiteSpace isLoaded={isLoaded}/>
            <div className={`min-h-[55vh] flex justify-center items-end mb-12`}>
                <div className="flex flex-col justify-center items-center text-center pt-12 gap-12">
                    <h1 className={`text-light text-bold text-8xl p-8 rounded-xl relative ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}>
                        Chase Jenkins 
                        <span className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-light"></span>
                        <span className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-light"></span>
                    </h1>
                    <div className={`max-w-[35vw] text-black bg-light text-bold rounded-xl flex-col p-4 gap-2 ${isLoaded ? 'animate-fadeInTwo' : 'opacity-0'}`}>
                        <p className="text-xl underline pb-4">Software Engineer</p>
                        <p className="text-lg">Hello, I am a software engineer with a passion for creating innovative, reliable, and useful software. Feel free to reach out via any of the listed methods and thank you for stopping by!</p>
                    </div>
                </div>
            </div>


            <div className={`flex justify-center ${isLoaded ? 'animate-fadeInThree' : 'opacity-0'}`}>
                <div className="flex w-[75vw] px-36 justify-evenly items-center pt-12 text-light text-lg">
                    {/* <button className="px-4 py-2 bg-light text-black rounded hover:underline">Contact</button> */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="128px" viewBox="0 -960 960 960" width="128px" fill="#DDC8C4"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/></svg>
                    <span className="mx-2 border-t-2 border-light flex-grow "></span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="128px" viewBox="0 -960 960 960" width="128px" fill="#DDC8C4"><path d="M679.89-117q-5.89 0-11.8-1.33-5.92-1.34-11.09-4.67l-135-79q-10.62-6.12-16.31-16.44Q500-228.76 500-241v-157q0-12.24 5.69-22.56Q511.38-430.88 522-437l135-79q5.21-3.33 11.15-4.67 5.95-1.33 11.9-1.33t11.4 1.67q5.46 1.66 10.55 4.33l135 79q10.73 6.12 16.87 16.44Q860-410.24 860-398v157q0 12.24-6.13 22.56Q847.73-208.12 837-202l-135 79q-5.16 2.67-10.68 4.33-5.53 1.67-11.43 1.67ZM400-485q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM80-164v-94q0-35 17.5-63t50.5-43q72-32 133.5-46T400-424h23q-6 14-9 27.5t-5 32.5h-9q-58 0-113.5 12.5T172-310q-16 8-24 22.5t-8 29.5v34h269q5 18 12 32.5t17 27.5H80Zm320-381q39 0 64.5-25.5T490-635q0-39-25.5-64.5T400-725q-39 0-64.5 25.5T310-635q0 39 25.5 64.5T400-545Zm0-90Zm9 411Zm169-188 102 60 102-60-102-59-102 59Zm127 228 105-59.7V-370l-105 62v124Zm-155-60 105 62v-125.15L550-368v124Z"/></svg>
                    {/* <button className="px-4 py-2 bg-light text-black rounded hover:underline">Experience</button> */}
                    <span className="mx-2 border-t-2 border-light flex-grow"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="128px" viewBox="0 -960 960 960" width="128px" fill="#DDC8C4"><path d="M160-40v-220h100v-110H160v-220h100v-110H160v-220h260v220H320v110h100v80h160v-80h260v220H580v-80H420v80H320v110h100v220H160Zm60-60h140v-100H220v100Zm0-330h140v-100H220v100Zm420 0h140v-100H640v100ZM220-760h140v-100H220v100Zm70-50Zm0 330Zm420 0ZM290-150Z"/></svg>
                    {/* <button className="px-4 py-2 bg-light text-black rounded hover:underline">Projects</button> */}
                </div>
            </div>
        </div>
    )
}

export default Home