import React, { useContext, useState } from "react";
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const {userArray, userID, setUserID} = useContext(ShopContext)
    const {setUserName} = useContext(ShopContext);
    const {setUserBalance} = useContext(ShopContext);
    const {setUserWarnings} = useContext(ShopContext);
    const {setUserPraises} = useContext(ShopContext);
    const {userEmail, setUserEmail} = useContext(ShopContext);
    const {userPassword, setUserPassword} = useContext(ShopContext);
    const {userType, setUserType} = useContext(ShopContext);

    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const found = userArray.find(element => element.email === inputEmail) 
        console.log(userArray, found)
        
        if (found !== undefined){
            if(found.password === inputPassword) {
                console.log("login successful!");
                setUserName(found.username)
                setUserID(found.id)
                setUserBalance(found.balance)
                setUserWarnings(found.warnings)
                setUserPraises(found.praises)
            }
            navigate('/')
        }

        setInputEmail("")
        setInputPassword("")
    }

    return (
        <Box>
            <Container component="main" maxWidth="xs">
                <Box 
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Login
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
                            name="email"
                            label="Email"
                            id="email-field"
                            placeholder="example@domain.com"
                            autoFocus
                            autoComplete="current-email"
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
                            autoComplete="current-password"
                            value={inputPassword}
                            onChange={e => setInputPassword(e.target.value)}
                        />
                        <br/>
                        {/* <FormControl fullWidth sx={{ mt: 2, mb:2}}>
                            <InputLabel id="account-type-label">Select Account Type</InputLabel>
                            <Select
                                labelId="account-type-label"
                                id="account-type-select"
                                label="Select Account Type"
                                value={inputAccount}
                                onChange={e => setInputAccount(e.target.value)}
                                sx={{ height: 60 }}
                            >
                                <MenuItem value={"Owner"}>Owner</MenuItem>
                                <MenuItem value={"Employee"}>Employee</MenuItem>
                                <MenuItem value={"Customer"}>Customer</MenuItem>
                            </Select>
                        </FormControl> */}
                        
                        <Button
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
                            Login
                        </Button>

                        <Grid mt={2} container>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign-up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box> 
            </Container>
        </Box>
    )
}
