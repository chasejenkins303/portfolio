
function Home(){
    return (
        <div className="bg-mauve min-h-[100vh] w-full">
            <div className="min-h-[100vh] flex justify-center items-center">
                <div className="h-20 flex justify-center items-center gap-2">
                    <h1 className="text-text bg-brown text-bold text-8xl p-8 rounded-xl">Chase <br/> Jenkins</h1>
                    <div className="max-w-[35vw] text-mauve bg-light text-bold rounded-xl flex-col p-4 gap-2">
                        <p className="text-3xl underline pb-4">Software Engineer</p>
                        <p className="text-xl">Hello, I am a software engineer with a passion for creating innovative, reliable, and useful software. Feel free to reach out via any of the listed methods and thank you for stopping by!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home