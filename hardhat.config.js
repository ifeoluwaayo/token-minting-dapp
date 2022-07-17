/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
	solidity: "0.8.3",
	paths: {
		sources: "./src/solidity/contracts",
		tests: "./src/solidity/test",
		artifacts: "./src/solidity/artifacts",
		cache: "./src/solidity/cache",
	},
};
