/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Company Name (https://www.domain.com)
 *  App name is a trademark of Company Name(Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import * as yup from "yup";

const loginSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default loginSchema;
