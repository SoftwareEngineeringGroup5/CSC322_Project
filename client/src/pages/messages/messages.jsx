import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const messages = [
    {
        from: "Employee1",
        subject: "Subject line",
        message: "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."
    },
    {
        from: "Employee2",
        subject: "Subject line",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        from: "Employee3",
        subject: "Subject line",
        message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
]

const LoadMessages = () => {

}

export const Messages = () => {
  return (
    <Box 
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}
    >
        <Typography fontSize={36}>
            Inbox
        </Typography>
        
        <Accordion sx={{ width: 1000}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography>{messages[0].from}{" - "}{messages[0].subject}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {messages[0].message}
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: 1000}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
                <Typography>{messages[1].from}{" - "}{messages[1].subject}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {messages[1].message}
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  );
}