/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { tertiaryColor, textfieldBorder } from "global/variables";

const TextFieldStyled = styled(TextField)(() => ({
	marginTop: 10,
	marginBottom: 10,
	borderRadius: textfieldBorder,
	// "& label.Mui-focused": {
	// 	color: "white"
	// },

	"& .MuiOutlinedInput-root": {
		"&:hover fieldset": {
			borderColor: tertiaryColor,
		},
		"&.Mui-focused fieldset": {
			borderColor: tertiaryColor,
		},
	},
}));

export { TextFieldStyled };
