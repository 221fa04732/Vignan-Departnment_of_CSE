import HeaderButton from "./HeaderButton";

// Faculty data
const faculty = [
    {
        src: "homeprofile1.png",
        name: "Dr. A. K. Sharma",
        position: "Professor",
        description:
            "An expert in computer science with over 20 years of academic and research experience. Specializes in AI and data analysis.",
    },
    {
        src: "homeprofile2.png",
        name: "Dr. M. K. Sharma",
        position: "Professor",
        description:
            "An expert in computer science with over 20 years of academic and research experience. Specializes in AI and data analysis.",
    },
    {
        src: "homeprofile3.png",
        name: "Dr. A. K. Sharma",
        position: "Professor",
        description:
            "An expert in computer science with over 20 years of academic and research experience. Specializes in AI and data analysis.",
    },
];

// HomeFaculty Component
export default function HomeFaculty() {
    return (
        <div className="px-16 bg-gray-100 pb-16">
            <p className="text-5xl text-center font-bold font-grotesk mb-12">
                Faculty Members
            </p>
            <div className="grid grid-cols-4 gap-4 place-items-center">
                {/* Description Section */}
                <div>
                    <p className="pb-6 text-gray-600">
                        The Department is home to a team of highly qualified and experienced faculty members dedicated to academic excellence and cutting-edge research. Our faculty actively engages in a wide range of research areas, including artificial intelligence, data science, cyber security, and software engineering. With a strong focus on innovation and hands-on learning, they mentor students to excel in both academics and industry. The faculty's commitment to advancing knowledge ensures that students are well-prepared to meet the evolving demands of the tech industry.
                    </p>
                    <div className="border border-2xl border-red-600 rounded-xl px-7 py-2 w-40 text-red-600">
                        <HeaderButton path="/Faculty" name="Explore More" />
                    </div>
                </div>

                {faculty.map((member, index) => (
                    <Card key={index} faculty={member} />
                ))}

               

            </div>
        </div>
    );
}

// Card Component
function Card({ faculty }) {
    const { src, name, position, description } = faculty; // Destructure faculty object

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex flex-col items-center">
                <img
                    src={src}
                    alt={name} // Accessibility
                    className="w-24 h-24 rounded-full shadow-md mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {name}
                </h4>
                <p className="text-sm text-gray-500">{position}</p>
                <p className="text-center text-gray-600 text-sm mt-3">
                    {description}
                </p>
            </div>
        </div>
    );
}
