import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'
import Web3 from 'web3';
import { useState, useEffect } from 'react';
import vendingMachineContract from '../blockchain/vending.js';


import styles from '../styles/VendingMachine.module.css';

import Footer from '../components/Footer.js';


const VendingMachine = () => {
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [inventory, setInventory] = useState("");
  const [myDonutCount, setMyDonutCount] = useState("");
  const [buyCount, setBuyCount] = useState("");

  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);

  const [vmContract, setVmContract] = useState(null);
  const [stockCount, setStockCount] = useState("");


  useEffect(() => {
    if (vmContract) getInventoryHandler();
    if (vmContract && address) getMyDonutCountHandler();
  }, [vmContract, address])

  const getInventoryHandler = async () => {
    const inventory = await vmContract.methods.getVendingMachineBalance().call()
    setInventory(inventory)
  }

  const getMyDonutCountHandler = async () => {
    const count = await vmContract.methods.donutBalances(address).call()
    setMyDonutCount(count);
  }

  const updateDonutQvt = event => {
    setBuyCount(event.target.value);
  }

  const buyDonutHandler = async () => {
    try {
      await vmContract.methods.purchase(buyCount).send({
        from: address,
        value: web3.utils.toWei('1', 'gwei') * buyCount
      });
      setSuccessMsg("Donut Purchased!");

      if (vmContract) getInventoryHandler();
      if (vmContract && address) getMyDonutCountHandler();
    }catch(err){
      setError(err.message);
    }
  }

  const connectWalletHandler = async () => {
    if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        web3 = new Web3(window.ethereum);
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAddress(accounts[0]);
        const vm = vendingMachineContract(web3);
        setVmContract(vm);
      } catch(err) {
        setError(err.message);
      }
    } else {
      // metamask not installed
      console.log("Please install the MetaMask");
    }
  }

  const updateStockCount = event => {
    setStockCount(event.target.value);
    console.log(stockCount);
  }

  const restockDonutHandler = async () => {
    try {
      const inventory = await vmContract.methods.restock(stockCount).send({
        from: address,
        gasPrice: '20000000000'
      });
    }catch(err){
      console.log(err);
    }
  }

  return(
    <div className="w-full bg-brendanWhite">
      <Head>
        <title>Brendan | Decentralized Vending Machine</title>
        <meta name="description" content="Blockchain vending machine app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="p-2 mt-0 mb-4 max-w-7xl mx-auto">
        <div className="w-full flex justify-between items-center">
          <div className="navbar-brand cursor-pointer">
            <Link href="/">
              <h1 className="text-2xl md:text-4xl font-Infinite text-brendanPink transition duration-300 hover:text-brendanLightPink">BRENDAN</h1>
            </Link>
          </div>
          <div className="navbar-end">

            {/* connect to MetaMask */}
            <button onClick={connectWalletHandler} className="font-Ubuntu bg-brendanPink p-2 text-brendanWhite transition duration-300 hover:bg-brendanLightPink">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      {/* eyes */}
      <div className="w-full flex justify-around items-center mb-2 md:mb-4">
        <div className="w-1/4 md:w-1/6">
          <div className="w-full p-2 md:p-4 py-4 md:py-6 bg-brendanBrown mb-2 rounded-lg animate-[updown_10s_infinite]"></div>
          <div className="w-full border-4 border-white rounded-lg">
            <div className="w-full p-2 md:p-4"></div>
            <div className="w-full p-1 md:p-2 flex justify-center items-center bg-brendanBrown rounded-bl-lg rounded-br-lg overflow-x-hidden">
              <div className="w-1/8 p-2 md:p-4 px-4 md:px-8 bg-white rounded-lg animate-[wiggle_20s_infinite]"></div>
            </div>
          </div>
        </div>

        <div className="w-1/4 md:w-1/6">
          <div className="w-full p-2 md:p-4 py-4 md:py-6 bg-brendanBrown mb-2 rounded-lg animate-[updown_10s_infinite]"></div>
          <div className="w-full border-4 border-white rounded-lg">
            <div className="w-full p-2 md:p-4"></div>
            <div className="w-full p-1 md:p-2 flex justify-center items-center bg-brendanBrown rounded-bl-lg rounded-br-lg overflow-x-hidden">
              <div className="w-1/8 p-2 md:p-4 px-4 md:px-8 bg-white rounded-lg animate-[wiggle_20s_infinite]"></div>
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

      {/* pictures */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center bg-brendanPink py-6">
        <div className="w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <div className="w-3/4 md:w-1/2 animate-[twitch_10s_infinite]">
            <img className="object-contain" src="images/donut.png" alt="cyberpunk donut" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <div className="w-full md:w-2/3">
            <h4 className="text-center md:text-left text-4xl lg:text-6xl text-white font-Infinite">HyperDonut!</h4>
            <h4 className="text-center md:text-left text-4xl lg:text-5xl text-white font-Infinite mb-2 font-bold">ハイパードーナツ！</h4>
            <p className="text-center md:text-left text-2xl text-white mb-6">Hyper Flavor for Hyper Pleasure*</p>
            <div className="w-full flex flex-col md:flex-row items-center mb-8">
              <h5 className="text-2xl lg:text-4xl text-white mr-4">Only</h5>
              <h4 className="text-4xl md:text-3xl lg:text-5xl text-white font-Infinite">1 Gwei</h4>
              <span className="ml-2 text-white">+ Gas Fee</span>
            </div>
            <p className="text-center md:text-left text-white">*Contains: Soy, Shellfish, Waterbug and Artificial Dye</p>
          </div>
        </div>
      </div>

      {/* half and half */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center bg-brendanPink">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="">
            <h2 className="text-white text-4xl text-center md:text">Donuts Available: {inventory}</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center bg-brendanLightGreen p-4 md:rounded-tl-lg">
          <div className="w-full p-4 border-4 border-zinc-900 bg-brendanDarkGreen rounded-lg">
            <div className="">
              <h2 className="text-center md:text-left text-white text-2xl">Your donuts: {myDonutCount}</h2>
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
              <input onChange={updateDonutQvt} className="input" type="text" placeholder="Enter amount" />
            </div>
            <button onClick={buyDonutHandler} className="button is-primary bg-brendanLightGreen border-2 border-white text-white p-4 rounded-lg transition duration-300 hover:bg-brendanPink">
              Buy Donut
            </button>
          </div>
          <h4>
            Bear in mind, it may take several minutes for your donut to be served,<br />
            depending on the Blockchain traffic.
          </h4>
        </div>
      </section>

      {/* restock */}
      <section>
        <div>
          <label>Restock</label>
          <div>
            <input onChange={updateStockCount} className="input" type="text" placeholder="Stock Donuts" />
          </div>
          <button onClick={restockDonutHandler} className="">
            Restock
          </button>
        </div>
      </section>

      <section>
        <div className="container has-text-danger">
          <p>{error}</p>
        </div>
      </section>
      <section>
        <div className="container has-text-danger">
          <p>{successMsg}</p>
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default VendingMachine;
