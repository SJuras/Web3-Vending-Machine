import Head from 'next/head';
import Web3 from 'web3';
import { useState, useEffect } from 'react';
import vmContract from '../blockchain/vending.js';

import 'bulma/css/bulma.css';
import styles from '../styles/VendingMachine.module.css';


const VendingMachine = () => {
  const [error, setError] = useState("");

  const [inventory, setInventory] = useState("");
  const [myDonutCount, setMyDonutCount] = useState("");

  let web3;

  useEffect(() => {
    getInventoryHandler()
  })

  const getInventoryHandler = async () => {
    const inventory = await vmContract.methods.getVendingMachineBalance().call()
    setInventory(inventory)
  }

  const getMyDonutCountHandler = async () => {
    const accounts = await web3.eth.getAccounts()
    const count = await vmContract.methods.donutBalances(accounts[0]).call()
    setMyDonutCount(count);
  }

  const connectWalletHandler = async () => {
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        web3 = new Web3(window.ethereum);
        getMyDonutCountHandler()
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

            {/* connect to MetaMask */}
            <button onClick={connectWalletHandler} className="button is-primary">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* vending machine inventory */}
      <section>
        <div className="container">
          <h2>Vending Machine Inventory: {inventory}</h2>
        </div>
      </section>

      {/* user inventory */}
      <section>
        <div className="container">
          <h2>My donuts: {myDonutCount}</h2>
        </div>
      </section>

      {/* buy donuts */}
      <section>
        <div className="container">
          <div className="field">
            <label className="label">Buy donuts</label>
            <div className="control">
              <input className="input" type="text" placeholder="Enter amount" />
            </div>
            <button className="button is-primary">
              Buy Donut
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container has-text-danger">
          <p>{error}</p>
        </div>
      </section>

    </div>
  );
}

export default VendingMachine;
