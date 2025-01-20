import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";


const Home = lazy(() => import("./Home"));
const Research = lazy(() => import("./Research"));
const Faculty = lazy(() => import("./Faculty"));
const Student = lazy(() => import("./Student"));
const Alumni = lazy(() => import("./Alumni"));
const BoardOfStudies = lazy(() => import("./BoardOfStudies"));
const Events = lazy(() => import("./Events"));
const Facilities = lazy(()=> import("./Facilities"))
const ContactUs = lazy(()=> import("./ContactUs"))

export default function Content() {

    return (
        <div className="pt-16">
            <Suspense fallback={<div>Loading ...</div>}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Research" element={<Research />} />
                    <Route path="/Faculty" element={<Faculty />} />
                    <Route path="/Student" element={<Student />} />
                    <Route path="/Alumni" element={<Alumni />} />
                    <Route path="/BoardOfStudies" element={<BoardOfStudies />} />
                    <Route path="/Events" element={<Events />} />
                    <Route path="/Facilities" element={<Facilities />} />
                    <Route path="/ContactUs" element={<ContactUs />} />                    
                </Routes>
            </Suspense>
        </div>
    );
}

