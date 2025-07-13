async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const Factory = await ethers.getContractFactory("FileStorage");
  const contract = await Factory.deploy();
  await contract.deployed();

  console.log("FileStorage deployed to:", contract.address);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
