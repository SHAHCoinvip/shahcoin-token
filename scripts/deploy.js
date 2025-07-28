const { ethers } = require("hardhat");

async function main() {
  const initialSupply = await ethers.parseEther("20000000"); // 20 million SHAH
  const ShahToken = await ethers.getContractFactory("ShahToken");
  const shahToken = await ShahToken.deploy(initialSupply);
  await shahToken.waitForDeployment();

  console.log(`ShahToken deployed to: ${shahToken.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});












