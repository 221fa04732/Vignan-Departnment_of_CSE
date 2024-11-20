import HeaderButton from "./HeaderButton";

export default function Header() {
    return (
        <div
            className="w-full fixed top-0 z-50 transition-all duration-300 text-gray-900 bg-opacity-100"
            style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
        >
            <div className="container mx-auto flex justify-between items-center bg-transparent">
                <div className="flex items-center space-x-4">
                    <img className="h-20 w-40 rounded-full" src="VignanLogo.svg" alt="Logo" />
                </div>
                <nav className="hidden md:flex space-x-8 text-lg">
                    <HeaderButton path="/Home" name="Home" />
                    <HeaderButton path="/Research" name="Research" />
                    <div className="relative group">
                        <span className="cursor-default hover:text-purple-300 transition duration-300">
                            People
                        </span>
                        <div className="p-2 bg-white text-gray-900 absolute left-0 mt-2 w-48 shadow-xl rounded-md opacity-0 group-hover:opacity-100 transition duration-300 z-30">
                            <HeaderButton path="/Faculty" name="Faculty" className="block px-4 py-2 hover:bg-purple-100" />
                            <HeaderButton path="/Student" name="Students" className="block px-4 py-2 hover:bg-purple-100" />
                            <HeaderButton path="/Alumni" name="Alumni" className="block px-4 py-2 hover:bg-purple-100" />
                            <HeaderButton path="/BoardOfStudies" name="Board of Studies" className="block px-4 py-2 hover:bg-purple-100" />
                        </div>
                    </div>

                    <HeaderButton path="/Events" name="Events" />
                    <HeaderButton path="/Facilities" name="Facilities" />
                    <HeaderButton path="/ContactUs" name="Contact Us" />
                    <a
                        href="#apply"
                        className="hover:text-purple-300 transition duration-300 bg-purple-500 text-white px-4 py-2 rounded-md"
                    >
                        Apply Now
                    </a>
                </nav>
                <div className="md:hidden">
                    <button className="p-2 rounded-md hover:bg-purple-500 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
