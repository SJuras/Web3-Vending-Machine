import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brendan | Decentralized Vending Machine</title>
        <meta name="description" content="Blockchain vending machine app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>BRENDAN</h2>
      <h1>Decentralized Vending Machine</h1>
      <p>
        Hi there, I'm Brendan, decentralized vending machine powered by a smart contract.
      </p>
      <p>
        My smart contract is deployed on Rinkeby testnet,<br />
        that's the network you should connect your MetaMask to.
      </p>
      <p>
        If you dont have MetaMask installed yet, no problem, you can get it here:
      </p>
      <a href="https://metamask.io/">metamask.io</a>
      <p>
        First, let's get you some test Ether. <br />
        You can get that from one of testnet Rinkeby faucets:
      </p>
      <ul>
        <li><a href="https://faucet.rinkeby.io/">faucet.rinkeby.io</a></li>
        <li><a href="https://rinkeby.faucet.epirus.io/">rinkeby.faucet.epirus.io</a></li>
        <li><a href="https://faucets.chain.link/rinkeby">faucets.chain.link/rinkeby</a></li>
      </ul>
      <p>
        A donut will costs 1 Gwei.
      </p>
      <p>
        Good, now let's go get you some donuts.
      </p>
      <Link href="/vending-machine">
        To Veding Machine
      </Link>

    </div>
  )
}
