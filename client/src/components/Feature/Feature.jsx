import { useState } from "react";
import { featureList } from "../../utils/filterData";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, slideAnimation } from "../../utils/motion";
// Card component for each feature
const Card = ({ imageSrc, title, description, index }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      // initial={{ opacity: 0, y: -100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay: index * 0.5, duration: 1 }}
      {...slideAnimation("down", index * 0.5)}
      className={`transform transition duration-300 pt-4  ${
        index === 1 ? "bg-secondary1 scale-110" : ""
      } p-6 hover:z-10 border-black px-[1rem] w-[24rem] pt-[3rem] pb-[1.5rem] flex justify-evenly items-center flex-col rounded-3xl`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div>
        <div className="p-[1rem]">
          <img className=" mx-auto " src={imageSrc} alt="Features Image" />
          <h2 className="text-2xl font-bold  mb-6">{title}</h2>
        </div>
      </div>
      <p className="text-secondary4 text-xl">{description}</p>
      <a className={`pt-4 underline ${hover ? "text-primary1" : ""} `} href="/features">
        Learn More
      </a>
    </motion.div>
  );
};

// Feature page component
const Feature = () => {
  return (
    <motion.div className="text-center w-[100%] max-h-full m-auto    flex flex-col justify-center items-center">
      <div>
        <button
          disabled
          className=" text-white font-bold bg-primary1 px-6 py-4 border  rounded-full "
        >
          Features
        </button>
      </div>
      <div>
        <h1 className="text-[3.35rem] leading-tight font-extrabold font-Nunito mt-[2rem]">
          Save 10000s of expensive <br />
          coder hours
        </h1>
      </div>

      <div className="text-center grid grid-cols-3 grid-rows-1  m-auto justify-evenly  mt-[4rem] gap-x-[4rem] ">
        {featureList.map((feature, index) => (
          <Card
            key={index}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Feature;
