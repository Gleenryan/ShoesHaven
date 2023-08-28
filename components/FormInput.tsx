'use client';
import { useState, Fragment } from "react";
import './styles/formInput.css'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function FormInput() {
    const [input, setInput] = useState('');
    const darkTheme = createTheme({
        palette: {
            mode: 'dark', // Enable dark mode
        },
    });
    return (
        <form action="" className="form">
            <div className="form__container">
                <ThemeProvider theme={darkTheme}>
                    <Stack spacing={2} >
                        <Autocomplete
                            className="form__input"
                            id="free-solo-demo"
                            freeSolo
                            options={top100Films.map((option) => option.title)}
                            renderInput={(params) => <TextField {...params} label="search" />}
                        />
                    </Stack>
                </ThemeProvider>

                <button className="form__svg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                </button>
            </div>
        </form>
    );
}

export default FormInput;

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 }]