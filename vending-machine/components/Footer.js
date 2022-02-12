import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <footer className="bg-brendanLightGreen p-4">
      <div className="bg-brendanDarkGreen p-4 text-brendanWhite rounded-lg mb-4 border-4 border-zinc-900 w-full flex flex-col md:flex-row justify-center items-start">
        <div className="w-full md:w-1/3 mb-4">
          <h4 className="font-Infinite text-2xl">BRENDAN</h4>
          <p>Decentralized Vending Machine</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 flex flex-col md:justify-center md:items-center">
          <h5 className="text-xl">Follow Us</h5>
          <ul className="">
            <li className="group"><a href="https://github.com/SJuras" className="flex group"><span><FaGithub className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span> <p className="transition duration-300 group-hover:text-brendanPink">GitHub</p></a></li>
            <li className="group"><a href="https://www.facebook.com/stjepko.juras" className="flex group"><span><FaFacebook className="inline transition duration-300 mr-1 group-hover:text-brendanPink -mt-1" /></span><p className="transition duration-300 group-hover:text-brendanPink">Facebook</p></a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-left md:text-right mb-4">
          <h5 className="text-xl">Useful Links</h5>
          <ul>
            <li className="transition duration-300 hover:text-brendanPink"><a href="https://ethereum.org/en/">Ethereum</a></li>
            <li className="transition duration-300 hover:text-brendanPink"><a href="https://metamask.io/">MetaMask</a></li>
            <li className="transition duration-300 hover:text-brendanPink"><a href="https://en.wikipedia.org/wiki/Web3">What is Web3.0</a></li>
            <li className="transition duration-300 hover:text-brendanPink"><a href="https://docs.soliditylang.org/en/v0.8.11/introduction-to-smart-contracts.html">What is a Smart Contract</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-brendanDarkGreen p-4 text-brendanWhite rounded-lg border-4 border-zinc-900 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; Brendan 2022</p>
        <p>Created with <span><FaHeart className="inline" /></span> by: Sarif-Design</p>
      </div>
    </footer>
  );
}
