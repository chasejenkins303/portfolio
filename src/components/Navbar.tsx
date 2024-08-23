
export default function Navbar() {
    return(
        <div className="w-full h-16 bg-black flex justify-between items-center px-20 text-light">
            <p className="text-xl">Chase Jenkins</p>
            <div className="flex items-center gap-16 text-lg h-full">
                <p className="hover:cursor-pointer hover:underline">
                    Contact
                </p>
                <p className="hover:cursor-pointer hover:underline">
                    Experience
                </p>
                <p className="hover:cursor-pointer hover:underline">
                    Projects
                </p>
            </div>
        </div>
    )    
}