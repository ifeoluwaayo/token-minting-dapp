import React, { useState, useEffect } from "react";
import AppAuthenticated from "./components/AppAuthenticated";

const Web3 = require("web3");

function App() {
	const [walletConnected, setWalletConnected] = useState(false);
	const [instruction, setInstruction] = useState(
		"Waiting for wallet connection..."
	);

	useEffect(() => {
		const connectWallet = async () => {
			if (!window.ethereum) return;

			try {
				await window.ethereum.send("eth_requestAccounts");
				window.web3 = new Web3(window.ethereum);
			} catch (error) {
				setInstruction(
					"Wallet connection denied, refresh the page to try again."
				);
				return;
			}
			setInstruction("");
			setWalletConnected(true);
		};
		connectWallet();
	}, []);

	return (
		<div className="flex w-full">
			{window.ethereum ? (
				walletConnected ? (
					<AppAuthenticated />
				) : (
					instruction
				)
			) : (
				"Metamask or any other EIP-1102 / EIP-1193 is required to use this app."
			)}
		</div>
	);
}

export default App;
