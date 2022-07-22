/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Company Name (https://www.domain.com)
 *  App name is a trademark of Company Name(Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import axios from "axios";

/** Base url */
const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export default instance;
