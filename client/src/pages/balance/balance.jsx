import { Button, Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Balances } from "./userBalances";

const userID = 0;

export const Balance = () => {
    const [balance, setBalance] = useState(Balances[userID].balance);
    const [deposit, setDeposit] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBalance(parseInt(balance) + parseInt(deposit))
        Balances[userID].balance = balance;
        console.log(Balances[0])
    }

    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}
        >
            <Typography padding={3} fontSize={42}>
                Balance
            </Typography>

            <Box
                component="form" 
                onSubmit={handleSubmit} 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography padding={5} fontSize={42}>
                    ${balance}
                </Typography>

                <TextField
                    margin="normal"
                    name="enter-amount-field"
                    label="Enter Amount"
                    id="enter-amount-field"
                    placeholder="Enter Amount"
                    autoFocus
                    onChange={e => setDeposit(parseInt(e.target.value))}
                />

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
                    Deposit
                </Button>
            </Box>
        </Box>
    )
}
