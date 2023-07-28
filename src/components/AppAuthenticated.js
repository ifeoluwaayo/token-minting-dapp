import React from "react";
import { Box } from "@mui/system";
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
import ERC20App from "./ERC20/ERC20App";

const AppAuthenticated = () => {
	return (
		<Box className="flex w-full bg-blue-50">
			<CssBaseline />
			<AppBar position="fixed" className="sticky top-0">
				<Toolbar className="flex items-center justify-around">
					<Typography variant="h6" noWrap component="div">
						Create Your Own ERC-20 Token
					</Typography>
					<h1 className="text-md">
						Built with 💖 by{" "}
						<a
							href="https://adelaja-ayomide.vercel.app"
							className="animate-pulse text-sm text-bold text-gray-900">
							Ayomide Adelaja
						</a>
					</h1>
				</Toolbar>
			</AppBar>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
				<Toolbar />
				<ERC20App />
			</Box>
		</Box>
	);
};

export default AppAuthenticated;
