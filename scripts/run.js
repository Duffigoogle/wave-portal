const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();

    let addressList;
    addressList = await waveContract.getAllSendersAddress();

    let userAddTxn = await waveContract.senderAddress();
    await userAddTxn.wait();

    addressList = await waveContract.getAllSendersAddress();

  };

  //hre Hardhat Runtime Environment
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();

// const main = async () => {
//     const waveContratFactory = await headers.ethers.getContractFactory("WavePortal"); 
//     const waveContract = await waveContratFactory.deploy();  
//     await waveContract.deployed(); 

//     console.log("Contract deployed to:", waveContract.address);
// };


// const runMain = async () => {
//     try {
//         await main();
//         process.exit(0);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// };

// runMain();