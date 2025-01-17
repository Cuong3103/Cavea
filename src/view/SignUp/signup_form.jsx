import * as React from 'react';
import '../SignUp/signup_form.css'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from "@mui/material/styles";

import { CustomLoginForm, SignUp, BirdDecor } from "../Login/style_component";
import {
  CustomError,
  CustomTitle,
  CustomInput,
  CustomLoginAndSignUpButton,
  LoginAndSignUpButton,
  Text,
} from "../../Components/Login-and-signup-form/index.jsx";
import { FormWrapper } from "../../view/SignUp/style_component.jsx";
import bird_decor from "../../images/bird-decor.png";




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const CssTextField = styled(CustomInput)({
  "& label.Mui-focused": {
    color: "#398378",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#398378",
    },
    "&:hover fieldset": {
      borderColor: "#398378",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#398378",
    },
  },
});
// STYLE COMPONENTS
const mb4 = {
  marginBottom: '40px',
};
const formCardDiv = {
  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
};


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUpForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <FormWrapper>
        <CustomLoginForm style={formCardDiv}>
          <CustomTitle style={mb4}>Đăng Ký</CustomTitle>

          <div>

            <form onSubmit={handleSubmit}>
              <BirdDecor src={bird_decor} />
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                <Grid item xs={6}>
                  <CssTextField
                    required
                    label="Họ"
                    type="text"
                    name="uname"
                  >

                  </CssTextField>
                </Grid>
                <Grid item xs={6}>
                  <CssTextField
                    required
                    label="Tên"
                    type="text"
                    name="uname"
                  >

                  </CssTextField>
                </Grid>

                <Grid item xs={12}>
                  <CssTextField
                    required
                    label="Tên tài khoản"
                    type="text"
                    name="uname"
                    autoComplete="current-password"
                  >
                  </CssTextField>
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    required
                    label="Email"
                    type="text"
                    name="uname"
                    autoComplete="current-password"
                  >
                  </CssTextField>
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    required
                    label="Mật khẩu"
                    type="password"
                    name="pass"
                    autoComplete="current-password"
                  >

                  </CssTextField>
                </Grid>


                <Grid item xs={12}>
                  <CssTextField
                    required
                    label="Xác nhận mật khẩu"
                    type="password"
                    name="pass"
                    autoComplete="current-password"
                    style={mb4}
                  >

                  </CssTextField>
                </Grid>


                {/* <Grid item xs={6}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Nam" />
                    <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                   
                  </RadioGroup>
                </Grid>



                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>


                    <DatePicker label="Ngày sinh" />

                  </LocalizationProvider>
                </Grid> */}





              </Grid>
            </form>
            <Grid item xs={12}>
              <CustomLoginAndSignUpButton>

                <LoginAndSignUpButton>Đăng ký</LoginAndSignUpButton>
              </CustomLoginAndSignUpButton>

              <Text>Bạn đã có tài khoản?</Text>
              <SignUp href="/login-page">Đăng nhập</SignUp>
            </Grid>
          </div>

        </CustomLoginForm>
      </FormWrapper >
    </>
  );
}
