/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { Grid } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GridItem({ ...props }: any) {
	const { children, sx, ...rest } = props;

	return (
		<Grid item sx={sx} {...rest}>
			{children}
		</Grid>
	);
}
