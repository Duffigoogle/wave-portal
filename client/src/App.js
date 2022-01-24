import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import ABI from "./utils/WavePortal.json";
import HUGGY from "./img/hugggyy.gif";
import WAVVY from "./img/wavehand.gif";
import GRANDMAHUG from "./img/sister.svg";
import HESENDWAVE from "./img/heSendWave.png";
import SHESENDHUG from "./img/sheSendhug.png";
import WalletModal from "./components/modal";

export default function App() {
  const contractAddress = "0x5e575Dd4b4A30dF3E0401360Bd7269bd110B3E98";

  const contractABI = ABI.abi;

  /*
   * Just a state variable we use to store our user's public wallet.
   */

  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(true);
  const [connect, setConnection] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [allWaves, setAllWaves] = useState([]);
  const [allHugs, setAllHugs] = useState([]);
  const [textValue, setTextValue] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      /*
       * First make sure we have access to window.ethereum
       */
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
        setConnection(false);
        setIsConnected(true);
        getAllWaves();
        getAllHugs();
      } else {
        console.log("No authorized account found");
        // setConnection(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const launchWalletModal = () => {
    setShowWalletModal(!showWalletModal);
    setConnection(false);
    setIsConnecting(true);
  };

  /**
   * Implement your connectApp method here
   */

  const connectApp = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setShowWalletModal(false);
      setCurrentAccount(accounts[0]);
      setIsConnected(!isConnected);
    } catch (error) {
      console.log(error);
      setShowWalletModal(false);
      setIsConnecting(false);
      setConnection(true);
    }
  };

  /**
   * Implement your wave method/function here
   */

  const wave = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        /*
         * Execute the actual wave from your smart contract
         */
        const waveTxn = await wavePortalContract.wave();
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        movingWave();

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create a method that gets all waves from your contract
   */
  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const waves = await wavePortalContract.getAllWaves();

        /*
         * We only need address and timestamp in our UI so let's
         * pick those out
         */
        const wavesCleaned = waves.map((wave) => {
          return {
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
          };
        });

        /*
         * Store our data in React State
         */
        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendHug = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalHugs();
        console.log("Retrieved total hug count...", count.toNumber());

        /*
         * Execute the actual hug from your smart contract
         */
        const hugTxn = await wavePortalContract.hug(textValue, {
          gasLimit: 300000,
        });
        console.log("Mining...", hugTxn.hash);

        await hugTxn.wait();
        console.log("Mined -- ", hugTxn.hash);

        count = await wavePortalContract.getTotalHugs();
        console.log("Retrieved total hug count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllHugs = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        /*
         * Call the getAllWaves method from your Smart Contract
         */
        const hugs = await wavePortalContract.getAllHugs();

        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        const hugsCleaned = hugs.map((hug) => {
          return {
            address: hug.hugger,
            timestamp: new Date(hug.timestamp * 1000),
            message: hug.message,
          };
        });

        /*
         * Store our data in React State
         */
        setAllHugs(hugsCleaned);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Listen in for emitter events!
   */
  useEffect(() => {
    let wavePortalContract;

    const onNewWave = (from, timestamp) => {
      console.log("NewWave", from, timestamp);
      setAllWaves((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
        },
      ]);
    };

    const onNewHug = (from, timestamp, message) => {
      console.log("NewHug", from, timestamp, message);
      setAllHugs((prevState) => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message,
        },
      ]);
    };

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      wavePortalContract.on("NewWave", onNewWave);

      wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      wavePortalContract.on("NewHug", onNewHug);
    }

    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
        wavePortalContract.off("NewHug", onNewHug);
      }
    };
  }, []);

  const movingWave = () => {
    let marginBottom = 0;
    let marginLeft = 0;
      setInterval(() => {
        marginBottom += 10;
        marginLeft += 4;
        temple.style.marginBottom = `${marginBottom}px`;
        temple.style.marginLeft = `${marginLeft}px`;
      }, 100);
  }
  /*
   * This runs our function when the page loads.
   */
  useEffect(() => {
    checkIfWalletIsConnected();
    getAllWaves();
    getAllHugs();
  }, [connect]);

  return (
    <>
      {isMetaMaskInstalled && (
        <div className="mainContainer">
          <div className="header">
            <div className="header_content">
              <a
                href="https://www.google.com"
                target="_blank"
                without
                rel="noopener noreferrer"
              >
                <h3 className="title">
                  W<span className="dots"></span>
                  <span className="dots"></span>
                  <span className="title-span">H</span>
                </h3>
              </a>
              <div className="nav">
                {isConnected ? (
                    <div className="header_content-right">
                    <p className="acct-text">
                      <span className='span_acct_text'> Wallet Connected</span> <br />{currentAccount?.substring(0, 9)}
                      {"..."}{" "}
                    </p>
                </div>
                ): (
                  <button className="btn" onClick={launchWalletModal}>
                      {connect && "Connect Wallet"}
                      {isConnecting && "Connecting..."}
                      {/* {isConnected && "Connected"} */}
                    </button>
                )}
              </div>
            </div>
          </div>

          <div className="dataContainer">
            {/* <h1>HUGGY</h1> */}
            <div className="header-sub">
              <span role="img"> 👋 </span> Hey Beautiful Soul!
            </div>

            <div className="bio">
              <p className="text_medium">
                I am Duffigoogle [aka TheLastGoodMan], a blockchain enthusiast
                and I love Tech, Traveling, Sports and Writing. Also, I love
                debugging and giving hugs; that's pretty cool right?
              </p>
            </div>

            <div className="details">
              <div className='theme'>
                <img src={GRANDMAHUG} alt='grandma hug' width='50%'/>
                  <p className="text_big">
                    Goddamnit! <br /> <span className="hug-text">HUGS</span> {" "}
                    are therapeutic...
                  </p>
              </div>
              

              {isConnected && (
                <div>
                  <div className="hugSection">
                    <textarea
                      name="messsage"
                      placeholder="Type your message and send a Hug"
                      type="text"
                      id="message"
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                    />
                    <button className="connectButton" onClick={sendHug}>
                      Send Me a HUG &nbsp;
                      <img src={HUGGY} height="20px" width="20px" alt="huggy" />
                    </button>
                  </div>
                  <br />
                  <button className="waveButton" onClick={wave}>
                    Wave at Me! &nbsp;
                    <img src={WAVVY} height="20px" width="20px" alt="wavvy" className='temple'/>
                  </button>

                  <div className="wave_hug_container">
                    {allWaves.map((wave, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            marginTop: "16px",
                            padding: "8px",
                            border: "1px solid orange",
                            width: "500px",
                          }}
                        >
                          <div>
                            <img
                              src={WAVVY}
                              height="45px"
                              width="45px"
                              alt="wavvy"
                            />
                          </div>
                          <div
                            style={{
                              backgroundColor: "#cec",
                            }}
                          >
                            <div>
                              <span className="span_wav_txt">Address:</span>
                              {wave.address}
                            </div>
                            <div>
                              <span className="span_wav_txt">Time:</span>
                              {wave.timestamp.toString()}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {allHugs.map((hug, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            marginTop: "16px",
                            padding: "8px",
                            border: "1px solid #3c1053ff",
                            display: "flex",
                            width: "600px",
                            marginLeft: "10px",
                            alignContent: "center",
                          }}
                        >
                          <div>
                            <img src={HUGGY} height="100px" alt="huggy" />
                          </div>
                          <div
                            style={{
                              backgroundColor: "#d39bcb",
                            }}
                          >
                            <div>
                              <span className="span_hug_txt">Message:</span>{" "}
                              {hug.message}
                            </div>
                            <div>
                              <span className="span_hug_txt">Address:</span>{" "}
                              {hug.address}
                            </div>
                            <div>
                              <span className="span_hug_txt">Time:</span>{" "}
                              {hug.timestamp.toString()}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/*
               * If there is no currentAccount render this button
               */}
              {!currentAccount && (
                <>
                  <p className="text_sml">
                    Connect your Ethereum wallet to send me a&nbsp; 
                    <span className='hug_color'>hug</span> OR&nbsp;
                    <span className='wave_color'>wave</span> at me.{" "}
                    <br /> And stand a chance to win some ETH
                  </p>
                  <section className='connect_wallet_cont_bottom'>
                    <div className='connect_wallet_img_section'>
                      <div className='img-box img-box-1'>
                        <img src={HESENDWAVE} alt='send_wave' width='30%'/>
                      </div>
                      <div className='img-box img-box-2'>
                        <img src={SHESENDHUG} alt='send_hug'    width='30%' style={{transform: 'scaleX(-1)'}}/>
                      </div>
                    </div>
                      <button className="waveButton" onClick={launchWalletModal}>
                        {connect && "Connect Wallet"}
                        {isConnecting && "Connecting..."}
                      </button>
                  </section>
                </>
              )}
            </div>
          </div>
          {showWalletModal && (
            <WalletModal
              showWalletModal={showWalletModal}
              setShowWalletModal={setShowWalletModal}
              connectApp={connectApp}
              isConnecting={isConnecting}
              setIsConnecting={setIsConnecting}
              setConnection={setConnection}
            />
          )}
        </div>
      )}
      {!isMetaMaskInstalled && (
        <div>
          <p className="start_page">
            <a href="https://metamask.io/" target="_blank" rel="noreferrer">
              Install MetaMask
            </a>
          </p>
        </div>
      )}
    </>
  );
}
