/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { ChangeEvent, FocusEventHandler } from "react";

interface ITextFieldProps {
  id: string;
  name: string;
  type?: string;
  placeholder: string;
  onChange: (event: ChangeEvent) => void;
  value: string;
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export default ITextFieldProps;
