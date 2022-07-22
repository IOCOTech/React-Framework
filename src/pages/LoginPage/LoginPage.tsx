/*----------------------------------------------------------------------
 *  Copyright (c) 2022 Company Name (https://www.domain.com)
 *  App name is a trademark of Company Name(Pty) Ltd in South Africa. All rights reserved.
 *----------------------------------------------------------------------*/

import { container } from "assets/jss/styles";
import { Container, Link, Paper } from "@mui/material";
import { Formik } from "formik";
import { useRef } from "react";
import { useNavigate } from "react-router";
import {
  paletteBorderRadius,
  description,
  primaryColor,
  primaryTextColor,
} from "global/variables";
import { authenticatePost } from "services/AuthServices";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import loginSchema from "validators/loginSchema";
import Button from "components/Button/Button";
import Label from "components/Label/Label";
import useAuth from "contexts/AuthContext/useAuth";
import IUser from "interfaces/IUser";
import TextField from "components/TextField/TextField";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import logo from "assets/img/ioco_logo.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { handleAuthorization } = useAuth();

  const handleLogin = async (values: IUser) => {
    await authenticatePost(values)
      // TODO: Remove comment once token is to be used
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((token) =>
        handleAuthorization(
          "3r3rinf8696969i44f44", //token.accessToken
          "ee874648gd3r4rtt55", //token.refreshToken
          "343jjfefekj4fefj564", //token.openIdToken
        ),
      )
      .then(() => navigate("/home"))
      .catch((error) =>
        console.error("🚀 ~ file: LoginPage.tsx ~ line 48 ~ handleLogin ~ error", error),
      );
    //TODO: - Add proper response handling: Status Code
    //TODO: Notifcation to be added - Work in progress by @Wilson
  };

  return (
    <Box sx={container}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          alignSelf: "center",
          textAlign: "center",
        }}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}>
          {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
            <Slide direction="down" in={true} container={containerRef.current}>
              <Paper elevation={1} sx={{ borderRadius: paletteBorderRadius }}>
                <Box sx={{ background: primaryColor, p: 1 }}>
                  <GridContainer>
                    <GridItem xs={12} md={12} lg={12}>
                      <img src={logo} width={100} height={50} />
                    </GridItem>
                  </GridContainer>
                </Box>
                <Box sx={{ p: 3 }}>
                  <TextField
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur("email")}
                  />
                  <Label type={description} sx={{ color: "red" }}>
                    {touched.email && errors.email}
                  </Label>

                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange("password")}
                    value={values.password}
                    onBlur={handleBlur("password")}
                  />
                  <Label type={description} sx={{ color: "red" }}>
                    {touched.password && errors.password}
                  </Label>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>
                    <Button
                      data-testid="buttom-test1"
                      title="Login"
                      onClick={() => handleSubmit()}
                    />
                  </Box>
                  <Link
                    component="button"
                    variant="body1"
                    sx={{ color: primaryTextColor }}
                    onClick={() => {
                      navigate("forgot-password");
                    }}>
                    Forgot Password
                  </Link>
                  <Box sx={{ pt: 4 }}>
                    <Label type={description}>
                      <b> Powered by iOCO</b>
                    </Label>
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Label type={description}>
                      <b>V1.0.0</b>
                    </Label>
                  </Box>
                </Box>
              </Paper>
            </Slide>
          )}
        </Formik>
      </Container>
    </Box>
    //TODO: Fetch version from package JSON and display here
  );
}
