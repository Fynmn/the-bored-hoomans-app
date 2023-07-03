import Head from "next/head";
import { Inter } from "@next/font/google";
import CatFact from "../components/CatFact";
import ToDo from "../components/ToDo";
import Quote from "../components/Quote";
import DogPhoto from "../components/DogPhoto";
import Joke from "../components/Joke";
import LoveCalculator from "../components/LoveCalculator";
import { GiRoundStar } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";
import { Variants, motion, useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const cardVariants: Variants = {
    hidden: {
      y: 0.1,
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.25,
        staggerChildren: 0.25,
        when: "beforeChildren",
      },
    },
  };

  const cardChildVariants: Variants = {
    hidden: {
      y: -35,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.2,
      },
    },
  };

  return (
    <>
      <Head>
        <title>The Booored Hoomans App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/BLogo.svg" />
      </Head>

      <div className="max-w-7xl mx-auto flex flex-col min-h-screen bg-slate-800">
        {/* <div className='text-red-100 text-3xl'>{JSON.stringify(catFact)}</div> */}

        <div className="flex-grow pb-10">
          <div className="p-10 text-center">
            {/* <h1 className='text-center font-extrabold text-3xl xl:text-4xl text-indigo-100'> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <h1 className="cursor-pointer font-extrabold text-3xl xl:text-4xl text-indigo-100 hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition duration-150">
                The Bored Hoomans App
              </h1>
            </motion.div>
          </div>

          {/* Container */}
          <div ref={ref}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className=""
            >
              <div className="flex flex-wrap justify-center items-center group mx-20 lg:mx-2">
                <motion.span
                  variants={cardChildVariants}
                  viewport={{ once: true }}
                  className="block"
                >
                  <CatFact></CatFact>
                </motion.span>
                <motion.span
                  variants={cardChildVariants}
                  viewport={{ once: true }}
                  className="block"
                >
                  <ToDo></ToDo>
                </motion.span>
                <motion.span
                  variants={cardChildVariants}
                  viewport={{ once: true }}
                  className="block"
                >
                  <Quote></Quote>
                </motion.span>
                <motion.span
                  variants={cardChildVariants}
                  viewport={{ once: true }}
                  className="block"
                >
                  <DogPhoto></DogPhoto>
                </motion.span>
                <motion.span
                  variants={cardChildVariants}
                  viewport={{ once: true }}
                  className="block"
                >
                  <Joke></Joke>
                </motion.span>
                <motion.span
                  variants={cardChildVariants}
                  viewport={{ once: true }}
                  className="block"
                >
                  <LoveCalculator></LoveCalculator>
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            <div className="w-full bg-slate-900 flex flex-col justify-center items-center gap-y-4 text-white py-20 sm:py-10">
              <div>
                <Image
                  src="BoooredLogo.svg"
                  width={100}
                  height={100}
                  alt="Booored Logo"
                />
              </div>
              <div>
                <a
                  href="https://github.com/Fynmn/the-bored-hoomans-app"
                  target="_blank"
                >
                  <span className="flex flex-col sm:flex-row gap-y-1 sm:gap-y-0 justify-center items-center gap-x-1 hover:text-emerald-200 active:animate-ping text-xs sm:text-base">
                    <div className="flex items-center gap-x-1">
                      <p>Give the repository of this project a</p>
                      <span className="text-yellow-400">
                        <GiRoundStar />
                      </span>
                      <p>on</p>
                      <FaGithub />
                    </div>
                    <div>
                      <p>you amazing hooman 😎</p>
                    </div>
                  </span>
                </a>
              </div>
              <div>
                <span className="flex flex-wrap justify-center px-16 items-center">
                  <p className="mr-1">Copyright</p>
                  <p className="text-lg mr-1 flex">©</p>
                  <p className="mr-1">2023 The Booored Hoomans App.</p>
                  <p className="">All rights reserved.</p>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
