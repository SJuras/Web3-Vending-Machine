import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import Web3 from 'web3';
import { useState, useEffect } from 'react';
import vmContract from '../blockchain/vending.js';


import styles from '../styles/VendingMachine.module.css';

import Footer from '../components/Footer.js';


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
    <div className="w-full bg-brendanWhite">
      <Head>
        <title>Brendan | Decentralized Vending Machine</title>
        <meta name="description" content="Blockchain vending machine app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="p-2 mt-0 mb-4">
        <div className="w-full flex justify-between">
          <div className="navbar-brand cursor-pointer">
            <Link href="/">
              <h1 className="text-2xl md:text-4xl font-Infinite text-brendanPink">BRENDAN</h1>
            </Link>
          </div>
          <div className="navbar-end">

            {/* connect to MetaMask */}
            <button onClick={connectWalletHandler} className="font-Ubuntu bg-brendanPink p-2 text-brendanWhite">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* eyes */}
      <div className="w-full flex justify-around items-center">
        <div className="w-1/4 p-2 border-4 border-white rounded-lg flex justify-center items-center bg-brendanBrown">
          <div className="w-1/8 p-4 px-8 bg-white rounded-lg"></div>
        </div>
        <div className="w-1/4 p-2 border-4 border-white rounded-lg flex justify-center items-center bg-brendanBrown">
          <div className="w-1/8 p-4 px-8 bg-white rounded-lg"></div>
        </div>
      </div>

      {/* nose */}
      <div className="w-full flex justify-around items-center pb-8">
        <div className="flex">
          <div className="mx-2 px-4 py-10 bg-brendanPink rounded-lg"></div>
          <div className="mx-2 px-4 py-10 bg-brendanPink rounded-lg"></div>
          <div className="mx-2 px-4 py-10 bg-brendanPink rounded-lg"></div>
          <div className="mx-2 px-4 py-10 bg-brendanPink rounded-lg"></div>
          <div className="mx-2 px-4 py-10 bg-brendanPink rounded-lg"></div>
        </div>
      </div>

      {/* pictures */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center bg-brendanPink py-4">
        <div className="w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <div className="w-3/4 md:w-1/2">
            <img className="object-contain" src="images/donut.png" alt="cyberpunk donut" />
          </div>
        </div>
        <div className="w-1/2 flex items-center">
          <div className="w-full md:w-1/2">
            <h4 className="text-4xl lg:text-6xl text-white font-Infinite">HyperDonut!</h4>
            <p className="text-center md:text text-2xl text-white mb-4">Hyper Flavor for Hyper Pleasure*</p>
            <div className="w-full flex flex-col md:flex-row items-center mb-8">
              <h5 className="text-2xl lg:text-4xl text-white mr-4">Only</h5>
              <h4 className="text-5xl text-white font-Infinite">1 Gwei</h4>
            </div>
            <p className="text-center md:text-left text-white">*Contains: Soy, Shellfish, Waterbug and Artificial Dye</p>
          </div>
        </div>
      </div>

      {/* half and half */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center bg-brendanPink">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="">
            <h2 className="text-white text-4xl">Donuts Available: {inventory}</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center bg-brendanLightGreen p-4 md:rounded-tl-lg">
          <div className="w-full p-4 border-4 border-zinc-900 bg-brendanDarkGreen rounded-lg">
            <div className="">
              <h2 className="text-center md:text-left text-white text-2xl">My donuts: {myDonutCount}</h2>
            </div>
          </div>
        </div>
      </div>

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


      <Footer />
    </div>
  );
}

export default VendingMachine;
