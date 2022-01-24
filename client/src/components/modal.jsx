import  React, { useEffect, useRef } from "react";
// import Link from "next/link";
// import Web3 from "web3";
import Icon from "./icons/icon";

const WalletModal = ({showWalletModal, setShowWalletModal, connectApp, setIsConnecting, isConnecting, setConnection }) => {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      if (showWalletModal && ref.current && !ref.current.contains(e.target)) {
        setShowWalletModal(false);
        setIsConnecting(!isConnecting);
        setConnection(true);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showWalletModal]);

  return ( 
    <div className="select_wallet_modal_overlay">
      <div className="select_wallet_modal-container" ref={ref}>
        <div>
          <div className="modal-top-sect">
            <p className="font-large">Select Wallet</p>
            <p className="text-smaller">
              Please select a wallet to connect to the dapp:
            </p>
          </div>
          <button
            onClick={connectApp}
            className="wallet-cont"
          >
            <Icon name="metamask" size={40} />
            <p className="font-larger"> Metamask </p>
          </button>
          <button
            onClick={connectApp}
            className="wallet-cont"
          >
            <Icon name="walletConnect" size={40} />
            <p className="font-larger"> ConnectWallet </p>
          </button>
        </div>
        <div className="modal-bottom-sect">
          <p className="text-smaller">
            New to Ethereum network?
          </p>
            <a href='https://www.google.com'>
              <div className="flex">
                <p className="text-smallest">
                  Learn more about Crypto Wallet &nbsp;
                </p>
              </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;

// const Login = ({ onLogin, setIsConnected }) => {
//   const [showWalletModal, setShowWalletModal] = useState(false);
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [provider, setProvider] = useState();
//   const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);

//   const toggleWalletModal = () => {
//     setShowWalletModal(!showWalletModal);
//   };

//   useEffect(() => {
//     setProvider(detectProvider());
//   }, []);

//   useEffect(() => {
//     const provider = detectProvider();
//     if (provider) {
//       if (provider !== window.ethereum) {
//         console.error(
//           "Not window.ethereum provider.  Do you have multiple wallets installed ?"
//         );
//       }
//       setIsMetaMaskInstalled(true);
//     }
//   }, []);

//   // Detect Provider
//   const detectProvider = () => {
//     let provider;
//     if (window.ethereum) {
//       // Modern DApp browsers
//       provider = window.ethereum;
//     } else if (window.web3) {
//       // Legacy dapp browsers
//       provider = window.web3.currentProvider;
//     } else {
//       // Non-dapp browsers
//       console.warn("No Ethereum browser detected! Check out MetaMask");
//     }
//     return provider;
//   };

//   const onLoginHandler = async () => {
//     const provider = detectProvider();
//     setIsConnecting(true);
//     await provider.request({
//       method: "eth_requestAccounts",
//     });
//     setIsConnecting(false);
//     onLogin(provider);
//   };

//   return (
//     <>
//       {isMetaMaskInstalled && (
//         <div className="start_page">
//           <p className="mb-3">Connect your wallet to the application</p>
//           <button
//             onClick={toggleWalletModal}
//             className="btn btn-black"
//             type="button"
//           >
//             {!isConnecting && "Connect Wallet"}
//             {isConnecting && "Loading...."}
//           </button>
//           {showWalletModal && (
//             <ConnectWallet
//               onLoginHandler={onLoginHandler}
//               showWalletModal={showWalletModal}
//               setShowWalletModal={setShowWalletModal}
//             />
//           )}
//         </div>
//       )}

//       {!isMetaMaskInstalled && (
//         <div>
//           <p className="start_page">
//             <a href="https://metamask.io/" target="_blank" rel="noreferrer">
//               Install MetaMask
//             </a>
//           </p>
//         </div>
//       )}
//     </>
//   );
// };

