import Head from 'next/head';
import Web3 from 'web3';
import { useState } from 'react';

import 'bulma/css/bulma.css';
import styles from '../styles/VendingMachine.module.css';


const VendingMachine = () => {
  const [error, setError] = useState("");
  let web3;

  const connectWalletHandler = async () => {
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        web3 = new Web3(window.ethereum);
      } catch(err) {
        setError(err.message);
      }
    } else {
      // metamask not installed
      console.log("Please install the MetaMask");
    }
  }

  return(
    <div className={styles.main}>
      <Head>
        <title>Brendan | Decentralized Vending Machine</title>
        <meta name="description" content="Blockchain vending machine app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar mt-4 mb-4">
        <div className="container">
          <div className="navbar-brand">
            <h1>Brendan</h1>
          </div>
          <div className="navbar-end">
            <button onClick={connectWalletHandler} className="button is-primary">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      <section>
        <div className="container">
          <p>Placeholder Text</p>
        </div>
      </section>

      <section>
        <div className="containerhas-text-danger">
          <p>{error}</p>
        </div>
      </section>

    </div>
  );
}

export default VendingMachine;
