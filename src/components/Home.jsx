import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import {
  slideAnimation,
  headContentAnimation,
  headContainerAnimation,
  headTextAnimation,
} from "../config/motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  return (
    <AnimatePresence>
      <motion.section
        className=" top-1/3 bottom-1/2 flex justify-center items-start flex-col md:py-8 md:px-20 sm:p-8 p-6 max-md:gap-7 absolute z-10"
        {...slideAnimation("left")}
      >
        
        <motion.div
          className="flex flex-col justify-center gap-6"
          {...headContainerAnimation}
        >
          <motion.div {...headTextAnimation}>
            <h1 className="select-none md:text-[6rem] text-[2.5rem] md:leading-[6rem] leading-[4rem] font-black text-gray-50">
              EXPLORE
              <br className="md:block hidden" /> COUNTRIES!
            </h1>
          </motion.div>
          <motion.div
            {...headContentAnimation}
            className="flex flex-col gap-5  sm:max-w-md max-w-xs "
          >
            <p className="font-normal text-gray-600 text-base select-none">
              Discover information from capitals and population demographics to
              famous landmarks, for every nation.
            </p>
            <button
            className="bg-transparent select-none w-full border rounded py-1 text-lg text-white px-4 outline-none"
            onClick={()=> navigate('/search')}
            >
              Search for
            </button>
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}

export default Home;
