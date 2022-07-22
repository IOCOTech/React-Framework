/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import IAuthContext from "./interface/IAuthContext";
// import AuthConsumer from "./AuthConsumer";
import { AuthContext } from "contexts/RegisterContexts";
import { useMemo, useState } from "react";

const AuthProvider = ({ children }: IAuthContext) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [openIdToken, setOpenIdToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleAuthorization = (
    accessToken: string,
    refreshToken: string,
    openIdToken: string,
  ) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setOpenIdToken(openIdToken);
    setIsLoggedIn(true);
  };

  const handleLogout = () => setIsLoggedIn(null);

  const handleRefresh = () => {
    // TODO: handle token refresh
  };
  const validateToken = () => {
    // TODO: validate token expiration
  };

  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly!
  const memo = useMemo(
    () => ({
      isLoggedIn,
      accessToken,
      refreshToken,
      openIdToken,
      handleAuthorization,
      handleLogout,
      handleRefresh,
      validateToken,
    }),
    // Only re-renders when logging in or out
    // Performance is key.
    [isLoggedIn],
  );

  return <AuthContext.Provider value={memo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
