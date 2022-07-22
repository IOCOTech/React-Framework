/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import React from "react";
import { Grid } from "@mui/material";
// import { IGrid } from "./interface/IGrid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GridContainer({ ...props }: any) {
	const { children, sx, spacing, ...rest } = props;

	return (
		<Grid container sx={sx} spacing={spacing} {...rest}>
			{children}
		</Grid>
	);
}
