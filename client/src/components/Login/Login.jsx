import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link2 from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { userLogin } from "../../api";
import { Alert } from "@mui/material";

const theme = createTheme();

export const Login = () => {
  const navigate = useNavigate();

  const [invalid, setInvalid] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (loginData) => {
    if (loginData) {
      userLogin(loginData)
        .then((res) => {
          const { status, user, userKey } = res;
          console.log(res);
          if (status === "ok" && user) {
            localStorage.setItem("userKey", JSON.stringify(userKey));
            navigate("/home");
            return;
          }
          setInvalid(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "30rem",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: "#fff" }}
        >
          <Box
            sx={{
              my: 13,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "3rem",
            }}
          >
            <div className="justify-start w-[100%]">
              <Typography
                align="left"
                component="h1"
                variant="h5"
                sx={{ fontSize: "2rem", fontWeight: "600" }}
              >
                Log in
              </Typography>
            </div>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors?.email?.type === "required" && (
                <p className="validate-error">This field is required</p>
              )}
              {errors?.email?.type === "pattern" && (
                <p className="validate-error">Invalid email format</p>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="validate-error">This field is required</p>
              )}
              {invalid && (
                <Alert sx={{ mt: 1 }} severity="error">
                  Invalid email or password!
                </Alert>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link2 href="#" variant="body2">
                    Forgot password?
                  </Link2>
                </Grid>
                <Grid item>
                  <Link2 variant="body2" className="cursor-pointer">
                    <Link to="/signup">{"Don't have an account? Sign Up"}</Link>
                  </Link2>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
