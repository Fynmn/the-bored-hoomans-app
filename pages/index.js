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

export default function Home() {
  return (
    <>
      <Head>
        <title>The Booored Hoomans App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl mx-auto flex flex-col min-h-screen bg-slate-800">
        {/* <div className='text-red-100 text-3xl'>{JSON.stringify(catFact)}</div> */}

        <div className="flex-grow pb-10">
          <div className="p-10 text-center">
            {/* <h1 className='text-center font-extrabold text-3xl xl:text-4xl text-indigo-100'> */}
            <h1 className="cursor-pointer font-extrabold text-3xl xl:text-4xl text-indigo-100 hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition duration-150">
              The Bored Hoomans App
            </h1>
          </div>

          {/* Container */}
          <div>
            <div className="flex flex-wrap justify-center items-center group mx-20 lg:mx-2">
              <CatFact></CatFact>
              <ToDo></ToDo>
              <Quote></Quote>
              <DogPhoto></DogPhoto>
              <Joke></Joke>
              <LoveCalculator></LoveCalculator>
            </div>
          </div>
        </div>

        <div className="w-full bg-slate-900 h-20 flex flex-col justify-center items-center gap-y-4 text-white py-24 sm:py-16">
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
          <span class="flex flex-wrap justify-center px-16 items-center">
            <p class="mr-1">Copyright</p>
            <p class="text-lg mr-1 flex">©</p>
            <p class="mr-1">2023 The Booored Hoomans App.</p>
            <p class="">All rights reserved.</p>
          </span>
        </div>
      </div>
    </>
  );
}
