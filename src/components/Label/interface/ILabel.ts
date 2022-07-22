/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { ReactNode } from "react";
import { TypographyTypeMap } from "@mui/material/Typography";
import { SxProps } from "@mui/material";

interface ILabel {
  type?: TypographyTypeMap["props"]["variant"];
  children: ReactNode;
  sx?: SxProps;
}

export default ILabel;
