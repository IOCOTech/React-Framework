/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { Typography } from "@mui/material";
import ILabel from "./interface/ILabel";

export default function Label({ children, type, sx }: ILabel) {
	return (
		<Typography sx={sx} variant={type} component="label" noWrap>
			{children}
		</Typography>
	);
}
