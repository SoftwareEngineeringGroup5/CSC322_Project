import { Box, Grid, Button, Paper } from "@mui/material";
import React from "react";
import { OwnerNavbar } from "../../components/navbar";

export const OwnerDashboard = () => {
    return (
        <Box>
            <Grid 
                container 
                direction="row" 
                textAlign="center"
                mt={40}
            >
                <Grid item xs={6}>
                    <Button
                        disableRipple
                        type="submit"
                        variant="contained" 
                        size="large" 
                        style={{
                            fontSize: 28,  
                            backgroundColor: 'black', 
                            color: 'white' , 
                            width: '450px',
                            height: '150px',  
                            borderRadius: '30px'
                        }}
                    > 
                        Review Compliments/Compliants
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button
                        disableRipple
                        type="submit"
                        variant="contained" 
                        size="large" 
                        style={{
                            fontSize: 28, 
                            backgroundColor: 'black', 
                            color: 'white' , 
                            width: '450px',
                            height: '150px',  
                            borderRadius: '30px'
                        }}
                    > 
                        Store Metrics
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}