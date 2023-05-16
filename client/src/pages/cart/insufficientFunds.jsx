import React from "react";
import Typography from "@mui/material/Typography"
import { Box } from "@mui/material";

export const InsufficientFunds = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Typography mt={20} fontSize={64}>
                Insufficient funds! 1 warning issued
            </Typography>
        </Box> 
    )
}