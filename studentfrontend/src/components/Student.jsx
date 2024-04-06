import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StudentService from "../service/StudentService";

export default function Student()
{
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const [name,setName]=useState('');
    const[address,setAddress]=useState('');
    const navigate = useNavigate();
    const [errors, setErrors]=useState(false); //Used for form validation.
    const [students,setStudents]=useState([]);

/* --------------------------- Save Student form Detail ---> START ---------------------------*/
    const saveStudentRecord=(e)=>
    {
        e.preventDefault();
        if(!name || !address)
        {
            setErrors(true);
            return
        }
        const student={name,address};
        //Call the service create method
        StudentService.createStudent(student)
        .then(response=>{
            console.log(response.data);
            const newStudent = response.data;
            setStudents(prevStudent=>[...prevStudent,newStudent]);
            setName('');
            setAddress('');
            setErrors(false);
           // navigate("/");//return to Home page
        })
        .catch(error=>{
            console.error('Something went wrong',error);
        })
    }
/* --------------------------- Save Student form Detail ---> END ---------------------------*/

/* --------------------------- Get Student Details from DB using useEffect ---> START ---------------------------*/
useEffect(() => {
    StudentService.getAllStudent()
        .then(response => {
            console.log('printing response', response.data);
            setStudents(response.data);
        })
        .catch(error => {
            console.log('something went wrong', error);
        })
}, []);
/* --------------------------- Get Student Details from DB using useEffect ---> END ---------------------------*/

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"#1976d2"}}><u>Add Student Details</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
         {errors && <span style={{color:`red`,fontStyle:`italic`}}>Please enter data for all fields</span>}
      <TextField id="outlined-basic" 
                label="Student Name"
                variant="outlined" 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                fullWidth />
      <TextField id="outlined-basic"
                 label="Student Address"
                 variant="outlined"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                 fullWidth />
        <Button variant="contained" onClick={(e)=>saveStudentRecord(e)}>Submit</Button>
    </Box>
    </Paper>

    {/* -------------- Displaying Student Details using Material UI ---> START -------------- */}
    <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"#1976d2"}}><u>Student Details</u></h1>
      {
        students.length > 0 ? students.map((s, index)=>(
            <Paper elevation={6} style={{margin:"10px", padding:"15px",textAlign:"left"}} key={s.id}>
                Id: {s.id} <br/>
                Name:{s.name} <br/>
                Address:{s.address} <br/>
            </Paper>
        )): "Student data is not available"
      }
    </Paper>
      {/* -------------- Displaying Student Details using Material UI ---> END -------------- */}

    </Container>
  );
}
