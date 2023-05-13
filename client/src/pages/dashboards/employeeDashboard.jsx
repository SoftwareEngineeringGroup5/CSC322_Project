import { Box, Grid, Button } from "@mui/material";
import React from "react";
import { EmployeeNavbar } from "../../components/navbar";

export const EmployeeDashboard = () => {
    return (
        <Box>
            <EmployeeNavbar/>
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
                            width: '400px',
                            height: '150px',  
                            borderRadius: '30px'
                        }}
                    > 
                        Review Applications
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
                            width: '400px',
                            height: '150px',  
                            borderRadius: '30px'
                        }}
                    > 
                        Manage Products
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}