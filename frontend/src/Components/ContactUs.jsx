export default function ContactUs() {
    return (
        <div className="flex flex-col">
            <div className=" bg-orange-700 p-24 grid grid-cols-2 text-white font-grotesk">
                <div>
                    <p className="text-6xl pb-2 font-bold">Have a Query? We </p>
                    <p className="text-6xl font-bold pb-16">are here to help</p>
                    <button className="bg-white text-orange-700 border rounded-full py-3 px-5 hover:bg-orange-700 hover:text-white transition-all">Submit a query</button>
                </div>
        
                <div className="flex flex-col items-end">
                    <div className="flex items-end pb-12">
                        <img src="phone-ringing.png" className="h-12 w-12 mr-2 animate-vibrateZigzag"/>
                        <p className="text-5xl">0863-2344700</p>
                    </div>
                    <p className="text-lg">Vignan team is available in from </p>
                    <p className="text-lg">Mon - Sat 9:00 am to 6:00 pm</p>
                </div>
            </div>
            <div className="px-24 py-16">
                <div>
                    <div>
                        <p className="text-5xl font-bold pb-5">Contact Us</p>
                        <p className="w-9/12 text-lg text-gray-600">Connect with us effortlessly; your inquiries, feedback, and curiosity are always welcome – reach out through our Contact Us section for prompt assistance and information</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 place-self-center gap-24 pt-12">
                    <div>
                        <p className="text-2xl font-semibold pb-3">The HoD</p>
                        <p className="pb-3 text-gray-600">For industrial interactions, projects, consultancy, etc. please contact, the HoD</p>
                        <p className="font-bold">hodcse@vignan.ac.in</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold pb-3">Phone & Email</p>
                        <p className="pb-3 text-gray-600">For direct assistance, dial our dedicated helpline – your gateway to information and support at your fingertips</p>
                        <p className="pb-3 font-bold">08632344700-479</p>
                        <p className="pb-3 font-bold">+91 9912514034</p>
                        <p className="font-bold">deocse@vignan.ac.in</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold pb-3">Feedback</p>
                        <p className="pb-3 text-gray-600">Kindly send your valuable suggestions to</p>
                        <p className="pb-3 font-bold">feedback-survey@vignan.ac.in</p>
                        <div className="pb-3 text-red-500 underline">
                            <a href="#">Student-Exitfeedback</a>
                        </div>
                        <div className="pb-3 text-red-500 underline">
                                <a href="#">Feedback/Survey</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-24 py-16 bg-emerald-100 flex flex-col text-red-500">
                <p className="text-5xl font-bold pb-5">How to reach</p>
                <p className="w-9/12 pb-5  text-gray-600">The Department of Computer Science & Engineering is located in the VFSTR N-Block III-V Floors, easily accessible from the Vignan University RTC Bus Stop. From the bus stop, proceed straight for another 150 meters, passing by Vignan's Foundation for Science, Technology, and VFSTR Library on your left. Continue walking until you reach the N-Block, which will be on your left. The entire walk is approximately 150 meters and should take around 1 minute. The institute also offers free transport within the campus to help you reach different locations conveniently. </p>
                
                <a className="text-red-500 bg-white w-36 p-2 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                    href="https://www.google.com/maps/dir/NTR-Vignan+Library,+Vadlamudi,+Andhra+Pradesh/Vignans+Foundation+for+Science,+Technology+%26+Research+(Deemed+to+be+University),+Guntur+-Tenali+Rd,+Vadlamudi,+Andhra+Pradesh+522213/@16.2325837,80.5486126,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x3a4a09546c8f9331:0xf412131c3a90bd41!2m2!1d80.5483396!2d16.233184!1m5!1m1!1s0x3a4a0953a362f945:0x11aa0de9063844ab!2m2!1d80.5509079!2d16.2333746!3e0?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Locate Us</a>
                
                <div className="w-full mt-12 mb-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d476.3066785370769!2d80.5483396!3d16.233184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m14!3e0!4m3!3m2!1d16.233184!2d80.5483396!4m3!3m2!1d16.2333746!2d80.5509079!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
