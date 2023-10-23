import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast}from 'react-toastify'




const defaultTheme = createTheme();

export default function OTPPage() {
    const Navigate=useNavigate();
    const [otp,setOtp]=useState();
    const [able,setAble]=useState(true);
    const [send,setSend]=useState('Send OTP')
    // let cloud=true;
    const auth=localStorage.getItem('user');
    const userEmail=JSON.parse(auth).data.email;
    const config={
        headers:{
            'content-type':'application/json'
        }
    }
    const SendOtp=async()=>{
        setAble(false);
        setSend("Resend Otp")
        toast("Otp Send",{
            position:'top-left'
        });
       let formData=new FormData();
       formData.append('email',userEmail);
       try{
           const response=await axios.post('http://localhost:5000/otp',formData,config);
           console.log(response);
           localStorage.setItem('verification',JSON.stringify(1));
       }catch(err){console.log(err,"error")}

    }
    const Check=(response)=>{
      if(response){
        localStorage.setItem('verification',1);
        Navigate('/');
      }else{

        alert('Wrong OTP');
        Check();
      } 
    }
    const Verify=async()=>{
        let formData=new FormData();
        formData.append('otp',otp);
        formData.append('email',userEmail);
        try{
 
            const response=await axios.post('http://localhost:5000/otpCheck',formData,config);
            console.log(response);
            // toast('Verification Done',{
            //     position:'top-left'
            // });
            Check(response);
        }catch(err){console.log(err,"error")}
    }

    const Skipped=()=>{
      localStorage.setItem('verification',0);
      Navigate('/profile')
    }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
            <TextField
            onChange={(e)=>setOtp(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="otp"
              label="otp"
              type="otp"
              id="otp"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Box className="w-full flex-wrap   ">
            <Button
              onClick={()=>SendOtp()}
            //   fullWidth
            className=''
              variant="contained"
              style={{margin:"20px"}}
              sx={{ mt: 3, mb: 2 }}
            >
             {send}
            </Button>
            <Button
              onClick={()=>Verify()}
            //   fullWidth
              variant="contained"
              style={{margin:"20px"}}
              sx={{ mt: 3, mb: 2 }}
              disabled={able}
            >
              Enter OTP
            </Button>
            <Button
            //   fullWidth
              variant="contained"
              onClick={()=>Skipped()}
              style={{margin:"20px"}}
              color='success'
              className=''
              sx={{ mt: 3, mb: 2 }}
            >
              SKIP
            </Button>
            </Box>
            
           
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}
