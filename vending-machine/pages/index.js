import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <div className="bg-brendanWhite">
      <Head>
        <title>Brendan | Decentralized Vending Machine</title>
        <meta name="description" content="Blockchain vending machine app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* eyes */}
      <div className="w-full flex justify-around items-center mb-2 md:mb-4 pt-8">
        <div className="w-1/4 md:w-1/6">
          <div className="w-full p-2 md:p-4 py-4 md:py-6 bg-brendanBrown mb-2 rounded-lg"></div>
          <div className="w-full border-4 border-white rounded-lg">
            <div className="w-full p-2 md:p-4"></div>
            <div className="w-full p-1 md:p-2 flex justify-center items-center bg-brendanBrown rounded-bl-lg rounded-br-lg">
              <div className="w-1/8 p-2 md:p-4 px-4 md:px-8 bg-white rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="w-1/4 md:w-1/6">
          <div className="w-full p-2 md:p-4 py-4 md:py-6 bg-brendanBrown mb-2 rounded-lg"></div>
          <div className="w-full border-4 border-white rounded-lg">
            <div className="w-full p-2 md:p-4"></div>
            <div className="w-full p-1 md:p-2 flex justify-center items-center bg-brendanBrown rounded-bl-lg rounded-br-lg">
              <div className="w-1/8 p-2 md:p-4 px-4 md:px-8 bg-white rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* nose */}
      <div className="w-full flex justify-around items-center pb-8">
        <div className="flex">
          <div className="mx-1 md:mx-2 px-2 md:px-4 py-6 md:py-10 bg-brendanPink rounded-lg"></div>
          <div className="mx-1 md:mx-2 px-2 md:px-4 py-6 md:py-10 bg-brendanPink rounded-lg"></div>
          <div className="mx-1 md:mx-2 px-2 md:px-4 py-6 md:py-10 bg-brendanPink rounded-lg"></div>
          <div className="mx-1 md:mx-2 px-2 md:px-4 py-6 md:py-10 bg-brendanPink rounded-lg"></div>
          <div className="mx-1 md:mx-2 px-2 md:px-4 py-6 md:py-10 bg-brendanPink rounded-lg"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center bg-brendanPink p-4">
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <div className="w-full md:w-1/2">
            <p className="text-white text-xl font-bold">Hi,</p>
            <p className="text-white text-xl font-bold pb-2">my name is</p>
            <h2 className="text-white text-4xl md:text-6xl font-Infinite">BRENDAN</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <div className="w-full md:w-1/2">
            <p className="text-white text-xl font-bold">I am a</p>
            <h1 className="text-white text-4xl">
              Decentralized Vending Machine
            </h1>
          </div>
        </div>
      </div>

      <h2 className="font-Infinite text-brendanPink">BRENDAN</h2>
      <h1 className="font-Ubuntu">Decentralized Vending Machine</h1>
      <p className="font-Ubuntu">
        Hi there, I'm Brendan, decentralized vending machine powered by a smart contract.
      </p>
      <p className="font-Ubuntu">
        My smart contract is deployed on Rinkeby testnet,<br />
        that's the network you should connect your MetaMask to.
      </p>
      <p className="font-Ubuntu">
        If you don't have MetaMask installed yet, no problem, you can get it here:
      </p>
      <a href="https://metamask.io/" className="font-Ubuntu text-brendanPink font-bold">metamask.io</a>
      <p className="font-Ubuntu">
        First, let's get you some test Ether. <br />
        You can get that from one of Rinkeby testnet faucets:
      </p>
      <ul>
        <li><a href="https://faucet.rinkeby.io/" className="font-Ubuntu text-brendanPink font-bold">faucet.rinkeby.io</a></li>
        <li><a href="https://rinkeby.faucet.epirus.io/" className="font-Ubuntu text-brendanPink font-bold">rinkeby.faucet.epirus.io</a></li>
        <li><a href="https://faucets.chain.link/rinkeby" className="font-Ubuntu text-brendanPink font-bold">faucets.chain.link/rinkeby</a></li>
      </ul>
      <p className="font-Ubuntu">
        Now you are ready to buy some donuts. Unfortunately, donuts are not real, this is just a testing phase.<br />
        However, in next version, the donuts you can buy will be NFTs so stay tuned for the latest version of this dApp.
      </p>
      <p className="font-Ubuntu">
        A donut will costs 1 Gwei, plus the Gas fee.
      </p>
      <p className="font-Ubuntu">
        Good, now let's go get you some donuts.
      </p>
      <Link href="/vending-machine">
        <button className="font-Ubuntu bg-brendanPink p-2 text-brendanWhite">To Veding Machine</button>
      </Link>
      <p className="font-Ubuntu">
        Brendan was inspired by a character from the game Cyberpunk 2077.
      </p>


      <Footer />
    </div>
  )
}
