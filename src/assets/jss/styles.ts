/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Company Name (https://www.domain.com)
 *  App name is a trademark of Company Name(Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { fontSize, secondaryColor } from "global/variables";

const customTheme = {
  palette: {
    // dark: `${secondaryColor}`
  },
  typography: {
    fontSize: fontSize,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontFamily: "ProximaNova",
  },
  paper: {
    borderRadius: 0,
  },
};
const container = {
  width: "100vw",
  minHeight: "100vh",
  display: "flex",
  backgroundColor: secondaryColor,
  overflowX: "hidden",
};

export { container, customTheme };
