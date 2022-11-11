import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./acc_div.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreSharp';
import { display, flexbox } from '@mui/system';

export default function SimpleAccordion() {
  return (
    <div style = {{display : flexbox, justifyContent:"center", alignItems : "center", }}>

    <Box sx = {{   display: flexbox,
      justifyContent: 'center',
      flexDirection: 'column',
      height:"520px",
      width: '100%', position : "absolute", top : "2320px", margin:"auto", backgroundColor : "#010415",paddingLeft:"260px",paddingRight:"260px", paddingTop:"50px"}}>
      <Box className='inner_acc'>

      <Accordion sx = {{display : flexbox , backgroundColor : "#141127", width:'1000px',marginTop:'10px', color:"white", padding : "10px"}} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography sx = {{fontFamily : 'Mulish', fontStyle : 'normal', fontSize : '20px'}}>Will the idea deliver business value ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{display : flexbox , margin:'auto', color : "grey",fontFamily : 'Mulish'}}>
          <Typography >
          Yes , I think that the idea will deliver the business value , because we are clear will the vision that we are going to create a dashboard for the company manager which will help him in analysing the business closely and take actions properly .
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx = {{display : flexbox , backgroundColor : "#141127", width:'1000px',marginTop:'10px', color:"white", padding : "10px"}} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography sx = {{fontFamily : 'Mulish', fontStyle : 'normal', fontSize : '20px'}}>Is the idea unique ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{display : flexbox , margin:'auto', color : "grey",fontFamily : 'Mulish'}}>
          <Typography>
          Yes , the idea for creating a dashboard for helping the manager in analysing the company progress is completely unique . On the basis of previous year demand we will predict the future demands of the product and effects on supply during festive reason . For that we are going to use the machine learning . So, it is a unique idea . 
Further , if we got success then we can create it for many different companies and it may help the managers to manage things more properly . 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx = {{display : flexbox , backgroundColor : "#141127", width:'1000px',marginTop:'10px', color:"white", padding : "10px"}} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography sx = {{fontFamily : 'Mulish', fontStyle : 'normal', fontSize : '20px'}}>Is the idea implementable ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{display : flexbox , margin:'auto', color : "grey",fontFamily : 'Mulish'}}>
          <Typography>
          Yes , we are going to implement the same , we have a clear vision and roadmap to do so . 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx = {{display : flexbox , backgroundColor : "#141127", width:'1000px',marginTop:'10px', color:"white", padding : "10px"}} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography sx = {{fontFamily : 'Mulish', fontStyle : 'normal', fontSize : '20px'}}>Is the idea scalable ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{display : flexbox , margin:'auto', color : "grey",fontFamily : 'Mulish'}}>
          <Typography>
The idea is scalable because we are not stopping anything and then making something new , it is a additional dashboard which  will create a more deep analysis about the company production, selling and supply chain . 

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx = {{display : flexbox , backgroundColor : "#141127", width:'1000px',marginTop:'10px', color:"white", padding : "10px"}} elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography sx = {{fontFamily : 'Mulish', fontStyle : 'normal', fontSize : '20px'}}>What is the extent of implementation done during MVP phase ?</Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{display : flexbox , margin:'auto', color : "grey",fontFamily : 'Mulish'}}>
          <Typography>
          After doing it once with the data analysis of any random company we will move on going the analysis of some company and predict the future demand and if it worked well then we can suggest it to different company managers to use it . 
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Box>
    </Box>
            </div>
  );
}
