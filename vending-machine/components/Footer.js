import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  return (
    <footer>
      <div>
        <div>
          <h4>BRENDAN</h4>
          <p>Decentralized Vending Machine</p>
        </div>
        <div>
          <h5>Follow Us</h5>
          <ul>
            <li><a href=""><FaGithub /> GitHub</a></li>
            <li><a href=""><FaFacebook /> Facebook</a></li>
          </ul>
        </div>
        <div>
          <h5>Useful Links</h5>
          <ul>
            <li><a href="https://ethereum.org/en/">Ethereum</a></li>
            <li><a href="https://metamask.io/">MetaMask</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Web3">What is Web3.0</a></li>
            <li><a href="https://docs.soliditylang.org/en/v0.8.11/introduction-to-smart-contracts.html">What is a Smart Contract</a></li>
          </ul>
        </div>
      </div>
      <div>
        <p>&copy; Brendan 2022</p>
        <p>Created with <FaHeart /> by: Sarif-Design</p>
      </div>
    </footer>
  );
}
