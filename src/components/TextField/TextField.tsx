/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import ITextFieldProps from "./interface/ITextFieldProps";
import { TextFieldStyled } from "./textfieldStyled";

export default function TextField({
	id,
	name,
	type,
	placeholder,
	onChange,
	value,
	onBlur,
}: ITextFieldProps) {
	return (
		<TextFieldStyled
			id={id}
			name={name}
			label={placeholder}
			onChange={onChange}
			value={value}
			onBlur={onBlur}
			fullWidth
			margin="normal"
			required
			variant="outlined"
			type={type}
		/>
	);
}
