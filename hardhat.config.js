require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const RINKEBY_PRIVATE_KEY1 = process.env.ETH_PRIVATE_KEY;
const MUMBAI_PRIVATE_KEY1 = process.env.POLYGON_PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/7254234f6b504830b6c5af4e6c1df9f7`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY1}`],
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/7254234f6b504830b6c5af4e6c1df9f7`,
      accounts: [`0x${MUMBAI_PRIVATE_KEY1}`],
    },
  },
};
