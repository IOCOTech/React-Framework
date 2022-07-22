/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Company Name (https://www.domain.com)
 *  App name is a trademark of Company Name(Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

// import axios from "api/api";
import axios from "axios";
import IUser from "interfaces/IUser";

/**
 * Login
 * @body {user IUser}
 * @returns 200
 */
const authenticatePost = async (user: IUser) => {
  try {
    const resp = await axios.post("/auth/login", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return resp;
  } catch (error) {
    console.error(
      "🚀 ~ file: AuthServices.ts ~ line 25 ~ authenticatePost ~ error",
      error,
    );
  }
};

export { authenticatePost };
