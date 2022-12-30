import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {

  const [ catFact, setCatFact ] = useState('');
  const [ activity, setActivity ] = useState('');
  const [ quote, getQuote ] = useState('');
  const [ dog, setDog ] = useState('');
  const [ joke, setJoke ] = useState({});
  const [ loveCalcResult, setLoveCalcResult ] = useState({});

  useEffect(() => {
    getCatFact();
    console.log("cfact",catFact);
  }, [])

  const getCatFact = () => {
    axios.get('https://catfact.ninja/fact')
    .then((response) => {
      const fact = response.data.fact;
      console.log(response.data.fact);
      setCatFact(fact);

    })
    .catch(error => console.error(`Error: ${error}`));
  }
  
  return (
    <>
      <Head>
        <title>The Bored Hoomans App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen w-screen bg-slate-800'>
        
          {/* <div className='text-red-100 text-3xl'>{JSON.stringify(catFact)}</div> */}

          <div className='p-10'>
            <h1 className='text-center font-extrabold text-4xl p-4 text-indigo-100'>The Bored Hoomans App</h1>
          </div>

          {/* All Cards Container */}
          <div className='flex flex-col justify-center bg-yellow-100'>
            
           <div className='group space-y-4'>

             {/* Card Container Row 1 */}
             <div className='flex flex-row justify-center space-x-4'>
              {/* Card */}
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl h-48 flex flex-col justify-center items-center'>
                <div className='cursor-pointer h-24 max-h-28 w-28 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>😸</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Generate Cat Facts</h3>
                </div>
              </div>

              {/* Card */}
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl h-48 flex flex-col justify-center items-center'>
                <div className='cursor-pointer h-24 max-h-28 w-28 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>⚽</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Suggest Something To Do</h3>
                </div>
              </div>

              {/* Card */}
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl h-48 flex flex-col justify-center items-center'>
                <div className='cursor-pointer h-24 max-h-28 w-28 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>💬</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Get Random Quotes</h3>
                </div>
              </div>
              
            </div> 

            {/* 🐶😂😍 */}
            {/* Card Container Row 2 */}
            <div className='flex flex-row justify-center space-x-4'>
              {/* Card */}
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl h-48 flex flex-col justify-center items-center'>
                <div className='cursor-pointer h-24 max-h-28 w-28 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>😸</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Generate Cat Facts</h3>
                </div>
              </div>

              {/* Card */}
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl h-48 flex flex-col justify-center items-center'>
                <div className='cursor-pointer h-24 max-h-28 w-28 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>⚽</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Suggest Something To Do</h3>
                </div>
              </div>

              {/* Card */}
              <div className='cursor-pointer group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 bg-slate-700 p-8 rounded-xl h-48 flex flex-col justify-center items-center'>
                <div className='cursor-pointer h-24 max-h-28 w-28 flex flex-col justify-center items-center text-center space-y-4'>
                  <h4 className='cursor-pointer text-4xl'>💬</h4>
                  <h3 className='cursor-pointer text-l font-bold text-indigo-100'>Get Random Quotes</h3>
                </div>
              </div>
              
            </div> 

            
            

           </div>

          </div>

      </div>  
    </>
  )
}
