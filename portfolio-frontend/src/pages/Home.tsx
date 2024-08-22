
function Home(){
    return (
        <div className="font-sans bg-mauve min-h-[100vh] w-full">
            <div className="min-h-[55vh] flex justify-center items-end mb-12">
                <div className="flex flex-col justify-center items-center pt-12 gap-12">
                    <h1 className="text-light text-bold text-8xl p-8 rounded-xl relative">
                        Chase Jenkins 
                        <span className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-light"></span>
                        <span className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-light"></span>
                    </h1>
                    <div className="max-w-[35vw] text-mauve bg-light text-bold rounded-xl flex-col p-4 gap-2">
                        <p className="text-xl underline pb-4">Software Engineer</p>
                        <p className="text-lg">Hello, I am a software engineer with a passion for creating innovative, reliable, and useful software. Feel free to reach out via any of the listed methods and thank you for stopping by!</p>
                    </div>
                </div>
            </div>


            <div className="flex px-24 justify-evenly pt-12 text-light text-lg">
                <p className="underline hover:bg-light hover:text-mauve hover:rounded-lg hover:cursor-pointer p-4">Contact</p>
                <p className="underline hover:bg-light hover:text-mauve hover:rounded-lg hover:cursor-pointer p-4">Experience</p>
                <p className="underline hover:bg-light hover:text-mauve hover:rounded-lg hover:cursor-pointer p-4">Projects</p>
            </div>
        </div>
    )
}

export default Home