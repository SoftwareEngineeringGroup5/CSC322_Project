import React, { useState, useContext } from 'react';
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const {userArray, setUserArray, userID, setUserID} = useContext(ShopContext)
    const {setUserName} = useContext(ShopContext);
    const {setUserBalance} = useContext(ShopContext);
    const {setUserWarnings} = useContext(ShopContext);
    const {setUserPraises} = useContext(ShopContext);
    const {userEmail, setUserEmail} = useContext(ShopContext);
    const {userPassword, setUserPassword} = useContext(ShopContext);
    const {userType, setUserType} = useContext(ShopContext);
    const navigate = useNavigate();

    const [inputEmail, setInputEmail] = useState('');
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirm, setInputConfirm] = useState('');

    const handleSubmit = (e) => {
        navigate("/login")
        e.preventDefault();
        if (inputPassword != inputConfirm) {
            console.log("mismatched passwords!")
        }
        const newID = userArray.length

        const newUser = {
            id: newID,
            applicationStatus: "pending",
            accountType: "Customer",
            username: inputUsername,
            email: inputEmail,
            password: inputPassword,
            balance: 0,
            warnings: 0,
            praises: 0,
        }

        const updatedUserList = [...userArray, newUser]
        setUserArray(updatedUserList);
        console.log(updatedUserList)
    }

    return(
        <Box>
            <Container component="main" maxWidth="xs">
                <Box 
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>

                    <Box component="form" 
                        onSubmit={handleSubmit} 
                        noValidate 
                        sx={{   display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center' }}
                    >

                        <TextField
                            margin="normal"
                            required
                            name="username"
                            label="Username"
                            id="username-field"
                            placeholder="user123"
                            autoFocus
                            value={inputUsername}
                            onChange={e => setInputUsername(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            name="email"
                            label="Email"
                            id="email-field"
                            placeholder="example@domain.com"
                            value={inputEmail}
                            onChange={e => setInputEmail(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            name="password"
                            label="Password"
                            type="password"
                            id="password-field"
                            placeholder="********" 
                            value={inputPassword}
                            onChange={e => setInputPassword(e.target.value)}
                            
                        />

                        <TextField
                            margin="normal"
                            required
                            name="confirm-password"
                            label="Confirm Password"
                            type="password"
                            id="confirm-password-field"
                            placeholder="********"
                            value={inputConfirm}
                            onChange={e => setInputConfirm(e.target.value)}
                        />

                        <Box mt={1}>
                            <Button onClick={() => navigate("/login")}
                                type="submit"
                                variant="contained"
                                size="medium" 
                                style={{ 
                                    backgroundColor: 'black', 
                                    color: 'white' , 
                                    width:'200px',  
                                    borderRadius: '30px',
                                }}
                            > 
                                Register
                            </Button>
                        </Box>
                        

                        <Grid mt={1} container>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Already have an account? Sign in"}
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box> 
            </Container>
        </Box>
    );
}