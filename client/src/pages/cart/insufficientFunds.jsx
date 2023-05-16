import React from "react";
import Typography from "@mui/material/Typography"
import { Box, Button, Link } from "@mui/material";

export const InsufficientFunds = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Typography m={20} fontSize={64}>
                Insufficient funds! 1 warning issued
            </Typography>

            <Link to="/cart">
                <Button
                    variant="contained"
                    size="large"
                    style={{
                        backgroundColor: 'black',
                        color: 'white' ,
                        width:'200px',
                        borderRadius: '30px',
                    }}
                >
                    Back to Cart
                </Button>
            </Link>
        </Box>
    )
}