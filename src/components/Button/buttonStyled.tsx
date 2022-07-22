/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { styled } from "@mui/material/styles";
import {
	buttonBorderRadius,
	buttonOkBgColor,
	secondaryColor,
} from "global/variables";
import { Button } from "@mui/material";

const ButtonStyled = styled(Button)(({ theme }) => ({
	background: buttonOkBgColor,
	color: secondaryColor,
	height: 48,
	padding: "0 10px",
	margin: "5px 0px 5px 0px",
	width: 140,
	minWidth: "max-content",
	border: 0,
	borderRadius: buttonBorderRadius,
	fontWeight: "bold",
	"&:hover": {
		background: buttonOkBgColor,
	},
	[theme.breakpoints.down("md")]: {
		width: "100%",
	},
}));

export { ButtonStyled };
