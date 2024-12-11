// assets
import blockfuse_logo from "../assets/header/blockfuse_logo.svg";
import nav_line from "../assets/header/nav_line.svg";

// styles
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isFaucet, setIsFaucet] = useState(false);
  const navigate = useNavigate();

  const handleFaucetClick = () => {
    if (isFaucet) {
      navigate('/');
    } else {
      navigate('/faucet');
    }
    setIsFaucet(!isFaucet);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={blockfuse_logo} alt="LOGO" />
        <p>Blockfuse Labs</p>
      </div>

      <img src={nav_line} alt="DIVIDER" className="w-[30%]" />

      <div className="flex items-center gap-4">
        <button className="nav-button btn-bouncy" onClick={handleFaucetClick}>
          {isFaucet ? 'Go Home' : 'Mint Faucet'}
        </button>
        <button className="connect-wallet-btn">Connect wallet</button>
      </div>
    </div>
  );
};

export default Header;