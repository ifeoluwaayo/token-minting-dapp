import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const ERC20MainMenu = ({ onClickCreate, importToken }) => {
	const [tokenAddress, setTokenAddress] = useState("");

	return (
		<Grid
			container
			spacing={2}
			className="flex flex-col h-[90vh] items-center justify-center">
			<div className="flex gap-4 flex-col">
				<Grid
					item
					xs={12}
					className="flex flex-col items-center justify-center ">
					<Button
						variant="contained"
						sx={{ m: 1 }}
						onClick={() => onClickCreate()}>
						Create Token
					</Button>
				</Grid>

				<Grid
					item
					xs={12}
					className="flex flex-col items-center justify-center ">
					<h6 className="text-bold text-sm text-blue-500">OR</h6>
				</Grid>

				<Grid
					item
					xs={12}
					className="flex flex-col items-center justify-center">
					<TextField
						label="Token address"
						sx={{ m: 1, width: "30ch" }}
						placeholder="0x"
						size="small"
						value={tokenAddress}
						onChange={(e) => setTokenAddress(e.target.value)}
					/>
					<Button
						variant="contained"
						sx={{ m: 1 }}
						onClick={() => importToken(tokenAddress)}>
						Import token
					</Button>
				</Grid>
			</div>
		</Grid>
	);
};

export default ERC20MainMenu;
