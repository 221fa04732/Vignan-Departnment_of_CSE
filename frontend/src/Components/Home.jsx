import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReadMore from './ReadMore';
import CollegeDesc from './ReadMore/CollegeDesc';
import ReadMoreButton from './ReadMore/ReadMoreButton';
import HodMessage from './ReadMore/HodMessage';
import MissionVision from './ReadMore/MissionVision';
import FAQ from './FAQ';
import CarrerPath from "./CarrerPath";
import Reviews from "./Reviews";
import Outcome from "./Outcome";
import HomeFacilities from "./HomeFacilities";


export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative inline-block col-span-2 ">
        <img src="nblockhome.jpg" className="w-full h-full" />
        <div className="absolute bottom-0 left-0 text-white bg-cyan-700 bg-opacity-90 w-full h-full">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center text-center px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Vignan University
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Department of Computer Science & Engineering
        </h2>
        <p className="text-4xl mb-10 max-w-3xl text-cyan-300 font-semibold">
          Design, Develop, Innovate
        </p >
        <p className="text-md mb-10 max-w-3xl text-start">The Department of CSE is accredited by ABET for six years from 2024 to 2030, by the National accreditation body NBA from 2020-23 and 2023-26. < ReadMore show={<ReadMoreButton />} content={<CollegeDesc/>} /> </p>
        <div className="space-x-6">
          
            
            < ReadMore show={<motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition">Vision & Mission</motion.button>} content={<MissionVision />} />

            < ReadMore show={<motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-4 bg-gray-900 bg-opacity-80 rounded-lg text-lg font-semibold hover:bg-opacity-90 shadow-lg hover:shadow-xl transition">HOD Message</motion.button>} content={<HodMessage />} />
        </div>
      </motion.section>
        </div>
      </div>
      <section
        id="about"
        className="relative py-16 bg-white text-gray-900 w-full">
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            className="text-5xl font-bold font-grotesk mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Programs Offered
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">Under Graduate</h4>
              <p>B.Tech in Computer Science and Engineering</p>
              <div className='pt-5 flex justify-around text-red-500'>
                <button className='underline'>Course details</button>
                <button className='border border-red-500 px-5 py-1 rounded-full'>Apply</button>
              </div>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">Post Graduate</h4>
              <p>M.Tech in Computer Science and Engineering</p>
              <div className='pt-5 flex justify-around text-red-500'>
                <button className='underline'>Course details</button>
                <button className='border border-red-500 px-5 py-1 rounded-full'>Apply</button>
              </div>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h4 className="text-xl font-bold mb-2">Ph.D.</h4>
              <p>Ph.D. in Computer Science and Engineering</p>
              <div className='pt-5 flex justify-around text-red-500'>
                <button className='underline'>Course details</button>
                <button className='border border-red-500 px-5 py-1 rounded-full'>Apply</button>
              </div>
            </div>            
          </motion.div>
        </div>

        < Outcome />

        <CarrerPath />

        <HomeFacilities />

        < Reviews />

        < FAQ />

      </section>

    </div>
  );
};

