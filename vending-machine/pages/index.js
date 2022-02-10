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
        You can get that from one of testnet Rinkeby faucets:
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
        A donut will costs 1 Gwei.
      </p>
      <p className="font-Ubuntu">
        Good, now let's go get you some donuts.
      </p>
      <Link href="/vending-machine">
        <button className="font-Ubuntu bg-brendanPink p-2 text-brendanWhite">To Veding Machine</button>
      </Link>
      <p className="font-Ubuntu">
        Brendan was inspired by a character from game Cyberpunk 2077.
      </p>


      <Footer />
    </div>
  )
}
