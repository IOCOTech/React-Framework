/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { createContext } from "react";
import IAuthContext from "./AuthContext/interface/IAuthContext";

const AuthContext = createContext<IAuthContext | null>(null);

export { AuthContext };
