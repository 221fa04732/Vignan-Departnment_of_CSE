import ReadMore from './ReadMore';
import CollegeDesc from './ReadMore/CollegeDesc';


export default function Faculty() {
    return (
        <div className="grid grid-cols-4 gap-10 place-content-center m-16">
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
            < ReadMore show={<Card />} content={<CollegeDesc/>} />
        </div>
    )
}


function Card() {
    return (
        <div className="flex justify-center items-center">
        <div className="w-64 h-80 perspective">
            <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">
            <div className="absolute w-full h-full backface-hidden">
                <img src="hodsir.png" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="absolute w-full h-full backface-hidden bg-blue-500 text-white flex flex-col justify-center items-center rounded-lg rotate-y-180 p-4">
                <p className="text-2xl font-bold">Dr. HoD Sir</p>
                <p className="text-lg">Department of Computer Science</p>
                <p className="text-lg">Professor</p>
            </div>
            </div>
        </div>
        </div>
    );
}
  