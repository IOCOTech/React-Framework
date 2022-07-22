/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export interface IGrid {
	children: ReactNode;
	sx?: SxProps;
	spacing?: number;
}

export default IGrid;
