
export default function Navbar() {
    return(
        <div className="w-full h-12 px-4 sm:h-16 bg-black flex justify-between items-center sm:px-20 text-light">
            <p className="text-xs sm:text-xl">Chase Jenkins</p>
            <div className="flex items-center gap-4 sm:gap-8 md:gap-16 text-xs sm:text-lg h-full">
                <p className="hover:cursor-pointer hover:underline">
                    Experience
                </p>
                <p className="hover:cursor-pointer hover:underline">
                    Projects
                </p>
                <p className="hover:cursor-pointer hover:underline">
                    Contact
                </p>
            </div>
        </div>
    )    
}