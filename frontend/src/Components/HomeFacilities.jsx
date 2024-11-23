import HeaderButton from "./HeaderButton"


export default function HomeFacilities()
{
    return (<div className="px-16 pb-16">
        <p className="text-5xl text-center font-bold font-grotesk mb-12">Explore Facilities to Support you</p>
        <div className="grid grid-cols-3 gap-6 place-items-center">
            <div>
                <p className="pb-6 text-gray-600">The department offers a comprehensive range of state-of-the-art facilities, providing an optimal environment for academic research, personal growth, and career development. Our infrastructure includes over 30 smart lecture halls, a rich department library, and cutting-edge labs for hands-on experience in various computing disciplines. With over 850 computers and specialized labs for various computing disciplines, students are prepared to tackle real-world engineering challenges.</p>

                <div className="border border-2xl border-red-600 rounded-xl px-7 py-2 w-40 text-red-600"><HeaderButton path="/Facilities" name="Explore More"/></div>
            </div>

            <div className="relative inline-block col-span-2 ">
                <img src="nblock.jpg" className="w-full h-full" />
                <div className="absolute bottom-0 left-0 text-white text-4xl font-bold font-serif bg-gradient-to-t from-black to-transparent w-full">
                    <p className="px-10 pt-6 pb-4">Nagarjuna Block</p>
                </div>
            </div>

            <div className="relative inline-block">
                <img src="Lab.jpg" className="w-full h-full" />
                <div className="absolute bottom-0 left-0 text-white text-4xl font-bold font-serif bg-gradient-to-t from-black to-transparent w-full">
                    <p className="px-10 pt-6 pb-4">ClassRoom</p>
                </div>
            </div>

            <div className="relative inline-block">
                <img src="DeptLibrary.jpg" className="w-full h-full" />
                <div className="absolute bottom-0 left-0 text-white text-4xl font-bold font-serif bg-gradient-to-t from-black to-transparent w-full">
                    <p className="px-10 pt-6 pb-4">Department Library</p>
                </div>
            </div>

            <div className="relative inline-block">
                <img src="Conferencehall.jpg" className="w-full h-full" />
                <div className="absolute bottom-0 left-0 text-white text-4xl font-bold font-serif bg-gradient-to-t from-black to-transparent w-full">
                    <p className="px-10 pt-6 pb-4">Conference Hall</p>
                </div>
            </div>

        </div>
    </div>)
}