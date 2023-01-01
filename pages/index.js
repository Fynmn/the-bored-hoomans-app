import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [loveCalcResult, setLoveCalcResult] = useState({});

  const [bodyText, setBodyText] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState('');
  const [currentFunction, setCurrentFunction] = useState();
  const [isDog, setIsDog] = useState(false);
  const [isQuote, setIsQuote] = useState(false);
  const [dogURL, setDogURL] = useState('');
  const [originator, setOriginator] = useState();
  const [punchline, setPunchline] = useState();


  //Add save option to everything

  // Function to Get Cat Fact
  const getCatFact = (e) => {
    axios.get('https://catfact.ninja/fact')
      .then((response) => {
        const fact = response.data.fact;
        console.log(response.data.fact);
        setBodyText(fact);

      })
      .catch(error => console.log(`Error: ${error}`));

    setModalTitle('😸Cat Fact')
    setCurrentCard('New Cat Fact');
    setIsDog(false);
    setPunchline();
    setOriginator();
    setShowModal(true);
    setCurrentFunction(() => getCatFact);
  }

  // Function to Get Activity
  const getActivity = (e) => {
    //add type
    axios.get('https://www.boredapi.com/api/activity')
      .then((response) => {
        const act = response.data.activity;
        console.log(response.data.activity);
        setBodyText(act.replace(/"/g, ''));

      })
      .catch(error => console.log(`Error: ${error}`));

    setModalTitle('⚽Suggest Something To Do')
    setCurrentCard('New Activity');
    setIsDog(false);
    setPunchline();
    setOriginator();
    setShowModal(true);
    setCurrentFunction(() => getActivity);
  }

  // Function to Get a Quote
  const getQuote = (e) => {
    //add originator
    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        'X-RapidAPI-Key': '0276ecdf12msha462c6a4425fefap15d786jsn08e2da0450c3',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      const quote = response.data.content;
      const originator = response.data.originator.name;
      setBodyText(quote);
      setOriginator(originator);
    }).catch(error => console.error(`Error: ${error}`));

    setModalTitle('💬Generate a Quote')
    setCurrentCard('New Quote');
    setIsDog(false);
    setPunchline();
    setShowModal(true);
    setCurrentFunction(() => getQuote);
  }

  // Function to Get Dog Image
  const getDog = (e) => {
    //add download option
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        const url = response.data.message;
        setDogURL(url)
      })
      .catch(error => console.log(`Error: ${error}`));

    setModalTitle('🐶Generate a Dog Photo')
    setCurrentCard('New Photo');
    setIsDog(true);
    setOriginator();
    setPunchline();
    setShowModal(true);
    setCurrentFunction(() => getDog);
  }

  // Function to Get Joke
  const getJoke = (e) => {
    //add punchline
    //add type
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then((response) => {
        const setup = response.data.setup;
        const punchline = response.data.punchline;
        setPunchline(punchline);
        console.log(setup);
        setBodyText(setup);
      })
      .catch(error => console.log(`Error: ${error}`));
    
    setModalTitle('😂Give Me a Random Joke')
    setCurrentCard('New Joke');
    setIsDog(false);
    setOriginator();
    setShowModal(true);
    setCurrentFunction(() => getJoke);
  }

  return (
    <>
      <Head>
        <title>The Bored Hoomans App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen w-screen bg-slate-800'>

        {/* <div className='text-red-100 text-3xl'>{JSON.stringify(catFact)}</div> */}

        <div className='p-10 text-center'>
          {/* <h1 className='text-center font-extrabold text-3xl xl:text-4xl text-indigo-100'> */}
          <h1 className="cursor-pointer font-extrabold text-3xl xl:text-4xl text-indigo-100 hover:bg-gradient-to-r hover:from-blue-600 hover:via-green-500 hover:to-indigo-400 hover:inline-block hover:text-transparent hover:bg-clip-text transition duration-150">
            The Bored Hoomans App
          </h1>
        </div>

        {/* Container */}
        <div>
          <div className='flex flex-wrap justify-center items-center group'>
            {/* Card */}
            <button onClick={getCatFact}>
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl m-4 active:border-4'>
                <div className='cursor-pointer h-24 max-h-24 w-24 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>😸</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Generate Cat Facts</h3>
                </div>
              </div>
            </button>

            {/* Card */}
            <button onClick={getActivity}>
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl m-4 active:border-4'>
                <div className='cursor-pointer h-24 max-h-24 w-24 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>⚽</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Suggest Something To Do</h3>
                </div>
              </div>
            </button>

            {/* Card */}
            <button onClick={getQuote}>
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl m-4 active:border-4'>
                <div className='cursor-pointer h-24 max-h-24 w-24 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>💬</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Generate a Quote</h3>
                </div>
              </div>
            </button>

            {/* Card */}
            <button onClick={getDog}>
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl m-4 active:border-4'>
                <div className='cursor-pointer h-24 max-h-24 w-24 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>🐶</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Generate a Dog Photo</h3>
                </div>
              </div>
            </button>

            {/* Card */}
            <button onClick={getJoke}>
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl m-4 active:border-4'>
                <div className='cursor-pointer h-24 max-h-24 w-24 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>😂</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Give Me a Random Joke</h3>
                </div>
              </div>
            </button>

            {/* Card */}
            {/* <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl m-4 active:border-4'> */}
            <div className='opacity-30 cursor-pointer group-hover:scale-[0.85] bg-slate-700 p-8 rounded-xl m-4'>
              <div className='cursor-pointer h-24 max-h-24 w-24 flex flex-col justify-center items-center text-center space-y-4'>
                <h4 className='cursor-pointer text-4xl'>😍</h4>
                <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Love Calculator</h3>
              </div>
            </div>
          </div>
        </div>


        {/* improve modal UI */}
        {/* close modal when clicking outside */}
        {showModal && isDog ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-4/5 mx-auto"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {JSON.stringify(modalTitle).replace(/"/g, '')}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex flex-auto justify-center">
                    <Image
                      src={dogURL}
                      alt="Picture of a Dog"
                      width={300}
                      height={200}
                      style={{
                        maxHeight: '100%',
                        width: 'auto',
                      }}
                    />

                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={currentFunction}
                    >
                      {JSON.stringify(currentCard).replace(/"/g, '')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : showModal ? <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-4/5 mx-auto"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {JSON.stringify(modalTitle).replace(/"/g, '')}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {JSON.stringify(bodyText).replace(/["\r\n]/g, '').replaceAll('\\', '')}
                  </p>
                  <p>{originator && "— " + originator}</p>
                  <p className='font-bold text-lg text-green-500 my-4'>{punchline && punchline}</p>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={currentFunction}
                  >
                    {JSON.stringify(currentCard).replace(/"/g, '')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </> : null
        }
      </div>
    </>
  )
}
