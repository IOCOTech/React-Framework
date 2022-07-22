/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Media24 (https://www.media24.com)
 *  Onboarding is a trademark of Media24 (Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { AuthContext } from "contexts/RegisterContexts";
import { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      "AuthContext not found, please useAuth from within AuthContext.Provider",
    );
  }

  return context;
};

export default useAuth;
