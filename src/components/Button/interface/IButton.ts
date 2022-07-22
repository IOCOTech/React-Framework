/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { SyntheticEvent } from "react";

interface IButton {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (event?: SyntheticEvent<any, any>) => void;
  //	onClick: (event?: SyntheticEvent<any, any>) => void;
}

export default IButton;
