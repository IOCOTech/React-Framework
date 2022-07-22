/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import IUser from "interfaces/IUser";
import { ReactNode } from "react";

interface IAuthContext {
  user?: IUser;
  isLoggedIn?: boolean;
  accessToken?: string | null;
  refreshToken?: string | null;
  openIdToken?: string | null;
  handleAuthorization?: (
    accessToken: string,
    refreshToken: string,
    openIdToken: string,
  ) => void;
  handleLogout?: () => void;
  handleRefreshToken?: () => void;
  validateToken?: () => void;
  children?: ReactNode;
}

export default IAuthContext;
