const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.1"),
    });
    await waveContract.deployed();
    console.log("Contract address:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    // Get Contract balance
    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

    //Wave methods and functions
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());

    // let's send a few waves!
    const waveTxn = await waveContract.wave();
    await waveTxn.wait(); // Wait for the transaction to be mined

    const waveTxn2 = await waveContract.wave();
    await waveTxn2.wait(); // Wait for the transaction to be mined

    // waveTxn = await waveContract.connect(randomPerson).wave();
    // await waveTxn.wait(); // Wait for the transaction to be mined

    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

    let allWaves = await waveContract.getAllWaves();
    console.log(allWaves);



    //Hug methods and functions
    let addressList;
    addressList = await waveContract.getAllSendersAddress();
    console.log(addressList.length);

    let userAddTxn = await waveContract.senderAddress();
    await userAddTxn.wait();

    addressList = await waveContract.getAllSendersAddress();



  let hugCount;
  hugCount = await waveContract.getTotalHugs();
  console.log(hugCount.toNumber());

  // Let's send a few hugs!
  const hugTxn = await waveContract.hug("A message for hug1 !");
  await hugTxn.wait(); // Wait for the transaction to be mined

  const hugTxn2 = await waveContract.hug("A message for hug 2!");
  await hugTxn2.wait(); // Wait for the transaction to be mined

  // hugTxn = await waveContract.connect(randomPerson).hug("Another message!");
  // await hugTxn.wait(); // Wait for the transaction to be mined

  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract Balance:", hre.ethers.utils.formatEther(contractBalance));

  let allHugs = await waveContract.getAllHugs();
  console.log(allHugs);

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

