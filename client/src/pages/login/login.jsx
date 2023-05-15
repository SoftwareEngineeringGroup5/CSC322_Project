import React, { useState } from "react";
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, account);
        setEmail("")
        setPassword("")
        setAccount("")
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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <FormControl fullWidth sx={{ mt: 2, mb:2}}>
                            <InputLabel id="account-type-label">Select Account Type</InputLabel>
                            <Select
                                labelId="account-type-label"
                                id="account-type-select"
                                label="Select Account Type"
                                value={account}
                                onChange={e => setAccount(e.target.value)}
                                sx={{ height: 60 }}
                            >
                                <MenuItem value={"Owner"}>Owner</MenuItem>
                                <MenuItem value={"Employee"}>Employee</MenuItem>
                                <MenuItem value={"Customer"}>Customer</MenuItem>
                            </Select>
                        </FormControl>
                        
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
